import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Adjust matchers to your routes; this covers all pages except Next internals and assets.
  matcher: ["/((?!_next|.*\..*|api).*)"]
};
