export const API_BASE_URL = `https://admin.competition.ge`;

// Home
export const SLIDERDATA_URL = `${API_BASE_URL}/slidaerdata`;
export const CALENDARDATA_URL = `${API_BASE_URL}/calendardata`;
export const LINKS_URL = `${API_BASE_URL}/links`;
export const LINKTYPES_URL = `${API_BASE_URL}/linktypes`;
export const EVENTS_URL = `${API_BASE_URL}/events`;
export const ANNOUNCEMENTS_URL = `${API_BASE_URL}/announcements`;
export const VIDEOS_URL = `${API_BASE_URL}/videos`;
export const HOME_FORMS_URL = `${API_BASE_URL}/homeforms`;

// About Us
export const WHATWEDO_URL = `${API_BASE_URL}/whatwedos`;
export const HISTORY_URL = `${API_BASE_URL}/histories`;
export const CHAIRMAN_URL = `${API_BASE_URL}/chairmen`;
export const EMPLOYEES_URL = `${API_BASE_URL}/employees`;
export const COOPERATION_URL = `${API_BASE_URL}/cooperationtypes`;
export const COOPERATIONS_URL = `${API_BASE_URL}/cooperation`;
export const VACANCIES_URL = `${API_BASE_URL}/vacancies`;
export const INTERNSHIPS_URL = `${API_BASE_URL}/internships`;
export const PROJECTS_URL = `${API_BASE_URL}/projects`;
export const STRUCTURE_IMAGE_URL = `${API_BASE_URL}/stuctureimages`;
export const STRUCTURE_URL = `${API_BASE_URL}/structures`;
export const CATEGORIES_URL = `${API_BASE_URL}/categories`;

// Legislation
// export const NATIONAL_URL = `${API_BASE_URL}/national`;
// export const INTERNATIONAL_URL = `${API_BASE_URL}/international`;
// export const GUIDELINES_URL = `${API_BASE_URL}/guidelines`;
export const LEGISLATIONS_URL = `${API_BASE_URL}/legislations`;
export const NATIONAL_URL = `${API_BASE_URL}/legislationtypes/1`;
export const INTERNATIONAL_URL = `${API_BASE_URL}/legislationtypes/2`;
export const GUIDELINES_URL = `${API_BASE_URL}/legislationtypes/3`;

// Decisions
export const DECISIONS_URL = `${API_BASE_URL}/decisions`;
export const ABUSEOFDOMINITIONBYPROHIBITION_URL = `${API_BASE_URL}/decisiontypes/1`;
export const ABUSEOFDOMINITIONBYINVESTIGATION_URL = `${API_BASE_URL}/decisiontypes/2`;

export const AntiCompetitiveAgreementsByProhibition_URL = `${API_BASE_URL}/decisiontypes/3`;
export const AntiCompetitiveAgreementsByInvestigation_URL = `${API_BASE_URL}/decisiontypes/4`;

export const DistortionOfCompetitionByStateAuthoritiesByProhibition_URL = `${API_BASE_URL}/decisiontypes/5`;
export const DistortionOfCompetitionByStateAuthoritiesByInvestigation_URL = `${API_BASE_URL}/decisiontypes/6`;

export const UnfairCompetitionByProhibition_URL = `${API_BASE_URL}/decisiontypes/7`;
export const UnfairCompetitionByInvestigation_URL = `${API_BASE_URL}/decisiontypes/8`;

export const ConcentrationControl_URL = `${API_BASE_URL}/decisiontypes/9`;
export const StateAid_URL = `${API_BASE_URL}/decisiontypes/10`;
export const MarketMonitoring_URL = `${API_BASE_URL}/decisiontypes/11`;
export const ImpactAssessment_URL = `${API_BASE_URL}/decisiontypes/13`;

// Public Information
export const PROACTIVE_INFORMATION_URL = `${API_BASE_URL}/proactive`;
export const PROACTIVE_INFORMATION_TYPES_URL = `${API_BASE_URL}/proactiveinformationtypes`;
export const PROACTIVE_INFORMATION_ARCHIVE = `${API_BASE_URL}/proactiveinformations`;
export const ANNUALREPORTS_URL = `${API_BASE_URL}/annualreports`;
export const FORMS_URL = `${API_BASE_URL}/forms`;
export const PUBLICSURVEYS_URL = `${API_BASE_URL}/publicsurveys`;
export const FORMTYPES_URL = `${API_BASE_URL}/formtypes`;
export const ACCESS_PUBLIC_INFORMATION_URL = `${API_BASE_URL}/accesspublicinformations`;

// Media
export const PRESSRELEASES_URL = `${API_BASE_URL}/presreleas`;
export const RELEASES_URL = `${API_BASE_URL}/releases`;
export const NEWSLETTERS_URL = `${API_BASE_URL}/newsletters`;
export const NEWSARCHIVE_URL = `${API_BASE_URL}/newsarchives`;
export const PUBLICATIONS_URL = `${API_BASE_URL}/publications`;
export const FAQ_URL = `${API_BASE_URL}/faqs`;

// Contact
export const CONTACT_URL = `${API_BASE_URL}/contacts`;

export const decisionTypes = [
  {
    title: 'AbuseOfDominantPosition',
    path: '/decisions/abuse-of-dominant-position/by-prohibition',
    type: 'ByProhibition',
  },
  {
    title: 'AbuseOfDominantPosition',
    path: '/decisions/abuse-of-dominant-position/by-investigation',
    type: 'ByInvestigation',
  },
  {
    title: 'AntiCompetitiveAgreements',
    path: '/decisions/anti-competitive-agreements/by-prohibition',
    type: 'ByProhibition',
  },
  {
    title: 'AntiCompetitiveAgreements',
    path: '/decisions/anti-competitive-agreements/by-investigation',
    type: 'ByInvestigation',
  },
  {
    title: 'DistortionOfCompetitionByStateAuthorities',
    path:
      '/decisions/distortion-of-competition-by-state-authorities/by-prohibition',
    type: 'ByProhibition',
  },
  {
    title: 'DistortionOfCompetitionByStateAuthorities',
    path:
      '/decisions/distortion-of-competition-by-state-authorities/by-investigation',
    type: 'ByInvestigation',
  },
  {
    title: 'UnfairCompetition',
    path: '/decisions/unfair-competition/by-prohibition',
    type: 'ByProhibition',
  },
  {
    title: 'UnfairCompetition',
    path: '/decisions/unfair-competition/by-investigation',
    type: 'ByInvestigation',
  },
  {
    title: 'ConcentrationControl',
    path: '/decisions/concentration-control',
    type: '',
  },
  {
    title: 'StateAid',
    path: '/decisions/state-aid',
    type: '',
  },
  {
    title: 'MarketMonitoring',
    path: '/decisions/market-monitoring',
    type: '',
  },
];
