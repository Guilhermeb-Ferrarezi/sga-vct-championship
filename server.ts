import app from "./dist/server/server.js";

const port = Number(process.env.PORT ?? 3000);

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

    return app.fetch(request, undefined, undefined);
  },
});
