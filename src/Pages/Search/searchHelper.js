import {
  NEWSARCHIVE_URL,
  EVENTS_URL,
  ANNUALREPORTS_URL,
  DECISIONS_URL,
  FAQ_URL,
  COOPERATION_URL,
  PRESSRELEASES_URL,
  RELEASES_URL,
  PROACTIVE_INFORMATION_ARCHIVE,
  PROJECTS_URL,
  PUBLICSURVEYS_URL,
  EMPLOYEES_URL,
  VACANCIES_URL,
  INTERNSHIPS_URL,
  ANNOUNCEMENTS_URL,
  LEGISLATIONS_URL,
  CHAIRMAN_URL,
  FORMS_URL,
  LINKS_URL,
  NEWSLETTERS_URL,
  PUBLICATIONS_URL,
} from '@/constants.js';
import { routes } from '@/router';

const endpoints = [
  { redirectTo: 'newsDetails', url: NEWSARCHIVE_URL, fields: [] },
  {
    redirectTo: 'eventDetails',
    url: EVENTS_URL,
    fields: ['title', 'article', 'tags'],
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
  { redirectTo: 'announcementDetails', url: ANNOUNCEMENTS_URL, fields: [] },
];

const getStringWithLocaleFromArray = (arr, locale, query) => {
  return arr.map(e => `${e}_${locale}_contains=${query}`).join('&');
};

const flat = [
  {
    title: 'News Details',
    path: '/media/news-archive/:id',
    name: 'newsDetails',
    hidden: true,
  },
  {
    title: 'Event',
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
