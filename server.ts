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
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return Response.redirect(new URL("/vct-sp/", request.url), 301);
    }

    if (url.pathname === "/vct-sp") {
      return Response.redirect(new URL("/vct-sp/", request.url), 301);
    }

    const assetResponse = serveStaticAsset(url.pathname);
    if (assetResponse) {
      return assetResponse;
    }

    return app.fetch(request, undefined, undefined);
  },
});
