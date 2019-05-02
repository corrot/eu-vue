import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/Pages/Home/Home';
import AboutUs from '@/Pages/AboutUs/AboutUs';
import Contact from '@/Pages/Contact/Contact';
import Releases from '@/Pages/Releases/Releases';
import Links from '@/Pages/Links/Links';
import Sitemap from '@/Pages/Sitemap/Sitemap';
import PageNotFound from '@/Pages/PageNotFound/PageNotFound';

Vue.use(Router);

export const routes = [
  {
    title: 'Home',
    path: '/',
    name: 'home',
    component: Home,
    children: [],
  },
  {
    title: 'AboutUs',
    path: '/about-us',
    name: 'about',
    component: AboutUs,
    children: [
      {
        title: 'What we do',
        path: '/what-we-do',
        name: 'whatWeDo',
        component: Contact,
      },
      {
        title: 'Chairman',
        path: '/chairman',
        name: 'chairman',
        component: Contact,
      },
      {
        title: 'Structure',
        path: '/structure',
        name: 'structure',
        component: Contact,
      },
      {
        title: 'Cooperation',
        path: '/cooperation',
        name: 'cooperation',
        component: Contact,
      },
      {
        title: 'Carreer',
        path: '/carreer',
        name: 'career',
        component: Contact,
      },
      {
        title: 'Projects',
        path: '/projects',
        name: 'projects',
        component: Contact,
      },
    ],
  },
  {
    title: 'Legislation',
    path: '/legislation',
    name: 'legislation',
    component: Contact,
    children: [
      {
        title: 'National',
        path: '/national',
        name: 'national',
        component: Contact,
      },
      {
        title: 'Guidelines',
        path: '/guidelines',
        name: 'guidelines',
        component: Contact,
      },
      {
        title: 'International',
        path: '/international',
        name: 'international',
        component: Contact,
      },
    ],
  },
  {
    title: 'Decisions',
    path: '/decisions',
    name: 'decisions',
    component: Contact,
    children: [
      {
        title: 'Unfair competition',
        path: '/unfair-competition',
        name: 'unfairCompetition',
        component: Contact,
      },
      {
        title: 'Advertising',
        path: '/advertising',
        name: 'advertising',
        component: Contact,
      },
      {
        title: 'State aid',
        path: '/state-aid',
        name: 'stateAid',
        component: Contact,
      },
      {
        title: 'Abuse of dominant position',
        path: '/abuse-of-diminant-position',
        name: 'abuseOfDominantPosition',
        component: Contact,
      },
    ],
  },
  {
    title: 'Public Information',
    path: '/public',
    name: 'public',
    component: Contact,
    children: [
      {
        title: 'Proactive information',
        path: '/proactive-information',
        name: 'proactiveInformation',
        component: Contact,
      },
      {
        title: 'Annual reports',
        path: '/annual-reports',
        name: 'annualReports',
        component: Contact,
      },
      {
        title: 'Statistics',
        path: '/statistics',
        name: 'statistics',
        component: Contact,
      },
      {
        title: 'Public survey',
        path: '/public-survey',
        name: 'publicSurvey',
        component: Contact,
      },
      {
        title: 'Request related acts',
        path: '/request-related-acts',
        name: 'requestRelatedActs',
        component: Contact,
      },
      {
        title: 'Request standard',
        path: '/request-standard',
        name: 'requestStandard',
        component: Contact,
      },
      {
        title: 'Application form',
        path: '/application-form',
        name: 'applicationForm',
        component: Contact,
      },
      {
        title: 'Complaint form',
        path: '/complaint-form',
        name: 'complaintForm',
        component: Contact,
      },
    ],
  },
  {
    title: 'Media',
    path: '/media',
    name: 'media',
    component: Contact,
    children: [
      {
        title: 'Announcement',
        path: '/announcement',
        name: 'announcement',
        component: Contact,
      },
      {
        title: 'Press releases',
        path: '/press-releases',
        name: 'pressReleases',
        component: Contact,
      },
      {
        title: 'Events',
        path: '/events',
        name: 'events',
        component: Contact,
      },
      {
        title: 'News archive',
        path: '/news-archive',
        name: 'newsArchive',
        component: Contact,
      },
      {
        title: 'Newsletter',
        path: '/newsletter',
        name: 'newsletter',
        component: Contact,
      },
      {
        title: 'Publications',
        path: '/publications',
        name: 'publications',
        component: Contact,
      },
      {
        title: 'FAQ',
        path: '/faq',
        name: 'faq',
        component: Contact,
      },
    ],
  },
  {
    title: 'Contact',
    path: '/contact',
    name: 'contact',
    component: Contact,
    children: [],
  },
  {
    title: 'Releases',
    path: '/releases/:id',
    name: 'releases',
    component: Releases,
    children: [],
    hidden: true,
  },
  {
    title: 'Links',
    path: '/links',
    name: 'links',
    component: Links,
    children: [],
    hidden: true,
  },
  {
    title: 'Sitemap',
    path: '/sitemap',
    name: 'sitemap',
    component: Sitemap,
    children: [],
    hidden: true,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
