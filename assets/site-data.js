export const siteData = {
  profile: {
    name: "YE YILIN",
    kicker: "叶 伊霖",
    role: "MPhil in CSE at HKUST",
    summary:
      "I am an MPhil student in Computer Science and Engineering at the Hong Kong University of Science and Technology, working in VisLab and supervised by Prof. Huamin Qu. My research interests lie at the intersection of data visualization, HCI, AI, and AR/VR, following a BSc in Data Science and Technology with a minor in Business at HKUST.",
    summaryHtml:
      'I am an MPhil student in Computer Science and Engineering at the Hong Kong University of Science and Technology, working in <a href="http://vis.cse.ust.hk/index.html" target="_blank" rel="noreferrer">VisLab</a> and supervised by <a href="http://huamin.org" target="_blank" rel="noreferrer">Prof. Huamin Qu</a>. My research interests lie at the intersection of data visualization, HCI, AI, and AR/VR, following a BSc in Data Science and Technology with a minor in Business at HKUST.'
  },
  availabilityNotice:
    "I am on the job market and actively looking for PhD opportunities from Fall 2026.",
  heroLinks: [
    {
      label: "Email",
      tooltipLabel: "Send email",
      icon: "email",
      href: "mailto:yyeaz@connect.ust.hk",
      kind: "primary"
    },
    {
      label: "CV",
      icon: "cv",
      href: "/assets/files/resume.pdf",
      kind: "secondary",
      hidden: true
    },
    {
      label: "GitHub",
      icon: "github",
      href: "https://github.com/ylyeivonnnne",
      kind: "secondary",
      external: true
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/yilin-ye-811ab0252/",
      kind: "secondary",
      external: true
    },
    {
      label: "Google Scholar",
      icon: "scholar",
      href: "https://scholar.google.com/citations?hl=en&user=fhwz3soAAAAJ",
      kind: "secondary",
      external: true
    },
    {
      label: "ORCID",
      icon: "orcid",
      href: "https://orcid.org/my-orcid?orcid=0009-0000-9986-4420",
      kind: "secondary",
      external: true
    }
  ],
  researchFocus: [],
  news: [
    {
      date: "09/2025",
      title: "Started the MPhil program at HKUST",
      detail: "Joined Computer Science and Engineering at HKUST and began work in VisLab under Prof. Huamin Qu."
    },
    {
      date: "07/2025",
      title: "Graduated from HKUST with First Class Honors",
      detail: "Completed the BSc in Data Science and Technology at HKUST with a minor in Business."
    }
  ],
  publicationFilters: [
    { label: "All", value: "all" },
    { label: "Featured", value: "featured" }
  ],
  projectFilters: [
    { label: "All", value: "all" },
    { label: "Featured", value: "featured" }
  ],
  researchPapers: [
    {
      title: "LandSAR: Visceralizing Landslide Data for Enhanced Situational Awareness in Immersive Analytics",
      authors: [
        "Wong Kam-Kwai",
        "Yi-Lin YE",
        "Wai Tong",
        "Haobo Li",
        "Kentaro Takahira",
        "Aastha Bhatta",
        "Sunil Poudyal",
        "Charles Wang Wai Ng",
        "Huamin Qu",
        "Leni Yang"
      ],
      highlightedAuthors: ["Yi-Lin YE"],
      venue: "PacificVis",
      date: "2026",
      type: "preprint",
      typeLabel: "Preprint",
      featured: true,
      image: {
        src: "/assets/images/pvis26.png?v=20260614",
        alt: "Preview image for LandSAR paper"
      },
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.1109/PacificVis68791.2026.00030",
          external: true
        }
      ]
    }
  ],
  experienceItems: [
    {
      title: "Towards Large-Scale Vision-Language Models in Medicine",
      org: "Final Year Project",
      period: "06/2024 – 04/2025",
      location: "Hong Kong",
      supervisor: "Hao Chen, Assistant Professor at HKUST",
      featured: true,
      image: {
        src: "/assets/images/paper-placeholder.svg",
        alt: "Project preview placeholder"
      },
      tags: ["Machine Learning", "RAG", "LLM"],
      description:
        "Developed a multimodal RAG system for a generalist foundation model in pathology and radiology for VQA and radiology report generation tasks.",
      links: [
        {
          label: "DOI",
          href: "https://doi.org/10.48550/arXiv.2506.00855",
          external: true
        }
      ]
    },
    {
      title: "Knowledge Discovery over Database",
      org: "Undergraduate Research Opportunity",
      period: "02/2024 – 05/2024",
      location: "Hong Kong",
      supervisor: "Raymond Chi-Wing Wong, Professor at HKUST",
      featured: false,
      image: {
        src: "/assets/images/paper-placeholder.svg",
        alt: "Project preview placeholder"
      },
      tags: ["Machine Learning", "Recommendation Systems"],
      description:
        "Implemented the Neural Attentive Session-based Recommendation Model (NARM) for session-based recommendation and user preference prediction."
    },
    {
      title: "Trustworthy Machine Learning",
      org: "Undergraduate Research Opportunity",
      period: "06/2023 – 08/2023",
      location: "Hong Kong",
      supervisor: "Minhao Cheng, Assistant Professor at HKUST",
      featured: false,
      image: {
        src: "/assets/images/paper-placeholder.svg",
        alt: "Project preview placeholder"
      },
      tags: ["Machine Learning", "NLP"],
      description:
        "Worked on experimental design and result analysis for a framework that traces the origin of AI-generated content from large language models."
    }
  ],
  educationItems: [
    {
      degree: "MPhil in Computer Science and Engineering",
      institution: "The Hong Kong University of Science and Technology",
      period: "09/2025 – 08/2027 [anticipated]",
      location: "Hong Kong",
      schoolIcon: "hkust"
    },
    {
      degree: "BSc in Data Science and Technology",
      institution: "The Hong Kong University of Science and Technology",
      period: "09/2021 – 05/2025",
      location: "Hong Kong",
      schoolIcon: "hkust"
    },
    {
      degree: "Mobility Student in the Department of Computer Science",
      institution: "ETH Zurich",
      period: "09/2023 – 02/2024",
      location: "Zurich, Switzerland",
      schoolIcon: "eth"
    }
  ],
  awardItems: [
    {
      title: "University’s Scholarship Scheme for Continuing Undergraduate Students",
      issuer: "HKUST",
      date: "2023/24, 2024/25"
    },
    {
      title: "HKSAR Government Scholarship Fund, Reaching Out Award",
      issuer: "HKSAR Government",
      date: "2023/24"
    },
    {
      title: "Best Teamwork Individual Award in Student Partnership Co-creating Education 4.0 Program",
      issuer: "HKUST",
      date: "06/2022"
    }
  ]
};
