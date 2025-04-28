import VueMatomo from 'vue-matomo';

export function setupMatomo(app) {
    app.use(VueMatomo, {
        host: 'https://matomo.gazmag.hu',
        siteId: 2,
        disableCookies: true,
        doNotTrack: true,
        domains: ['*.tezis.hu', '*.tézis.hu'],
        enableLinkTracking: true,
        requireConsent: false,
        trackInitialView: true,
    });
}
