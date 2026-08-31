export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  tags: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export type ResearchTheme = {
  title: string;
  summary: string;
  points: string[];
};

export type Project = {
  title: string;
  status: string;
  summary: string;
  outcomes: string[];
  tags: string[];
};

export type NewsItem = {
  date: string;
  title: string;
  description: string;
};

export const profile = {
  name: 'Zhiren Zhu',
  shortName: 'Zhiren',
  title: 'Postdoctoral Fellow in Geotechnical Engineering',
  affiliation: 'School of Architecture and Civil Engineering, City University of Hong Kong',
  location: 'Hong Kong SAR, China',
  email: 'zhirenzhu2@um.cityu.edu.hk',
  heroLine: 'Postdoctoral Fellow in Geotechnical Engineering',
  heroKeywords: [
    'Granular Micromechanics',
    'X-ray micro-CT',
    'Particle Breakage',
    'AI-enabled Geomechanics',
  ],
  summary:
    'I investigate how particle-scale morphology, breakage, and kinematics govern the macroscopic behaviour of granular materials. My research combines in-situ X-ray micro-CT, image-based particle reconstruction and tracking, machine learning, and computational geomechanics to uncover the micro-macro mechanics of crushable geomaterials.',
  portrait: `${import.meta.env.BASE_URL}profile-photo.png`,
  heroImage: `${import.meta.env.BASE_URL}research-hero.png`,
  links: [
    { label: 'Google Scholar', href: '#' },
    { label: 'ORCID', href: '#' },
    { label: 'GitHub', href: 'https://github.com/zhuzhiren92-dot' },
    { label: 'CV', href: '#' },
  ],
  focusAreas: [
    'Granular micromechanics',
    'Particle morphology and breakage',
    'In-situ X-ray micro-CT',
    'AI-enabled geomechanics',
  ],
  biography: [
    'I am currently a Postdoctoral Fellow in Geotechnical Engineering at City University of Hong Kong, where I completed my Ph.D. in Geotechnical Engineering. Prior to joining CityU, I received my B.E. and M.S. degrees in Geotechnical Engineering from Hunan University. My academic training has centered on geotechnical engineering, with an increasing focus on the particle-scale behavior of granular materials.',
    'My research focuses on the micromechanics of granular geomaterials, particularly particle breakage, morphology, and kinematics and their links to macroscopic mechanical behaviour. I combine in-situ X-ray micro-computed tomography, three-dimensional image analysis, particle tracking, machine learning, and numerical modelling to characterise the evolution of individual particles and fragments during loading. My broader research goal is to establish quantitative micro-macro links that advance the understanding and modelling of crushable granular materials.',
  ],
  methods: [
    'In-situ X-ray micro-CT',
    '3D Segmentation & Reconstruction',
    'Particle Tracking',
    'Machine Learning',
    'DEM',
  ],
  researchThemes: [
    {
      title: 'X-ray microtomography and in-situ testing',
      summary:
        'Experimental imaging workflows for observing granular materials during controlled mechanical loading.',
      points: [
        'Triaxial and one-dimensional compression tests',
        'Calcareous sand, quartz sand, HDG and CDG',
        'Microstructure observation during loading',
      ],
    },
    {
      title: 'Segmentation, tracking, and 3D reconstruction',
      summary:
        'Image-based reconstruction and tracking of particles and fragments from micro-CT datasets.',
      points: [
        'Particle recognition in micro-CT images',
        'Prompt-based segmentation and full-field tracking',
        'Multi-plane reconstruction of crushable particle systems',
      ],
    },
    {
      title: 'Particle breakage and morphology evolution',
      summary:
        'Quantitative descriptors for how particle shape and fragment populations evolve under load.',
      points: [
        'Breakage, morphology and pore characterization',
        'Fractal descriptors and particle-scale statistics',
        'Linking microstructure change to mechanical response',
      ],
    },
    {
      title: 'Data-driven and numerical geomechanics',
      summary:
        'Computational analysis that connects image-derived particle evidence with geomechanical models.',
      points: [
        'Machine learning for particle analysis',
        'Point-cloud and neural-network methods',
        'DEM-assisted interpretation of granular behaviour',
      ],
    },
  ] satisfies ResearchTheme[],
  publications: [
    {
      title: 'Verified publication title to be added',
      authors: 'Zhiren Zhu, Co-authors to be verified',
      venue: 'Journal / Conference record to be verified',
      year: '2026',
      tags: ['Granular Materials', 'micro-CT'],
      links: [{ label: 'Paper', href: '#' }],
    },
    {
      title: 'Verified publication title to be added',
      authors: 'Zhiren Zhu, Co-authors to be verified',
      venue: 'Journal / Conference record to be verified',
      year: '2025',
      tags: ['Particle Breakage', 'Morphology'],
      links: [{ label: 'DOI', href: '#' }],
    },
    {
      title: 'Verified publication title to be added',
      authors: 'Zhiren Zhu et al.',
      venue: 'Journal / Conference record to be verified',
      year: '2024',
      tags: ['3D Reconstruction', 'Tracking'],
      links: [{ label: 'PDF', href: '#' }],
    },
    {
      title: 'Verified publication title to be added',
      authors: 'Zhiren Zhu et al.',
      venue: 'Journal / Conference record to be verified',
      year: '2023',
      tags: ['Geomechanics', 'DEM'],
      links: [{ label: 'Code', href: '#' }],
    },
    {
      title: 'Verified publication title to be added',
      authors: 'Zhiren Zhu et al.',
      venue: 'Preprint / Manuscript record to be verified',
      year: '2022',
      tags: ['Data-driven Analysis', 'Granular Systems'],
      links: [{ label: 'Link', href: '#' }],
    },
  ] satisfies Publication[],
  projects: [
    {
      title: 'Particle breakage and morphology evolution',
      status: 'Active',
      summary:
        'Quantifying how particle shape, fragmentation, and breakage patterns evolve during mechanical loading.',
      outcomes: [
        'Connects particle morphology with macroscopic response',
        'Tracks fragment evolution from image-derived measurements',
        'Supports micro-macro interpretation of crushable materials',
      ],
      tags: ['Breakage', 'Morphology', 'Granular Materials'],
    },
    {
      title: 'In-situ X-ray micro-CT testing workflow',
      status: 'Active',
      summary:
        'Reconstructing and tracking three-dimensional particle structures from X-ray micro-CT data.',
      outcomes: [
        'Preserves particle-scale geometry and kinematic evidence',
        'Supports reproducible 3D segmentation and reconstruction',
        'Links imaging observations to mechanical behaviour',
      ],
      tags: ['micro-CT', '3D Analysis', 'Tracking'],
    },
    {
      title: 'Prompt-based particle segmentation',
      status: 'Prototype',
      summary:
        'Developing interactive segmentation routines for particle recognition in complex micro-CT images.',
      outcomes: [
        'Improves particle boundary extraction',
        'Supports full-field tracking pipelines',
        'Reduces manual correction workload',
      ],
      tags: ['Segmentation', 'Image Analysis', 'Workflow'],
    },
    {
      title: 'Full-field particle tracking',
      status: 'Active',
      summary:
        'Tracking individual particles and fragments to quantify motion, breakage, and local fabric evolution.',
      outcomes: [
        'Connects particle kinematics with deformation',
        'Captures fragment-level evolution',
        'Supports specimen-scale interpretation',
      ],
      tags: ['Tracking', 'Kinematics', 'Fabric'],
    },
    {
      title: 'AI-enabled geomechanics models',
      status: 'Draft',
      summary:
        'Integrating imaging evidence, machine learning, and numerical modelling for granular geomaterials.',
      outcomes: [
        'Extracts interpretable particle-level features',
        'Builds local-to-global mechanical links',
        'Supports predictive modelling of crushable systems',
      ],
      tags: ['Machine Learning', 'DEM', 'Modelling'],
    },
  ] satisfies Project[],
  news: [
    {
      date: '2026.08',
      title: 'Personal research website draft created',
      description:
        'Initial site structure prepared with sections for profile, biography, research, publications, projects, news, and contact.',
    },
    {
      date: '2026.07',
      title: 'Add a recent experiment update',
      description:
        'Use this space for one concise note about a completed test, new dataset, or image-analysis result.',
    },
    {
      date: '2026.06',
      title: 'Add a manuscript or paper update',
      description:
        'Record a submitted manuscript, accepted paper, preprint, dataset, or code release after verification.',
    },
    {
      date: '2026.05',
      title: 'Add a talk or seminar milestone',
      description:
        'Keep public-facing updates focused on research talks, invited presentations, and academic visits.',
    },
    {
      date: '2026.04',
      title: 'Add a collaboration note',
      description:
        'Use the fifth entry to confirm that the news panel scrolls inside the section without moving pages.',
    },
  ] satisfies NewsItem[],
  contact: {
    email: 'zhirenzhu2@um.cityu.edu.hk',
    phone: '+852-5225-1432',
    affiliation: 'School of Architecture and Civil Engineering, City University of Hong Kong',
    address: '83 Tat Chee Ave, Kowloon Tong, Hong Kong',
    orcid: '0000-0002-0874-9513',
    orcidUrl: 'https://orcid.org/0000-0002-0874-9513',
    researchTopics:
      'micro-CT imaging / particle breakage / segmentation / 3D reconstruction / particle tracking',
    office: 'School of Architecture and Civil Engineering, City University of Hong Kong',
    collaboration:
      'Open to collaboration in experimental geomechanics, X-ray microtomography, image analysis, and granular material mechanics.',
  },
};
