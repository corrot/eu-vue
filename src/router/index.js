import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/Pages/Home/Home';
import AboutUs from '@/Pages/AboutUs/AboutUs';
import WhatWeDo from '@/Pages/AboutUs/WhatWeDo/WhatWeDo';
import Projects from '@/Pages/AboutUs/Projects/Projects';
import Structure from '@/Pages/AboutUs/Structure/Structure';
import Employees from '@/Pages/AboutUs/Structure/Employees';

import PublicInformation from '@/Pages/PublicInformation/PublicInformation';
import AnnualReports from '@/Pages/PublicInformation/AnnualReports/AnnualReports';

import Contact from '@/Pages/Contact/Contact';
import Links from '@/Pages/Links/Links';
import Sitemap from '@/Pages/Sitemap/Sitemap';
import Media from '@/Pages/Media/Media';
import Releases from '@/Pages/Media/Releases/Releases';
import Newsletter from '@/Pages/Media/Newsletter/Newsletter';
import Decisions from '@/Pages/Decisions/Decisions';
import AbuseOfDominantPosition from '@/Pages/Decisions/AbuseOfDominantPosition/AbuseOfDominantPosition.vue';
import AbuseOfDominantPositionByProhibition from '@/Pages/Decisions/AbuseOfDominantPosition/ByProhibition.vue';
import AbuseOfDominantPositionByInvestigation from '@/Pages/Decisions/AbuseOfDominantPosition/ByInvestigation.vue';
import AntiCompetitiveAgreements from '@/Pages/Decisions/AntiCompetitiveAgreements/AntiCompetitiveAgreements.vue';
import AntiCompetitiveAgreementsByProhibition from '@/Pages/Decisions/AntiCompetitiveAgreements/ByProhibition.vue';
import AntiCompetitiveAgreementsByInvestigation from '@/Pages/Decisions/AntiCompetitiveAgreements/ByInvestigation.vue';
import DistortionOfCompetitionByStateAuthorities from '@/Pages/Decisions/DistortionOfCompetitionByStateAuthorities/DistortionOfCompetitionByStateAuthorities.vue';
import DistortionOfCompetitionByStateAuthoritiesByProhibition from '@/Pages/Decisions/DistortionOfCompetitionByStateAuthorities/ByProhibition.vue';
import DistortionOfCompetitionByStateAuthoritiesByInvestigation from '@/Pages/Decisions/DistortionOfCompetitionByStateAuthorities/ByInvestigation.vue';
import UnfairCompetition from '@/Pages/Decisions/UnfairCompetition/UnfairCompetition.vue';
import UnfairCompetitionByProhibition from '@/Pages/Decisions/UnfairCompetition/ByProhibition.vue';
import UnfairCompetitionByInvestigation from '@/Pages/Decisions/UnfairCompetition/ByInvestigation.vue';

