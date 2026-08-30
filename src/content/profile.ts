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
  title: 'Researcher',
  affiliation: 'Your Lab / Institution',
  location: 'City, Country',
  email: 'your.email@institution.edu',
  heroLine:
    'Experimental systems, quantitative analysis, and reproducible scientific workflows.',
  summary:
    'This site is a structured academic profile for research directions, experiments, publications, projects, notes, and collaboration information. Replace the draft entries in this file with your verified CV content before public release.',
  portrait: `${import.meta.env.BASE_URL}profile-placeholder.png`,
  heroImage: `${import.meta.env.BASE_URL}research-hero.png`,
  links: [
    { label: 'Google Scholar', href: '#' },
    { label: 'ORCID', href: '#' },
    { label: 'GitHub', href: 'https://github.com/zhuzhiren92-dot' },
    { label: 'CV', href: '#' },
  ],
  focusAreas: [
    'Scientific image analysis',
    'Experimental workflow design',
    'Computational biology methods',
    'Open and reproducible research tools',
  ],
  biography: [
    'I study how experimental data can be made more measurable, interpretable, and reusable. My work combines hands-on experiments, computational pipelines, and careful validation so that results can move from raw observations to defensible scientific claims.',
    'The current version of this website uses placeholder content because the final CV, publication list, laboratory affiliation, and contact details have not been provided yet. The structure is ready for those materials.',
  ],
  methods: [
    'Microscopy and image-based phenotyping',
    'Segmentation, registration, and quantitative feature extraction',
    'Notebook-first reproducible analysis',
    'Figure preparation for academic communication',
    'Version-controlled project documentation',
  ],
  researchThemes: [
    {
      title: 'Quantitative Experimental Imaging',
      summary:
        'Turning microscopy and experimental image data into structured measurements that can be audited and reproduced.',
      points: [
        'Image preprocessing and quality control',
        'Object detection, segmentation, and overlap analysis',
        'Human-in-the-loop annotation and validation',
      ],
    },
    {
      title: 'Reproducible Analysis Pipelines',
      summary:
        'Designing analysis workflows that preserve raw data, document parameters, and make validation easy to repeat.',
      points: [
        'Run-all notebook entry points',
        'Transparent baselines and regression checks',
        'Portable folders for collaborators and reviewers',
      ],
    },
    {
      title: 'Scientific Communication Tools',
      summary:
        'Building clear visual and written research outputs for manuscripts, talks, and public academic pages.',
      points: [
        'Editable figures and slide assets',
        'Structured paper and project summaries',
        'Public-facing research websites',
      ],
    },
  ] satisfies ResearchTheme[],
  publications: [
    {
      title: 'Replace with a representative publication title',
      authors: 'Your Name, Collaborator A, Collaborator B',
      venue: 'Journal or Conference Name',
      year: '2026',
      tags: ['Methods', 'Imaging'],
      links: [{ label: 'Paper', href: '#' }],
    },
    {
      title: 'Replace with a second publication title',
      authors: 'Your Name, Collaborator C',
      venue: 'Journal or Conference Name',
      year: '2025',
      tags: ['Experiment', 'Analysis'],
      links: [{ label: 'DOI', href: '#' }],
    },
    {
      title: 'Replace with a preprint, manuscript, or selected project paper',
      authors: 'Your Name et al.',
      venue: 'Preprint / Under Review / Archive',
      year: '2024',
      tags: ['Preprint', 'Open Science'],
      links: [{ label: 'Code', href: '#' }],
    },
  ] satisfies Publication[],
  projects: [
    {
      title: 'Image Analysis Workflow',
      status: 'Active',
      summary:
        'A reproducible workflow for processing experimental image data, validating outputs, and tracking model or rule changes.',
      outcomes: [
        'Preserves original data and notebooks',
        'Records parameter settings and regression evidence',
        'Supports future human-labeled validation',
      ],
      tags: ['Python', 'Notebook', 'Validation'],
    },
    {
      title: 'Editable Scientific Figures',
      status: 'Prototype',
      summary:
        'A practical pipeline for converting complex scientific visuals into editable presentation-ready assets.',
      outcomes: [
        'Separates text, arrows, labels, and layout elements',
        'Keeps complex artwork traceable when full vectorization is unrealistic',
        'Exports reviewable PowerPoint deliverables',
      ],
      tags: ['PowerPoint', 'Figures', 'Communication'],
    },
    {
      title: 'Research Website System',
      status: 'Draft',
      summary:
        'This website itself is structured as a reusable content-driven academic profile.',
      outcomes: [
        'Central content file for future edits',
        'Independent pages for research, papers, projects, and notes',
        'GitHub Pages workflow included',
      ],
      tags: ['React', 'TypeScript', 'GitHub Pages'],
    },
  ] satisfies Project[],
  news: [
    {
      date: '2026.08',
      title: 'Personal research website draft created',
      description:
        'Initial site structure prepared with pages for profile, research, publications, projects, news, and contact.',
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
    office: 'Building / Room, Institution',
    collaboration:
      'Open to collaborations on experimental imaging, quantitative analysis, reproducible workflows, and academic communication tools.',
  },
};
