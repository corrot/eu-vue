import {
  EVENTS_URL,
  PRESSRELEASES_URL,
  PROACTIVE_INFORMATION_ARCHIVE,
  ANNOUNCEMENTS_URL,
  DECISIONS_URL,
  EMPLOYEES_URL,
  PROJECTS_URL,
  COOPERATIONS_URL,
  PUBLICATIONS_URL,
  LEGISLATIONS_URL,
  FAQ_URL,
  WHATWEDO_URL,
  HISTORY_URL,
  FORMS_URL,
  PUBLICSURVEYS_URL,
  PROACTIVE_INFORMATION_TYPES_URL,
  CONTACT_URL,
  ACCESS_PUBLIC_INFORMATION_URL,
  ANNUALREPORTS_URL
} from '@/constants.js';

const endpoints = [
  {
    url: DECISIONS_URL,
    fields: ['tags', 'title', 'article'],
  },
  {
    url: EVENTS_URL,
    fields: ['title', 'article'],
  },
  {
    url: PRESSRELEASES_URL,
    fields: ['title', 'article'],
  },
  {
    url: ANNOUNCEMENTS_URL,
    fields: ['title', 'article'],
  },
  {
    url: PROJECTS_URL,
    fields: ['title', 'text'],
  },

  {
    url: PUBLICATIONS_URL,
    fields: ['article', 'title'],
  },
  {
    url: COOPERATIONS_URL,
    fields: ['title', 'text'],
  },
  {
    url: LEGISLATIONS_URL,
    fields: ['title'],
  },
  {
    url: FAQ_URL,
    fields: ['question', 'answer'],
  },
  {
    url: WHATWEDO_URL,
    fields: ['title', 'text'],
  },
  {
    url: HISTORY_URL,
    fields: ['title', 'text'],
  },
  {
    url: FORMS_URL,
    fields: ['title'],
  },
  {
    url: PUBLICSURVEYS_URL,
    fields: ['title'],
  },
  {
    url: PROACTIVE_INFORMATION_TYPES_URL,
    fields: ['title'],
  },
  {
    url: CONTACT_URL,
    fields: ['text'],
  },
  {
    url: PROACTIVE_INFORMATION_ARCHIVE,
    fields: ['title', 'comment'],
  },
  {
    url: EMPLOYEES_URL,
    fields: ['name', 'biography'],
  },
  {
    url: ACCESS_PUBLIC_INFORMATION_URL,
    fields: ['title', 'text'],
  },
  {
    url: ANNUALREPORTS_URL,
    fields: ['title'],
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
        link: `${e.url}?${getPath(o, locale, query.toString())}&_limit=1000`,
      };
      arr.push(j);
    });
  });

  return arr;
};
