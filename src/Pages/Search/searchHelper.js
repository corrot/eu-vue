import {
  NEWSARCHIVE_URL,
  EVENTS_URL,
  PRESSRELEASES_URL,
  PROACTIVE_INFORMATION_ARCHIVE,
  ANNOUNCEMENTS_URL,
  DECISIONS_URL,
  EMPLOYEES_URL,
  // ABUSEOFDOMINITIONBYPROHIBITION_URL,
  // ABUSEOFDOMINITIONBYINVESTIGATION_URL,
  // AntiCompetitiveAgreementsByProhibition_URL,
  // AntiCompetitiveAgreementsByInvestigation_URL,
  // DistortionOfCompetitionByStateAuthoritiesByProhibition_URL,
  // DistortionOfCompetitionByStateAuthoritiesByInvestigation_URL,
  // UnfairCompetitionByProhibition_URL,
  // UnfairCompetitionByInvestigation_URL,
  // ConcentrationControl_URL,
  // StateAid_URL,
  // MarketMonitoring_URL,
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
  { redirectTo: 'decisionDetails', url: DECISIONS_URL, fields: ['tags'] },
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
  {
    redirectTo: 'announcementDetails',
    url: ANNOUNCEMENTS_URL,
    fields: ['title', 'article'],
  },
  {
    redirectTo: 'employDetail',
    url: EMPLOYEES_URL,
    fields: ['name', 'biography'],
  },
];

const flat = [
  {
    title: 'Decisions',
    path: '/decisions/:id',
    name: 'decisionDetails',
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
  {
    title: 'Structure',
    path: '/about-us/employ-detail/:id',
    name: 'employDetail',
    hidden: true,
  },
];

const getPath = (field, locale, query) => {
  return `${field}_${locale}_contains=${query}`;
};

export const searchEndpoints = (locale, query) => {
  let arr = [];
  endpoints.forEach(e => {
    return e.fields.map(o => {
      const j = {
        name: flat.find(o => e.redirectTo == o.name).title,
        link: `${e.url}?${getPath(o, locale, query.toString())}&_limit=1000`,
      };
      arr.push(j);
    });
  });

  return arr;
};
