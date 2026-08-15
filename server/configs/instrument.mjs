import * as Sentry from "@sentry/node";

Sentry.init({
    dsn: "https://d857bdd93dc29b5e1da626fafab42a3b@o4511913751412736.ingest.us.sentry.io/4511913765830656",
    sendDefaultPii: true,
});
