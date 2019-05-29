import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/Pages/Home/Home';

import AboutUs from '@/Pages/AboutUs/AboutUs';
import WhatWeDo from '@/Pages/AboutUs/WhatWeDo/WhatWeDo';
import Projects from '@/Pages/AboutUs/Projects/Projects';
import Structure from '@/Pages/AboutUs/Structure/Structure.vue';
import Chairman from '@/Pages/AboutUs/Chairman/Chairman';
import Carreer from '@/Pages/AboutUs/Carreer/Carreer';
import Cooperation from '@/Pages/AboutUs/Cooperation/Cooperation';
import Employees from '@/Pages/AboutUs/Structure/Employees';

import Legislation from '@/Pages/Legislation/Legislation';
import National from '@/Pages/Legislation/National/National';
import Guidelines from '@/Pages/Legislation/Guidelines/Guidelines';
import International from '@/Pages/Legislation/International/International';

import PublicInformation from '@/Pages/PublicInformation/PublicInformation';
import AnnualReports from '@/Pages/PublicInformation/AnnualReports/AnnualReports';
import ProactiveInformation from '@/Pages/PublicInformation/ProactiveInformation/ProactiveInformation';
import Statistics from '@/Pages/PublicInformation/Statistics/Statistics';
import PublicSurvey from '@/Pages/PublicInformation/PublicSurvey/PublicSurvey';
import RequestRelatedActs from '@/Pages/PublicInformation/RequestRelatedActs/RequestRelatedActs';
import RequestStandard from '@/Pages/PublicInformation/RequestStandard/RequestStandard';
import ApplicationForm from '@/Pages/PublicInformation/ApplicationForm/ApplicationForm';
import ComplaintForm from '@/Pages/PublicInformation/ComplaintForm/ComplaintForm';

import Contact from '@/Pages/Contact/Contact';
import Links from '@/Pages/Links/Links';
import Sitemap from '@/Pages/Sitemap/Sitemap';

import Media from '@/Pages/Media/Media';
import Releases from '@/Pages/Media/Releases/Releases';
import NewsArchive from '@/Pages/Media/NewsArchive/NewsArchive';
import Newsletter from '@/Pages/Media/Newsletter/Newsletter';
import Announcement from '@/Pages/Media/Announcement/Announcement';
import Events from '@/Pages/Media/Events/Events';
import Publications from '@/Pages/Media/Publications/Publications';
import Faq from '@/Pages/Media/Faq/Faq';

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
    hidden: true,
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
      {
        title: 'Chairman',
        path: '/about-us/chairman',
        name: 'chairman',
        component: Chairman,
      },
      {
        title: 'Structure',
        path: '/about-us/structure',
        name: 'structure',
        component: Structure,
      },
      {
        title: 'Cooperation',
        path: '/about-us/cooperation',
        name: 'cooperation',
        component: Cooperation,
      },
      {
        title: 'Carreer',
        path: '/about-us/carreer',
        name: 'career',
        component: Carreer,
      },
      {
        title: 'Projects',
        path: '/about-us/projects',
        name: 'projects',
        component: Projects,
      },
    ],
  },
  {
    title: 'Legislation',
    path: '/legislation',
    name: 'legislation',
    component: Legislation,
    children: [
      {
        title: 'National',
        path: '/legislation/national',
        name: 'national',
        component: National,
      },
      {
        title: 'Guidelines',
        path: '/legislation/guidelines',
        name: 'guidelines',
        component: Guidelines,
      },
      {
        title: 'International',
        path: '/legislation/international',
        name: 'international',
        component: International,
      },
    ],
  },
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
      {
        title: 'ProactiveInformation',
        path: '/public/proactive-information',
        name: 'proactiveInformation',
        component: ProactiveInformation,
      },
      {
        title: 'AnnualReports',
        path: '/public/annual-reports',
        name: 'annualReports',
        component: AnnualReports,
      },
      {
        title: 'Statistics',
        path: '/public/statistics',
        name: 'statistics',
        component: Statistics,
      },
      {
        title: 'PublicSurvey',
        path: '/public/public-survey',
        name: 'publicSurvey',
        component: PublicSurvey,
      },
      {
        title: 'RequestRelatedActs',
        path: '/public/request-related-acts',
        name: 'requestRelatedActs',
        component: RequestRelatedActs,
      },
      {
        title: 'RequestStandard',
        path: '/public/request-standard',
        name: 'requestStandard',
        component: RequestStandard,
      },
      {
        title: 'ApplicationForm',
        path: '/public/application-form',
        name: 'applicationForm',
        component: ApplicationForm,
      },
      {
        title: 'ComplaintForm',
        path: '/public/complaint-form',
        name: 'complaintForm',
        component: ComplaintForm,
      },
    ],
  },
  {
    title: 'Media',
    path: '/media',
    name: 'media',
    component: Media,
    children: [
      {
        title: 'Announcement',
        path: '/media/announcement',
        name: 'announcement',
        component: Announcement,
      },
      {
        title: 'Press Releases Detail',
        path: '/media/press-releases/:id',
        name: 'pressReleasesDetail',
        component: {template: '<div>asfasf</div>'},
        hidden: true,
      },
      {
        title: 'PressReleases',
        path: '/media/press-releases',
        name: 'pressReleases',
        component: Releases,
      },
      {
        title: 'Events',
        path: '/media//events',
        name: 'events',
        component: Events,
      },
      {
        title: 'NewsArchive',
        path: '/media/news-archive',
        name: 'newsArchive',
        component: NewsArchive,
      },
      {
        title: 'Newsletter',
        path: '/media/newsletter',
        name: 'newsletter',
        component: Newsletter,
      },
      {
        title: 'Publications',
        path: '/media/publications',
        name: 'publications',
        component: Publications,
      },
      {
        title: 'FAQ',
        path: '/media/faq',
        name: 'faq',
        component: Faq,
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
