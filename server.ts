import app from "./dist/server/server.js";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT ?? 3000);
const CLIENT_DIST_DIR = new URL("./dist/client/", import.meta.url);

function serveClientFile(relPath: string): Response | null {
  const filePath = fileURLToPath(new URL(relPath, CLIENT_DIST_DIR));
  if (!existsSync(filePath)) return null;

  const file = Bun.file(filePath);
  return new Response(file, {
    headers: {
      "content-type": file.type || "application/octet-stream",
    },
  });
}

function serveStaticAsset(pathname: string): Response | null {
  if (pathname === "/vct-sp/og-image.jpg") {
    return serveClientFile("og-image.jpg");
  }

  if (pathname.startsWith("/vct-sp/assets/")) {
    return serveClientFile(pathname.slice("/vct-sp/".length));
  }

  return null;
}

Bun.serve({
  hostname: "0.0.0.0",
  port,
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return Response.redirect(new URL("/vct-sp/", request.url), 301);
    }

    if (url.pathname === "/vct-sp-reset" || url.pathname === "/vct-sp-reset/") {
      return new Response(
        `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>Limpar cache</title><style>body{font-family:system-ui,sans-serif;background:#0f0a0a;color:#fff;display:grid;place-items:center;min-height:100vh;margin:0;padding:24px;text-align:center}p{max-width:42rem;line-height:1.5}a,button{font:inherit}</style></head><body><div><h1>Limpeza do VCT-SP</h1><p>Desregistrando service workers e apagando caches locais. Depois, a página principal vai abrir de novo.</p><button id="run">Executar limpeza</button><p id="status"></p></div><script>const status=document.getElementById('status');document.getElementById('run').onclick=async()=>{try{status.textContent='Limpando...';if('serviceWorker'in navigator){const regs=await navigator.serviceWorker.getRegistrations();await Promise.all(regs.map(r=>r.unregister()));}if('caches'in window){for(const key of await caches.keys())await caches.delete(key);}try{localStorage.clear();sessionStorage.clear();}catch(e){}status.textContent='Pronto. Redirecionando...';setTimeout(()=>location.replace('/vct-sp/?fresh=1'),500);}catch(e){status.textContent='Falhou ao limpar. Indo para o site mesmo assim.';setTimeout(()=>location.replace('/vct-sp/?fresh=1'),1000);}};</script></body></html>`,
        {
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "no-store, max-age=0, must-revalidate",
          },
        },
      );
    }

    if (url.pathname === "/vct-sp") {
      return Response.redirect(new URL("/vct-sp/", request.url), 301);
    }

    const assetResponse = serveStaticAsset(url.pathname);
    if (assetResponse) {
      return assetResponse;
    }

    const response = await app.fetch(request, undefined, undefined);
    const contentType = response.headers.get("content-type") ?? "";

    if (contentType.includes("text/html")) {
      const headers = new Headers(response.headers);
      headers.set("cache-control", "no-store, max-age=0, must-revalidate");
      headers.delete("etag");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return response;
  },
});
