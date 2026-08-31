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
  email: 'your.email@institution.edu',
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
      title: 'Granular Micromechanics',
      summary:
        'Linking particle-scale morphology, kinematics, and contact evolution to macroscopic granular material behaviour.',
      points: [
        'Particle morphology and fabric evolution',
        'Micro-macro interpretation of crushable geomaterials',
        'Mechanics of granular assemblies under loading',
      ],
    },
    {
      title: 'X-ray Micro-CT and 3D Reconstruction',
      summary:
        'Using in-situ imaging and image-based reconstruction to observe individual particles and fragments during deformation.',
      points: [
        'In-situ X-ray micro-computed tomography',
        'Three-dimensional particle segmentation and reconstruction',
        'Image-based particle tracking and deformation analysis',
      ],
    },
    {
      title: 'AI-enabled Geomechanics',
      summary:
        'Combining machine learning, numerical modelling, and experimental data to improve granular material characterisation.',
      points: [
        'Data-driven morphology and breakage analysis',
        'Machine learning for particle-level interpretation',
        'DEM-informed computational geomechanics',
      ],
    },
  ] satisfies ResearchTheme[],
  publications: [
    {
      title: 'Replace with a representative publication title',
      authors: 'Zhiren Zhu, Collaborator A, Collaborator B',
      venue: 'Journal or Conference Name',
      year: '2026',
      tags: ['Geotechnical Engineering', 'Granular Materials'],
      links: [{ label: 'Paper', href: '#' }],
    },
    {
      title: 'Replace with a second publication title',
      authors: 'Zhiren Zhu, Collaborator C',
      venue: 'Journal or Conference Name',
      year: '2025',
      tags: ['X-ray micro-CT', 'Particle Breakage'],
      links: [{ label: 'DOI', href: '#' }],
    },
    {
      title: 'Replace with a preprint, manuscript, or selected project paper',
      authors: 'Zhiren Zhu et al.',
      venue: 'Preprint / Under Review / Archive',
      year: '2024',
      tags: ['AI Geomechanics', 'DEM'],
      links: [{ label: 'Code', href: '#' }],
    },
  ] satisfies Publication[],
  projects: [
    {
      title: 'Particle Breakage and Morphology',
      status: 'Active',
      summary:
        'Quantifying how particle shape, fragmentation, and breakage patterns evolve during mechanical loading.',
      outcomes: [
        'Connects particle morphology with macroscopic response',
        'Tracks fragment evolution from image-derived measurements',
        'Supports micro-macro interpretation of crushable materials',
      ],
      tags: ['Granular Materials', 'Breakage', 'Morphology'],
    },
    {
      title: 'In-situ X-ray Micro-CT Workflow',
      status: 'Active',
      summary:
        'A workflow for reconstructing, segmenting, and tracking three-dimensional particle structures from X-ray micro-CT data.',
      outcomes: [
        'Preserves particle-scale geometry and kinematic evidence',
        'Supports reproducible 3D segmentation and reconstruction',
        'Links imaging observations to mechanical behaviour',
      ],
      tags: ['X-ray micro-CT', '3D Analysis', 'Tracking'],
    },
    {
      title: 'AI-enabled Geomechanics Models',
      status: 'Draft',
      summary:
        'Data-driven modelling that integrates imaging, machine learning, and computational geomechanics.',
      outcomes: [
        'Extracts interpretable particle-level features',
        'Builds links between local particle evolution and bulk response',
        'Supports future predictive modelling of crushable geomaterials',
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
      title: 'Add your recent experiment, talk, or manuscript update',
      description:
        'Use the news list to keep a lightweight public record of research progress.',
    },
    {
      date: '2026.06',
      title: 'Add your lab or collaboration milestone',
      description:
        'Short entries work best: one result, one event, or one useful public link.',
    },
  ] satisfies NewsItem[],
  contact: {
    email: 'your.email@institution.edu',
    office: 'School of Architecture and Civil Engineering, City University of Hong Kong',
    collaboration:
      'Open to collaborations on granular micromechanics, X-ray micro-CT, particle breakage, AI-enabled geomechanics, and computational modelling of geomaterials.',
  },
};