import ConcentrationControl from '@/Pages/Decisions/ConcentrationControl';
import StateAid from '@/Pages/Decisions/StateAid';
import MarketMonitoring from '@/Pages/Decisions/MarketMonitoring';

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
        title: 'WhatWeDo',
        path: '/about-us/what-we-do',
        name: 'whatWeDo',
        component: WhatWeDo,
      },
      // {
      //   title: 'Chairman',
      //   path: '/chairman',
      //   name: 'chairman',
      //   component: Contact,
      // },
      {
        title: 'Structure',
        path: '/about-us/structure',
        name: 'structure',
        component: Structure,
      },
      // {
      //   title: 'Cooperation',
      //   path: '/cooperation',
      //   name: 'cooperation',
      //   component: Contact,
      // },
      // {
      //   title: 'Carreer',
      //   path: '/carreer',
      //   name: 'career',
      //   component: Contact,
      // },
      {
        title: 'Projects',
        path: '/about-us/projects',
        name: 'projects',
        component: Projects,
      },
    ],
  },
  // {
  //   title: 'Legislation',
  //   path: '/legislation',
  //   name: 'legislation',
  //   component: Contact,
  //   children: [
  //     {
  //       title: 'National',
  //       path: '/national',
  //       name: 'national',
  //       component: Contact,
  //     },
  //     {
  //       title: 'Guidelines',
  //       path: '/guidelines',
  //       name: 'guidelines',
  //       component: Contact,
  //     },
  //     {
  //       title: 'International',
  //       path: '/international',
  //       name: 'international',
  //       component: Contact,
  //     },
  //   ],
  // },
  {
    title: 'Decisions',
    path: '/decisions',
    name: 'decisions',
    component: Decisions,
    children: [
      {
        title: 'AbuseOfDominantPosition',
        path: '/decisions/abuse-of-diminant-position/by-prohibition',
        name: 'abuseOfDominantPosition',
        component: AbuseOfDominantPosition,
        children: [
          {
            title: 'ByProhibition',
            path: '/decisions/abuse-of-diminant-position/by-prohibition',
            name: 'abuseOfDominantPositionByProhibition',
            component: AbuseOfDominantPositionByProhibition,
          },
          {
            title: 'ByInvestigation',
            path: '/decisions/abuse-of-diminant-position/by-investigation',
            name: 'abuseOfDominantPositionByInvestigation',
            component: AbuseOfDominantPositionByInvestigation,
          },
        ],
      },
      {
        title: 'AntiCompetitiveAgreements',
        path: '/decisions/anti-competitive-agreements/by-prohibition',
        name: 'antiCompetitiveAgreements',
        component: AntiCompetitiveAgreements,
        children: [
          {
            title: 'ByProhibition',
            path: '/decisions/anti-competitive-agreements/by-prohibition',
            name: 'antiCompetitiveAgreementsByProhibition',
            component: AntiCompetitiveAgreementsByProhibition,
          },
          {
            title: 'ByInvestigation',
            path: '/decisions/anti-competitive-agreements/by-investigation',
            name: 'antiCompetitiveAgreementsByInvestigation',
            component: AntiCompetitiveAgreementsByInvestigation,
          },
        ],
      },
      {
        title: 'DistortionOfCompetitionByStateAuthorities',
        path:
          '/decisions/distortion-of-competition-by-state-authorities/by-prohibition',
        name: 'distortionOfCompetitionByStateAuthorities',
        component: DistortionOfCompetitionByStateAuthorities,
        children: [
          {
            title: 'ByProhibition',
            path:
              '/decisions/distortion-of-competition-by-state-authorities/by-prohibition',
            name: 'distortionOfCompetitionByStateAuthoritiesByProhibition',
            component: DistortionOfCompetitionByStateAuthoritiesByProhibition,
          },
          {
            title: 'ByInvestigation',
            path:
              '/decisions/distortion-of-competition-by-state-authorities/by-investigation',
            name: 'distortionOfCompetitionByStateAuthoritiesByInvestigation',
            component: DistortionOfCompetitionByStateAuthoritiesByInvestigation,
          },
        ],
      },
      {
        title: 'UnfairCompetition',
        path: '/decisions/unfair-competition/by-prohibition',
        name: 'unfairCompetition',
        component: UnfairCompetition,
        children: [
          {
            title: 'ByProhibition',
            path: '/decisions/unfair-competition/by-prohibition',
            name: 'unfairCompetitionByProhibition',
            component: UnfairCompetitionByProhibition,
          },
          {
            title: 'ByInvestigation',
            path: '/decisions/unfair-competition/by-investigation',
            name: 'unfairCompetitionByInvestigation',
            component: UnfairCompetitionByInvestigation,
          },
        ],
      },
      {
        title: 'ConcentrationControl',
        path: '/decisions/concentration-control',
        name: 'concentrationControl',
        component: ConcentrationControl,
      },
      {
        title: 'StateAid',
        path: '/decisions/state-aid',
        name: 'stateAid',
        component: StateAid,
      },
      {
        title: 'MarketMonitoring',
        path: '/decisions/market-monitoring',
        name: 'marketMonitoring',
        component: MarketMonitoring,
      },
    ],
  },
  {
    title: 'PublicInformation',
    path: '/public',
    name: 'public',
    component: PublicInformation,
    children: [
      // {
      //   title: 'Proactive information',
      //   path: '/proactive-information',
      //   name: 'proactiveInformation',
      //   component: Contact,
      // },
      {
        title: 'AnnualReports',
        path: '/annual-reports',
        name: 'annualReports',
        component: AnnualReports,
      },
      // {
      //   title: 'Statistics',
      //   path: '/statistics',
      //   name: 'statistics',
      //   component: Contact,
      // },
      // {
      //   title: 'Public survey',
      //   path: '/public-survey',
      //   name: 'publicSurvey',
      //   component: Contact,
      // },
      // {
      //   title: 'Request related acts',
      //   path: '/request-related-acts',
      //   name: 'requestRelatedActs',
      //   component: Contact,
      // },
      // {
      //   title: 'Request standard',
      //   path: '/request-standard',
      //   name: 'requestStandard',
      //   component: Contact,
      // },
      // {
      //   title: 'Application form',
      //   path: '/application-form',
      //   name: 'applicationForm',
      //   component: Contact,
      // },
      // {
      //   title: 'Complaint form',
      //   path: '/complaint-form',
      //   name: 'complaintForm',
      //   component: Contact,
      // },
    ],
  },
  {
    title: 'Media',
    path: '/media',
    name: 'media',
    component: Media,
    children: [
      // {
      //   title: 'Announcement',
      //   path: '/announcement',
      //   name: 'announcement',
      //   component: Contact,
      // },
      {
        title: 'PressReleases',
        path: '/media/press-releases/:id',
        name: 'pressReleases',
        component: Releases,
        hidden: true,
      },
      {
        title: 'PressReleases',
        path: '/media/press-releases',
        name: 'pressReleases',
        component: Releases,
      },
      // {
      //   title: 'Events',
      //   path: '/events',
      //   name: 'events',
      //   component: Contact,
      // },
      // {
      //   title: 'News archive',
      //   path: '/news-archive',
      //   name: 'newsArchive',
      //   component: Contact,
      // },
      // {
      //   title: 'Newsletter',
      //   path: '/newsletter',
      //   name: 'newsletter',
      //   component: Newsletter,
      // },
      // {
      //   title: 'Publications',
      //   path: '/publications',
      //   name: 'publications',
      //   component: Contact,
      // },
      // {
      //   title: 'FAQ',
      //   path: '/faq',
      //   name: 'faq',
      //   component: Contact,
      // },
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
    title: 'Employees',
    path: '/employees/:id',
    name: 'employees',
    component: Employees,
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
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound,
    children: [],
    hidden: true,
  },
];

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

// AbuseOfDominantPosition
// AntiCompetitiveAgreements
// DistortionOfCompetitionByStateAuthorities
// UnfairCompetitionByProhibition
// ConcentrationControl
// StateAid
// MarketMonitoring
