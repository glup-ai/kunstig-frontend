import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const ai = new ApplicationInsights({
  config: {
    connectionString:
      process.env.REACT_APP_APPLICATION_INSIGHT_CONNECTION_STRING,
    autoTrackPageVisitTime: true,
    enableAutoRouteTracking: true,
  },
});

ai.loadAppInsights();
export const appInsights = ai;
