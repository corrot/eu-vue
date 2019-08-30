import {
  NEWSARCHIVE_URL,
  EVENTS_URL,
  PRESSRELEASES_URL,
  PROACTIVE_INFORMATION_ARCHIVE,
  ANNOUNCEMENTS_URL,
  DECISIONS_URL,
  ABUSEOFDOMINITIONBYPROHIBITION_URL,
ABUSEOFDOMINITIONBYINVESTIGATION_URL,
AntiCompetitiveAgreementsByProhibition_URL,
AntiCompetitiveAgreementsByInvestigation_URL,
DistortionOfCompetitionByStateAuthoritiesByProhibition_URL,
DistortionOfCompetitionByStateAuthoritiesByInvestigation_URL,
UnfairCompetitionByProhibition_URL,
UnfairCompetitionByInvestigation_URL,
ConcentrationControl_URL,
StateAid_URL,
MarketMonitoring_URL
} from '@/constants.js';












const endpoints = [
  // { redirectTo: 'abuseOfDominantPositionByProhibition', url: ABUSEOFDOMINITIONBYPROHIBITION_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'abuseOfDominantPositionByInvestigation', url: ABUSEOFDOMINITIONBYINVESTIGATION_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'antiCompetitiveAgreementsByProhibition', url: AntiCompetitiveAgreementsByProhibition_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'antiCompetitiveAgreementsByInvestigation', url: AntiCompetitiveAgreementsByInvestigation_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'distortionOfCompetitionByStateAuthoritiesByProhibition', url: DistortionOfCompetitionByStateAuthoritiesByProhibition_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'distortionOfCompetitionByStateAuthoritiesByInvestigation', url: DistortionOfCompetitionByStateAuthoritiesByInvestigation_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'unfairCompetitionByProhibition', url: UnfairCompetitionByProhibition_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'unfairCompetitionByInvestigation', url: UnfairCompetitionByInvestigation_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'concentrationControl', url: ConcentrationControl_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'stateAid', url: StateAid_URL, fields: ['title', 'article', 'tags'] },
  // { redirectTo: 'marketMonitoring', url: MarketMonitoring_URL, fields: ['title', 'article', 'tags'] },
  { redirectTo: 'decisionDetails', url: DECISIONS_URL, fields: ['title'] },
  { redirectTo: 'newsDetails', url: NEWSARCHIVE_URL, fields: [] },
  {
    redirectTo: 'eventDetails',
    url: EVENTS_URL,
    fields: ['title', 'article'],
  },
  {
    redirectTo: 'pressReleasesDetail',
    url: PRESSRELEASES_URL,
    fields: ['title', 'article'],
  },
  {
    redirectTo: 'proactiveInformationDetails',
    url: PROACTIVE_INFORMATION_ARCHIVE,
    fields: ['title', 'comment'],
  },
  { redirectTo: 'announcementDetails', url: ANNOUNCEMENTS_URL, fields: ['title', 'article'] },
];

const getStringWithLocaleFromArray = (arr, locale, query) => {
  return arr.map(e => `${e}_${locale}_contains=${query}`).join('&');
};

const flat = [
  {
    title: 'Decisions',
    path: '/decisions/:id',
    name: 'decisionDetails',
    hidden: true,
  },
  {
    title: 'News Details',
    path: '/media/news-archive/:id',
    name: 'newsDetails',
    hidden: true,
  },
  {
    title: 'Events',
    path: '/media/events/:id',
    name: 'eventDetails',
    hidden: true,
  },
  {
    title: 'PressReleasesDetail',
    path: '/media/press-releases/:id',
    name: 'pressReleasesDetail',
    hidden: true,
  },
  {
    title: 'ProactiveInformationDetails',
    path: '/public/proactive-information-details/:id',
    name: 'proactiveInformationDetails',
    hidden: true,
  },
  {
    title: 'Announcement',
    path: '/media/announcement/:id',
    name: 'announcementDetails',
    hidden: true,
  },
];
// routes.forEach(route => {
//   if (route.children) {
//     flattenArray(route.children);
//   } else {
//     flat.push(route);
//   }
// });

export const searchEndpoints = (locale, query) => {
  return endpoints
    .filter(e => e.fields.length)
    .map(e => {
      return {
        redirectTo: flat.find(o => e.redirectTo == o.name),
        link: `${e.url}?${getStringWithLocaleFromArray(
          e.fields,
          locale,
          query.toString()
        )}`,
      };
    });
};
