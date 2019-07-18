import {
  NEWSARCHIVE_URL,
  EVENTS_URL,
  ANNUALREPORTS_URL,
  DECISIONS_URL,
  FAQ_URL,
  COOPERATION_URL,
  PRESSRELEASES_URL,
  RELEASES_URL,
  PROACTIVE_INFORMATION_URL,
  PROJECTS_URL,
  PUBLICSURVEYS_URL,
  EMPLOYEES_URL,
  VACANCIES_URL,
  INTERNSHIPS_URL,
  ANNOUNCEMENTS_URL,
  LEGISLATIONS_URL,
  CHAIRMAN_URL,
} from '@/constants.js';

const endpoints = [
  //   NEWSARCHIVE_URL,
  //   EVENTS_URL,
  ANNUALREPORTS_URL,
  DECISIONS_URL,
  //   FAQ_URL,
  //   COOPERATION_URL,
  //   PRESSRELEASES_URL,
  //   RELEASES_URL,
  //   PROACTIVE_INFORMATION_URL,
  //   PROJECTS_URL,
  //   PUBLICSURVEYS_URL,
  //   EMPLOYEES_URL,
  //   VACANCIES_URL,
  //   INTERNSHIPS_URL,
  //   ANNOUNCEMENTS_URL,
  //   LEGISLATIONS_URL,
  //   CHAIRMAN_URL,
];

const paths = [
  //   'title_',
  //   'article_',
  'tags_',
  //   'text_',
  //   'question_',
  //   'answer_',
  //   'comment_',
  //   'short_description_',
  //   'biography_',
  //   'name_',
  //   'position_',
];

let arr = [];

endpoints.map(o => {
  paths.map(i => {
    arr.push(`${o.toString()}?${i.toString()}`);
  });
});

export default arr;
