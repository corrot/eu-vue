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
  //   { redirectTo: 'annualReports', url: ANNUALREPORTS_URL, fields: [] },
  //   {
  //     redirectTo: 'eventDetails',
  //     url: DECISIONS_URL,
  //     fields: ['title', 'article', 'tags'],
  //   },
  //   { redirectTo: 'faq', url: FAQ_URL, fields: ['question', 'answer'] },
  //   { redirectTo: 'cooperation', url: COOPERATION_URL, fields: [] },
  {
    redirectTo: 'pressReleasesDetail',
    url: PRESSRELEASES_URL,
    fields: ['title', 'article'],
  },
  //   {
  //     redirectTo: 'releases',
  //     url: RELEASES_URL,
  //     fields: ['title', 'article'],
  //   },
  {
    redirectTo: 'proactiveInformationDetails',
    url: PROACTIVE_INFORMATION_ARCHIVE,
    fields: ['title', 'comment'],
  },
  //   { redirectTo: 'projects', url: PROJECTS_URL, fields: ['title', 'text'] },
  //   { redirectTo: 'publicSurvey', url: PUBLICSURVEYS_URL, fields: ['title'] },
  //   {
  //     redirectTo: 'employees',
  //     url: EMPLOYEES_URL,
  //     fields: ['name', 'position', 'biography'],
  //   },
  //   { redirectTo: 'career', url: VACANCIES_URL, fields: [] },
  //   { redirectTo: 'eventDetails', url: INTERNSHIPS_URL, fields: [] },
  { redirectTo: 'announcementDetails', url: ANNOUNCEMENTS_URL, fields: [] },
  //   { redirectTo: 'legislation', url: LEGISLATIONS_URL, fields: ['title'] },
  //   { redirectTo: 'chairman', url: CHAIRMAN_URL, fields: [] },
  //   { redirectTo: 'applicationForms', url: FORMS_URL, fields: ['title'] },
  //   { redirectTo: 'links', url: LINKS_URL, fields: ['title'] },
  //   {
  //     redirectTo: 'newsletter',
  //     url: NEWSLETTERS_URL,
  //     fields: ['title', 'article'],
  //   },
  //   {
  //     redirectTo: 'publications',
  //     url: PUBLICATIONS_URL,
  //     fields: ['title', 'article'],
  //   },
];

const getStringWithLocaleFromArray = (arr, locale, query) => {
  return arr.map(e => `${e}_${locale}_contains=${query}`).join('&');
};

const flat = [];
const flattenArray = routes =>
  routes.forEach(route => {
    if (route.children) {
      flattenArray(route.children);
    } else {
      flat.push(route);
    }
  });

flattenArray(routes);
export const searchEndpoints = (locale, query) => {
  //   console.log(flat.find(o => o.name == 'home'));
  return endpoints
    .filter(e => e.fields.length)
    .map(e => {
      //   console.log(flat.find(o => e.redirectTo == o.name));
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

// const endpoints = [
//   //   NEWSARCHIVE_URL,
//   //   EVENTS_URL,
//   ANNUALREPORTS_URL,
//   DECISIONS_URL,
//   //   FAQ_URL,
//   //   COOPERATION_URL,
//   //   PRESSRELEASES_URL,
//   //   RELEASES_URL,
//   //   PROACTIVEINFORMATION_URL,
//   //   PROJECTS_URL,
//   //   PUBLICSURVEYS_URL,
//   //   EMPLOYEES_URL,
//   //   VACANCIES_URL,
//   //   INTERNSHIPS_URL,
//   //   ANNOUNCEMENTS_URL,
//   //   LEGISLATIONS_URL,
//   //   CHAIRMAN_URL,
// ];

// const paths = [
//   //   'title',
//   //   'article',
//   'tags',
//   //   'text',
//   //   'question',
//   //   'answer',
//   //   'comment',
//   //   'shortdescription',
//   //   'biography',
//   //   'name',
//   //   'position',
// ];

// let arr = [];

// endpoints.map(o => {
//   paths.map(i => {
//     arr.push({ path: `${o.toString()}?${i.toString()}`, name: o });
//   });
// });

// export default arr;
