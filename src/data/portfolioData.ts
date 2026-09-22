export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features?: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface MainframeProgram {
  name: string;
  purpose: string;
  category: string;
}

export interface LearningMilestone {
  title: string;
  area: string;
  description: string;
  technologies: string[];
  type: 'project' | 'learning';
}

export const portfolioData = {
  profile: {
    name: "Sri Ganesh Kumar M",
    shortName: "Sri Ganesh",
    role: "AI / Backend Developer | Data Engineering | Java Developer",
    location: "Coimbatore, Tamil Nadu, India",
    email: "sriganesh.dev@example.com", // REPLACE with your preferred personal email address
    linkedin: "https://www.linkedin.com/in/sri-ganesh-kumar/",
    github: "https://github.com/SriGanesh-123/SriGanesh-123",
    resumeUrl: "/src/assets/resume/Sri_Ganesh_Kumar_Resume.pdf",
    profileImage: "/src/assets/images/profile.jpg",
    tagline: "Building backend systems, data-driven applications, and intelligent software solutions.",
    summary: [
      "I am a technology-focused developer interested in backend development, data engineering, and intelligent software systems. I work with Java, Python, SQL, databases, and modern AI/data technologies, and I enjoy building practical applications that solve real-world problems.",
      "My learning approach is strongly hands-on. I continuously strengthen my programming, backend, database, data engineering, and AI skills by building projects and experimenting with modern technologies such as RAG, vector databases, knowledge graphs, and distributed data processing."
    ],
    aboutText: "I am Sri Ganesh Kumar M, a technology-focused developer interested in backend development, data engineering, and intelligent software systems. My technical journey includes Java backend development, SQL and database systems, web application development, data engineering, and AI technologies such as RAG, vector databases, and knowledge graphs. I prefer learning through implementation rather than theory alone. I continuously build projects and experiment with technologies to strengthen my software engineering and problem-solving skills.",
    highlights: [
      {
        title: "Backend Development",
        description: "Designing structured backend architectures using Java, JSP, Servlets, Apache Tomcat, REST API concepts, and .NET/C# services.",
        icon: "Server"
      },
      {
        title: "Data Engineering",
        description: "Working with PySpark, Spark, Hadoop, Databricks, ETL pipelines, and Medallion Architecture (Bronze, Silver, Gold).",
        icon: "Database"
      },
      {
        title: "AI & RAG Systems",
        description: "Implementing Retrieval-Augmented Generation, vector databases (Qdrant, Pinecone), Neo4j knowledge graphs, and LangGraph.",
        icon: "Brain"
      },
      {
        title: "Continuous Learning",
        description: "Hands-on engineering mindset focused on practical implementation, deep technical exploration, and building real-world projects.",
        icon: "Code2"
      }
    ]
  },

  education: {
    degree: "Bachelor of Science in Information Technology",
    degreeShort: "B.Sc. Information Technology",
    institution: "KG College of Arts and Science (KGCAS)",
    location: "Coimbatore, Tamil Nadu, India",
    description: "Rigorous undergraduate program covering core computer science principles, software programming, database management, and information systems engineering."
  },

  skillsGrouped: [
    {
      category: "Programming Languages",
      iconName: "Code",
      skills: ["Java", "Python", "C++", "C#", "JavaScript", "SQL"]
    },
    {
      category: "Backend & Web Development",
      iconName: "Server",
      skills: [
        "Java",
        "JSP",
        "Servlets",
        "Apache Tomcat",
        "REST API Concepts",
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Python Web Frameworks",
        ".NET / C# API Development"
      ]
    },
    {
      category: "Database Systems",
      iconName: "Database",
      skills: ["MySQL", "PostgreSQL", "SQL", "Neo4j", "pgAdmin", "MySQL Workbench"]
    },
    {
      category: "Data Engineering",
      iconName: "Cpu",
      skills: [
        "Apache Spark",
        "PySpark",
        "Hadoop",
        "Databricks",
        "ETL Pipelines",
        "Medallion Architecture",
        "Bronze / Silver / Gold",
        "Data Warehousing Concepts",
        "ODS",
        "EDW",
        "Data Mart"
      ]
    },
    {
      category: "AI / Intelligent Systems & RAG",
      iconName: "Brain",
      skills: [
        "RAG (Retrieval-Augmented Generation)",
        "Vector Databases",
        "Qdrant",
        "Pinecone",
        "Sentence Transformers",
        "Embeddings",
        "Knowledge Graphs",
        "Neo4j",
        "LangGraph",
        "NVIDIA NIM",
        "Graph-based Retrieval"
      ]
    },
    {
      category: "Tools & Platforms",
      iconName: "Wrench",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Eclipse",
        "Apache Tomcat",
        "Docker Concepts",
        "Databricks",
        "Qdrant",
        "Neo4j"
      ]
    },
    {
      category: "Cloud & Concepts",
      iconName: "Cloud",
      skills: [
        "AWS",
        "Linux",
        "REST APIs",
        "Software Testing Concepts",
        "Agile / SDLC Concepts"
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "kairix",
      number: "01",
      title: "KAIRIX",
      category: "AI / Legacy Code Intelligence / RAG / Knowledge Graph",
      description:
        "An AI-powered system focused on understanding and processing legacy code and related software artifacts, including legacy insurance mainframe and COBOL artifacts. The project pipeline parses legacy code, extracts structured knowledge, builds knowledge packages, loads information into a Neo4j knowledge graph, generates semantic embeddings with Sentence Transformers, persists vector representations in Qdrant and Pinecone, and enables intelligent retrieval-augmented generation (RAG) workflows.",
      technologies: [
        "Python",
        "Neo4j",
        "Pinecone",
        "Qdrant",
        "LangGraph",
        "Tree-Sitter",
        "SQLGlot",
        "Sentence Transformers",
        "NVIDIA NIM",
        "RAG",
        "Knowledge Graph",
        "Vector Database",
        "Streamlit",
        "Git"
      ],
      features: [
        "Legacy code parsing via Tree-Sitter & SQLGlot",
        "Structured knowledge package extraction",
        "Property graph modeling in Neo4j",
        "Vector indexing in Qdrant & Pinecone",
        "LangGraph orchestration with NVIDIA NIM inference",
        "Streamlit interactive intelligence interface"
      ],
      githubUrl: "https://github.com/SriGanesh-123/SriGanesh-123",
      featured: true
    },
    {
      id: "timetable-generator",
      number: "02",
      title: "College Timetable Generator",
      category: "Java Backend / Web Application / Database",
      description:
        "A comprehensive web-based Java application engineered to help colleges manage and generate conflict-free academic timetables. Backed by Apache Tomcat and MySQL, the system models departmental hierarchies, classroom capacities, faculty allocations, subjects, and weekly timeslots with complete database persistence. Incorporates automated constraint-driven generation runs alongside manual slot fixing.",
      technologies: [
        "Java",
        "JSP",
        "Servlets",
        "Apache Tomcat",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      features: [
        "Department, classroom, and class management",
        "Faculty and subject allocation management",
        "Configurable weekly timeslots",
        "Manual timetable management & slot fixing",
        "Automated constraint-checked timetable generation runs",
        "Relational MySQL persistence with servlet controllers"
      ],
      githubUrl: "https://github.com/SriGanesh-123/SriGanesh-123",
      featured: true
    },
    {
      id: "attendance-tracker",
      number: "03",
      title: "Employee Attendance Tracker",
      category: "Backend / Database Application",
      description:
        "An employee attendance tracking application designed to maintain, log, and organize employee attendance records using a pure Java backend architecture and a relational MySQL database. Emphasizes structured relational schema design, database integrity, and accurate administrative record keeping.",
      technologies: ["Java", "MySQL", "SQL", "JDBC / Database Architecture"],
      features: [
        "Employee records & profile management",
        "Daily attendance logging and record verification",
        "Relational schema structure in MySQL",
        "Data persistence and administrative query tracking"
      ],
      githubUrl: "https://github.com/SriGanesh-123/SriGanesh-123",
      featured: true
    }
  ] as ProjectItem[],

  mainframeProject: {
    domain: "TFG Mainframe — Personal Lines Insurance",
    subtitle: "Legacy Modernization, Knowledge Engineering & Batch Processing",
    description:
      "A technical project and knowledge engineering initiative focused on analyzing legacy insurance mainframe batch workflows and domain artifacts. Centered around personal lines insurance processing, policy lifecycle management, premium calculation algorithms, earned premium accounting, and operational KPI extract generation.",
    technologies: [
      "COBOL",
      "JCL",
      "Copybooks",
      "VSAM",
      "Mainframe Batch Processing",
      "Insurance Policy Processing"
    ],
    programs: [
      {
        name: "POLLOAD",
        category: "Policy Loading",
        purpose: "Handles input policy file ingestion, batch validation, and loading into core insurance data structures."
      },
      {
        name: "PREMCALC",
        category: "Rating & Calculation",
        purpose: "Calculates personal lines insurance premiums based on rating tables, coverage factors, and policy terms."
      },
      {
        name: "EARNPREM",
        category: "Accounting & Finance",
        purpose: "Calculates earned premium accruals across policy active periods according to standard insurance accounting rules."
      },
      {
        name: "POLSTATUS",
        category: "Lifecycle Tracking",
        purpose: "Evaluates policy states (active, lapsed, renewed, cancelled) and maintains historical policy lifecycle transitions."
      },
      {
        name: "KPICALC",
        category: "Analytics & KPI",
        purpose: "Aggregates insurance metrics, loss ratios, written premium totals, and generates operational business indicators."
      },
      {
        name: "RPTEXTRACT",
        category: "Data Extraction",
        purpose: "Extracts operational records from VSAM and sequential datasets for reporting downstream systems."
      },
      {
        name: "MONTHEXT",
        category: "Monthly Batch",
        purpose: "Executes monthly financial and regulatory batch extracts for end-of-month reconciliation."
      }
    ] as MainframeProgram[]
  },

  learningJourney: [
    {
      title: "AI / RAG Systems & Code Intelligence",
      area: "Knowledge Graphs & LLMs",
      description:
        "Building end-to-end intelligent pipelines combining Tree-Sitter AST parsing, Neo4j knowledge graphs, Sentence Transformers, and vector databases (Qdrant, Pinecone) orchestrated by LangGraph.",
      technologies: ["Python", "Neo4j", "Qdrant", "Pinecone", "LangGraph", "Tree-Sitter", "NVIDIA NIM"],
      type: "project"
    },
    {
      title: "Legacy Mainframe & Knowledge Engineering",
      area: "COBOL & Mainframe Architecture",
      description:
        "Analyzing Personal Lines Insurance mainframe batch programs (POLLOAD, PREMCALC, EARNPREM, etc.), copybooks, VSAM datasets, and JCL workflows for legacy modernization and structured extraction.",
      technologies: ["COBOL", "JCL", "Copybooks", "VSAM", "Batch Systems"],
      type: "project"
    },
    {
      title: "Java Enterprise & Web Backend Development",
      area: "Core Backend Systems",
      description:
        "Developing database-backed web applications using Java Servlets, JSP, Apache Tomcat, and MySQL, with full constraint management and administrative workflows.",
      technologies: ["Java", "JSP", "Servlets", "Tomcat", "MySQL", "REST"],
      type: "project"
    },
    {
      title: "Data Engineering & Distributed Processing",
      area: "Big Data & Pipelines",
      description:
        "Exploring PySpark, Apache Spark, Hadoop, and Databricks. Implementing Medallion Architecture principles (Bronze, Silver, Gold layers) and data warehousing concepts (ODS, EDW, Data Mart).",
      technologies: ["PySpark", "Apache Spark", "Hadoop", "Databricks", "Medallion Architecture", "ETL"],
      type: "learning"
    },
    {
      title: "Relational Databases & Knowledge Graph Design",
      area: "Data Modeling & Storage",
      description:
        "Designing relational database schemas in MySQL and PostgreSQL with pgAdmin and MySQL Workbench, alongside labeled property graph schemas in Neo4j.",
      technologies: ["MySQL", "PostgreSQL", "Neo4j", "SQL", "pgAdmin"],
      type: "learning"
    },
    {
      title: "API Development with .NET / C#",
      area: "Service Architecture",
      description:
        "Building backend services and exploring modern C# / .NET API patterns, expanding multi-language backend engineering capabilities.",
      technologies: ["C#", ".NET", "REST APIs", "Backend Services"],
      type: "learning"
    }
  ] as LearningMilestone[],

  aiRagPipeline: [
    {
      step: "01",
      name: "Legacy Code",
      detail: "Source files (COBOL, JCL, Copybooks, SQL scripts, code artifacts)",
      badge: "Source Input"
    },
    {
      step: "02",
      name: "AST Parsing",
      detail: "Syntax parsing and token extraction with Tree-Sitter & SQLGlot",
      badge: "Parsing Engine"
    },
    {
      step: "03",
      name: "Knowledge Extraction",
      detail: "Structural package creation, semantic entities, and dependency mapping",
      badge: "Extraction"
    },
    {
      step: "04",
      name: "Knowledge Graph",
      detail: "Property graph modeling in Neo4j with labeled nodes and relationships",
      badge: "Graph DB"
    },
    {
      step: "05",
      name: "Embeddings",
      detail: "Dense vector generation using Sentence Transformers",
      badge: "Vector Models"
    },
    {
      step: "06",
      name: "Vector Database",
      detail: "High-dimensional vector indexing and similarity search in Qdrant & Pinecone",
      badge: "Vector Storage"
    },
    {
      step: "07",
      name: "RAG Retrieval",
      detail: "Multi-hop graph + vector hybrid retrieval via LangGraph & NVIDIA NIM",
      badge: "Hybrid Search"
    },
    {
      step: "08",
      name: "AI Response",
      detail: "Factual, contextually grounded code insights and architectural query answers",
      badge: "Synthesized Output"
    }
  ]
};
