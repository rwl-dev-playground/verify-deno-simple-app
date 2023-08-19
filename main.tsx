import { type VNode } from "preact";
import { renderToString } from "preact-render-to-string";
import { Status } from "std/http/http_status.ts";
import { contentType } from "std/media_types/mod.ts";
import { Layout, type PageOptions } from "./layout.tsx";
import { Home, homePageOptions } from "./routes/home.tsx";
import { About, aboutPageOptions } from "./routes/about.tsx";
import { NotFoundError, notFoundErrorPageOptions } from "./routes/404.tsx";

const htmlResponse = (
  options: PageOptions,
  contents: VNode,
  status: Status = Status.OK,
) =>
  new Response(
    renderToString(
      <Layout sitename="Verify Deno Simple App" options={options}>
        {contents}
      </Layout>,
    ),
    {
      status,
      headers: { "Content-Type": contentType("html") },
    },
  );

const router = (req: Request): Response => {
  const url = new URL(req.url);

  if (url.pathname === "/") return htmlResponse(homePageOptions, <Home />);
  if (url.pathname.endsWith("/about")) {
    return htmlResponse(aboutPageOptions, <About />);
  }

  return htmlResponse(
    notFoundErrorPageOptions,
    <NotFoundError />,
    Status.NotFound,
  );
};

Deno.serve((req) => router(req));
