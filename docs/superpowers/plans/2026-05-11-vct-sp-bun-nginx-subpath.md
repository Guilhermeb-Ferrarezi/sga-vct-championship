# VCT-SP Bun + Nginx Subpath Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve the championship site at `/vct-sp/` behind Nginx with a Bun SSR backend, while removing all Lovable branding and metadata from the app.

**Architecture:** Replace the Lovable Vite preset with an explicit Vite/TanStack Start config that sets the public base to `/vct-sp/` and the router basepath to `/vct-sp`. Add a tiny Bun server wrapper that imports the built TanStack Start handler and runs it on an internal port, then put Nginx in front to redirect `/` to `/vct-sp/` and proxy all `/vct-sp/` requests to Bun.

**Tech Stack:** Bun, Vite, TanStack Start, TanStack Router, Nginx, Docker

---

### Task 1: Remove Lovable branding and hardcode the subpath

**Files:**
- Modify: `vite.config.ts`
- Modify: `package.json`
- Modify: `src/routes/__root.tsx`
- Modify: `src/lib/error-page.ts`
- Modify: `src/router.tsx`
- Modify: `src/routes/__root.tsx`

- [ ] **Step 1: Replace the Lovable Vite preset**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  base: "/vct-sp/",
  plugins: [react(), tsconfigPaths(), tanstackStart({
    router: { basepath: "/vct-sp" },
  })],
});
```

- [ ] **Step 2: Replace Lovable metadata**

```ts
meta: [
  { charSet: "utf-8" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { title: "VCT-SP · Valorant — Santos Games Arena" },
  { name: "description", content: "Campeonato VCT-SP de Valorant com partidas transmitidas ao vivo, narração, comentários, HUD profissional e final presencial na Santos Games Arena." },
  { name: "author", content: "Santos Games Arena" },
  { property: "og:title", content: "VCT-SP · Valorant — Santos Games Arena" },
  { property: "og:description", content: "Transmissão profissional ao vivo. Final presencial na Santos Games Arena." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
]
```

- [ ] **Step 3: Make home/error links subpath-safe**

```ts
const homeHref = import.meta.env.BASE_URL;
```

Use `homeHref` in the error page and keep router links pointing to `/` so the router can expand them under `/vct-sp/`.

### Task 2: Add Bun runtime entry and Nginx proxy

**Files:**
- Create: `server.ts`
- Create: `nginx.conf`
- Create: `Dockerfile`
- Create: `.dockerignore`

- [ ] **Step 1: Add a Bun HTTP entry**

```ts
import app from "./dist/server/index.js";

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
```

- [ ] **Step 2: Proxy `/vct-sp/` through Nginx**

```nginx
server {
  listen 80;
  server_name _;

  location = / {
    return 301 /vct-sp/;
  }

  location = /vct-sp {
    return 301 /vct-sp/;
  }

  location ^~ /vct-sp/ {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
}
```

- [ ] **Step 3: Build the image**

```dockerfile
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .
RUN bun run build

FROM oven/bun:1
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends nginx ca-certificates && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./server.ts
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["sh", "-c", "bun /app/server.ts & exec nginx -g 'daemon off;'"]
```

### Task 3: Clean lockfile and verify runtime

**Files:**
- Modify: `bun.lock`
- Modify: `src/lib/error-page.ts`
- Modify: `src/routes/__root.tsx`

- [ ] **Step 1: Remove the Lovable dependency from the lockfile**

Run: `bun install`
Expected: the lockfile no longer contains `@lovable.dev/vite-tanstack-config` or `lovable-tagger`.

- [ ] **Step 2: Verify the production build**

Run: `bun run build`
Expected: build completes and the generated server bundle still resolves routes under `/vct-sp/`.

- [ ] **Step 3: Verify the image wiring**

Run: `docker build -t vct-sp .`
Expected: image builds successfully and Nginx starts alongside the Bun server.
