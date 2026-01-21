import type { MiddlewareHandler } from "astro";

const CANONICAL_HOST = "www.idexpraxis.nl";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const hostHeader = context.request.headers.get("x-forwarded-host")
    || context.request.headers.get("host")
    || context.url.host;
  const protoHeader = context.request.headers.get("x-forwarded-proto")
    || context.url.protocol.replace(":", "");
  const bypassRedirect = !hostHeader
    || hostHeader.includes("localhost")
    || hostHeader.startsWith("127.0.0.1");
  if (!bypassRedirect && (hostHeader !== CANONICAL_HOST || protoHeader !== "https")) {
    const target = new URL(context.url.toString());
    target.host = CANONICAL_HOST;
    target.protocol = "https:";
    return context.redirect(target.toString(), 301);
  }
  return next();
};
