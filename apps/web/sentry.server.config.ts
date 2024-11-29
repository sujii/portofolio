import * as Sentry from "@sentry/nextjs";
import { SENTRY_DSN } from "./consts/core";

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1,
  debug: false,
});
