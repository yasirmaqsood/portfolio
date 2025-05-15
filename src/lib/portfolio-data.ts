import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  FileText,
  Award,
  Languages,
  Settings2,
  Users,
  Cloud,
  BarChart2,
  Eye,
  Brain,
  Signal,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  CalendarDays,
  Cpu,
  TerminalSquare,
  Server,
  Database,
  ShieldCheck,
  GitBranch,
  Palette,
  Code,
  Link as LinkIcon,
} from 'lucide-react';

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinUser: string;
}

export interface AboutMe {
  description: string;
  keywords: string[];
}

export interface WorkExperienceItem {
  company: string;
  location: string;
  period: string;
  role: string;
  responsibilities: string[];
  icon?: LucideIcon;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  thesis?: string;
  details: string[];
  icon?: LucideIcon;
}

export interface PublicationItem {
  title: string;
  reference: string;
  year: string;
  link?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  link?: string;
}

export interface LanguageSkillItem {
  language: string;
  level?: string;
  listening?: string;
  reading?: string;
  writing?: string;
  spokenProduction?: string;
  spokenInteraction?: string;
}

export interface DigitalSkillItem {
  area: string;
  level: string;
  score: string;
}

export interface SkillItem {
  name: string;
  icon?: LucideIcon;
  category: 'Programming' | 'Tools' | 'Concepts' | 'Software';
}

export interface InterestItem {
  name: string;
  icon?: LucideIcon;
}

export interface RecommendationItem {
  name: string;
  title: string;
  phone?: string;
  email?: string;
}

export interface PortfolioData {
  contactInfo: ContactInfo;
  aboutMe: AboutMe;
  workExperience: WorkExperienceItem[];
  education: EducationItem[];
  publications: PublicationItem[];
  certifications: CertificationItem[];
  languageSkills: LanguageSkillItem[];
  digitalSkills: DigitalSkillItem[];
  skills: SkillItem[];
  interests: InterestItem[];
  recommendations: RecommendationItem[];
  fullResumeText: string;
}

const fullResumeText = `Yasir Maqsood
Work permit: Spanish Date of birth: 31/01/1997
Email: yasirmaqsood1997@gmail.com | Phone: (+34) 603497262
LinkedIn: https://www.linkedin.com/in/yasir-maqsood-linked/

ABOUT MYSELF
Motivated Data Science graduate with a strong foundation in Python, SQL, and key
libraries such as Numpy and OpenCV. Proficient in navigating the complexities of modern
data analytics. Skilled in delivering efficient solutions, leveraging a strong work ethic,
effective communication, optimism, and analytical prowess. Ready to contribute
meaningfully and enhance expertise in the dynamic field of data science.
Keywords: Software Engineer, Data Analyst, Programming, Software Developer

WORK EXPERIENCE
Center Tecnologic de Telecommunicions de Catalunya (CTTC)
City: Barcelona | Country: Spain
[ 20/11/2024 – Current ] Software developer / Researcher
· Software Development & Infrastructure Automation
Designed and developed software solutions using Python, integrated with MySQL
databases and Ansible for configuration management and automation.
· Server Configuration & Metrics Monitoring
Configured and maintained Linux servers, leveraging Prometheus, Grafana, and Loki for
comprehensive system and application metrics monitoring, logging, and visualization.
· Containerization & Orchestration
Developed and deployed applications using Docker, LXC, and managed container
orchestration with Kubernetes, ensuring scalability, high availability, and efficient
resource utilization.
· 5G Network Integration
Worked on terrestrial and non-terrestrial networks in 5G, including setup and testing with
Open5GS for core network emulation, and Android ADB for mobile device integration and
debugging.
· DevOps & Observability Stack
Implemented full-stack observability using Prometheus + Loki + Grafana, ensuring realtime system health visibility and proactive incident response.

Crypto Research & Development Center
City: Islamabad | Country: Pakistan
[ 03/03/2021 – 31/10/2024 ] Software Engineer
· Software Application Development using Python, C# & C++
· LTE,UMTS,GSM - RAN development and customization of libraries.
· Signal Analysis of Network Technologies of LTE/UMTS/GSM
· Data Analysis using data analytical tools including Power BI
· SQL for Database Management
· Development of Desktop and Linux-Based Applications
· Fixing and improving existing software
· Integrate software components and third-party programs
· Create technical documentation for reference and reporting
· Worked Independently and in a Team and Achieved Success in Both

KP Information Technology Board
City: Peshawar | Country: Pakistan
[ 08/12/2019 – 07/06/2020 ] Web Developer Intern
· Worked on JavaScript, JQuery, ASP.net (MVC),Entity Framework, Patterns, ADO.NET.
· MVC ASP.NET, C#
· Implemented Code first approach to design Databases.
· Collaborated in a team-focused environment providing solutions to diverse problems.
· Provided web security to web application.
· Investigated and resolved application issue for web-based programs providing end-user support.
· Developed Databases for web applications and websites.
· Arranged meetings and modified projects on the basis on feedback by the clients.

EDUCATION AND TRAINING
[ 14/09/2021 – 19/06/2023 ] Master of Science in Data Science
Air University
City: Islamabad | Country: Pakistan | | Final grade: 3.58 CGPA | Thesis: "A Deep
Learning based framework for classification of wheat crop’s diseases". Deep learning
Methods were utilized in order to classify the diseases found in wheat crops out of 6
classes that the model was trained on. It achieved a significant accuracy in identifying
wheat disease from utilizing wheat crop images.
· Machine Learning
· Deep Learning
· Probability and Statistics
· Data Visualization

[ 13/09/2015 – 01/09/2019 ] BS Software Engineering
Institute of Management Sciences
City: Peshawar | Country: Pakistan | | Final grade: 3.53 CGPA | Thesis: "Luggage
Sharing Web Application". A Web application was developed as a Final Year Project using
ASP.Net and C# to facilitate the customers to order anything from abroad through the
help of travelers traveling from that country.

PUBLICATIONS
[ 2024 ]
Model Agnostic Meta-Learning (MAML)-Based Ensemble Model for Accurate
Detection of Wheat Diseases Using Vision Transformer and Graph Neural Networks
Reference: Yasir Maqsood, Syed M.Usman, 2024

LANGUAGE SKILLS
Mother tongue(s): Urdu
Other language(s):
English
LISTENING C1 READING C1 WRITING B2
SPOKEN PRODUCTION B2 SPOKEN INTERACTION B2
Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2: Proficient user

DIGITAL SKILLS TEST RESULTS
A Information and data literacy ADVANCED Level 5 / 6
B Communication and collaboration INTERMEDIATE Level 4 / 6
C Digital content creation ADVANCED Level 5 / 6
D Safety ADVANCED Level 6 / 6
E Problem solving ADVANCED Level 5 / 6
Results from a self-assessment based on The Digital Competence Framework 2.1

CERTIFICATIONS
Data Scientist's Toolbox by Johns Hopkins University
Using Power BI with Excel (LinkedIn Learning)
Data-Driven Decisions with Power BI
Power BI Dashboards for Beginners (LinkedIn Learning)
Python for Data Science and AI by IBM
Microsoft Office Specialist
Certificate of “Essentials of Cyber Security & Vulnerability Assessment” by KPCERC

SKILLS
Python
C++
Linux - Ubuntu
SQL
Power BI
Microsoft Office
Bash Scripting
Kubernetes
Ansible
Prometheus
Grafana
LXC

INTERESTS
Cloud Computing
Data Analytics
Data Visualization
Artificial Intelligence
5G/6G

RECOMMENDATIONS
Name: Dr Syed M.Usman Assistant Professor
- Thesis Supervisor
Phone number: (+92) 3320615294 | E-mail: syed.usman@mail.au.edu.pk
Name: Dr. Amanullah Yasin Associate Professor
- Professor and Head of Department
Phone number: (+92) 3218040754 | E-mail: amanyasin@mail.au.edu.pk
`;

export const portfolioData: PortfolioData = {
  contactInfo: {
    name: "Yasir Maqsood",
    title: "Software Engineer | Researcher | Data Scientist",
    email: "yasirmaqsood1997@gmail.com",
    phone: "(+34) 603497262",
    linkedin: "https://www.linkedin.com/in/yasir-maqsood-linked/",
    linkedinUser: "yasir-maqsood-linked",
  },
  aboutMe: {
    description: "",
    //description: "Analytical and solutions-oriented Software Engineer with a strong academic background in Data Science and practical experience in applied machine learning and cloud-native technologies. Demonstrated expertise in developing and deploying intelligent systems using Python, SQL and OpenCV, alongside robust skills in containerization (Docker, LXC), orchestration (Kubernetes), and infrastructure monitoring (Prometheus, Grafana, Loki). Proven contributor to real-world projects, with  hands-on experience in open-source networks (OpenBTS, SRSLTE, Open5Gs), edge computing, and AI-enabled platforms. Recognized for a proactive mindset, technical versatility, and dedication to driving innovation through data-driven methodologies.",
    keywords: ["Software Engineer", "Data Analyst", "DevOps", "Researcher"],
  },
  workExperience: [
    {
      company: "Center Tecnologic de Telecommunicions de Catalunya (CTTC)",
      location: "Barcelona, Spain",
      period: "Nov 2024 – Current",
      role: "Software developer / Researcher",
      responsibilities: [
        "Designed and developed software solutions using Python, integrated with MySQL databases and Ansible for configuration management and automation.",
        "Configured and maintained Linux servers, leveraging Prometheus, Grafana, and Loki for comprehensive system and application metrics monitoring, logging, and visualization.",
        "Developed and deployed applications using Docker, LXC, and managed container orchestration with Kubernetes, ensuring scalability, high availability, and efficient resource utilization.",
        "Worked on terrestrial and non-terrestrial networks in 5G, including setup and testing with Open5GS for core network emulation, and Android ADB for mobile device integration and debugging.",
        "Implemented full-stack observability using Prometheus + Loki + Grafana, ensuring real-time system health visibility and proactive incident response."
      ],
      icon: Briefcase,
    },
    {
      company: "Crypto Research & Development Center",
      location: "Islamabad, Pakistan",
      period: "Mar 2021 – Oct 2024",
      role: "Software Engineer",
      responsibilities: [
        "Software Application Development using Python, C# & C++.",
        "LTE,UMTS,GSM - RAN development and customization of libraries.",
        "Signal Analysis of Network Technologies of LTE/UMTS/GSM.",
        "Data Analysis using data analytical tools including Power BI.",
        "SQL for Database Management.",
        "Development of Desktop and Linux-Based Applications.",
        "Fixing and improving existing software.",
        "Integrate software components and third-party programs.",
        "Create technical documentation for reference and reporting.",
        "Worked Independently and in a Team and Achieved Success in Both."
      ],
      icon: Briefcase,
    },
    {
      company: "KP Information Technology Board",
      location: "Peshawar, Pakistan",
      period: "Dec 2019 – Jun 2020",
      role: "Web Developer Intern",
      responsibilities: [
        "Worked on JavaScript, JQuery, ASP.net (MVC), Entity Framework, Patterns, ADO.NET.",
        "MVC ASP.NET, C#.",
        "Implemented Code first approach to design Databases.",
        "Collaborated in a team-focused environment providing solutions to diverse problems.",
        "Provided web security to web application.",
        "Investigated and resolved application issue for web-based programs providing end-user support.",
        "Developed Databases for web applications and websites.",
        "Arranged meetings and modified projects on the basis on feedback by the clients."
      ],
      icon: Briefcase,
    },
  ],
  education: [
    {
      degree: "Master of Science in Data Science",
      institution: "Air University",
      location: "Islamabad, Pakistan",
      period: "Sep 2021 – Jun 2023",
      grade: "3.58 CGPA",
      thesis: "\"A Deep Learning based framework for classification of wheat crop’s diseases\". Deep learning Methods were utilized in order to classify the diseases found in wheat crops out of 6 classes that the model was trained on. It achieved a significant accuracy in identifying wheat disease from utilizing wheat crop images.",
      details: ["Machine Learning", "Deep Learning", "Probability and Statistics", "Data Visualization"],
      icon: GraduationCap,
    },
    {
      degree: "BS Software Engineering",
      institution: "Institute of Management Sciences",
      location: "Peshawar, Pakistan",
      period: "Sep 2015 – Sep 2019",
      grade: "3.53 CGPA",
      thesis: "\"Luggage Sharing Web Application\". A Web application was developed as a Final Year Project using ASP.Net and C# to facilitate the customers to order anything from abroad through the help of travelers traveling from that country.",
      details: [],
      icon: GraduationCap,
    }
  ],
  publications: [
    {
      title: "Model Agnostic Meta-Learning (MAML)-Based Ensemble Model for Accurate Detection of Wheat Diseases Using Vision Transformer and Graph Neural Networks",
      reference: "Yasir Maqsood, Syed M.Usman",
      year: "2024",
    }
  ],
  certifications: [
    { name: "Data Scientist's Toolbox", issuer: "Johns Hopkins University" },
    { name: "Using Power BI with Excel", issuer: "LinkedIn Learning" },
    { name: "Data-Driven Decisions with Power BI", issuer: "" },
    { name: "Power BI Dashboards for Beginners", issuer: "LinkedIn Learning" },
    { name: "Python for Data Science and AI", issuer: "IBM" },
    { name: "Microsoft Office Specialist", issuer: "" },
    { name: "Essentials of Cyber Security & Vulnerability Assessment", issuer: "KPCERC" },
  ],
  languageSkills: [
    { language: "Urdu", level: "Mother Tongue" },
    { 
      language: "English", 
      listening: "C1", 
      reading: "C1", 
      writing: "B2",
      spokenProduction: "B2",
      spokenInteraction: "B2",
      level: "Proficient User (C1/B2)"
    },
  ],
  digitalSkills: [
    { area: "Information and data literacy", level: "ADVANCED", score: "Level 5 / 6" },
    { area: "Communication and collaboration", level: "INTERMEDIATE", score: "Level 4 / 6" },
    { area: "Digital content creation", level: "ADVANCED", score: "Level 5 / 6" },
    { area: "Safety", level: "ADVANCED", score: "Level 6 / 6" },
    { area: "Problem solving", level: "ADVANCED", score: "Level 5 / 6" },
  ],
  skills: [
    { name: "Python", icon: Code, category: "Programming" },
    { name: "C++", icon: Code, category: "Programming" },
    { name: "C#", icon: Code, category: "Programming" },
    { name: "JavaScript", icon: Code, category: "Programming" },
    { name: "SQL", icon: Database, category: "Programming" },
    { name: "Bash Scripting", icon: TerminalSquare, category: "Programming" },
    { name: "Linux - Ubuntu", icon: Server, category: "Tools" },
    { name: "Docker", icon: Cpu, category: "Tools" },
    { name: "Kubernetes", icon: Cpu, category: "Tools" },
    { name: "Ansible", icon: Settings2, category: "Tools" },
    { name: "Prometheus", icon: BarChart2, category: "Tools" },
    { name: "Grafana", icon: Palette, category: "Tools" },
    { name: "Loki", icon: FileText, category: "Tools" },
    { name: "LXC", icon: Cpu, category: "Tools" },
    { name: "Open5GS", icon: Signal, category: "Tools" },
    { name: "Android ADB", icon: Cpu, category: "Tools" },
    { name: "Power BI", icon: BarChart2, category: "Software" },
    { name: "Microsoft Office", icon: FileText, category: "Software" },
    { name: "ASP.NET (MVC)", icon: Code, category: "Programming" },
    { name: "Entity Framework", icon: Database, category: "Programming" },
    { name: "Git", icon: GitBranch, category: "Tools" },
    { name: "Machine Learning", icon: Brain, category: "Concepts" },
    { name: "Deep Learning", icon: Brain, category: "Concepts" },
    { name: "Data Visualization", icon: Eye, category: "Concepts" },
    { name: "Data Analysis", icon: BarChart2, category: "Concepts" },
    { name: "DevOps", icon: Settings2, category: "Concepts" },
    { name: "Observability", icon: Eye, category: "Concepts" },
    { name: "Agile Methodologies", icon: Users, category: "Concepts" },
  ],
  interests: [
    { name: "Cloud Computing", icon: Cloud },
    { name: "Data Analytics", icon: BarChart2 },
    { name: "Data Visualization", icon: Eye },
    { name: "Artificial Intelligence", icon: Brain },
    { name: "5G/6G Networks", icon: Signal },
  ],
  recommendations: [
    { 
      name: "Dr Syed M.Usman", 
      title: "Assistant Professor - Thesis Supervisor", 
      phone: "(+92) 3320615294", 
      email: "syed.usman@mail.au.edu.pk" 
    },
    { 
      name: "Dr. Amanullah Yasin", 
      title: "Associate Professor - Professor and Head of Department", 
      phone: "(+92) 3218040754", 
      email: "amanyasin@mail.au.edu.pk" 
    },
  ],
  fullResumeText: fullResumeText,
};

export const iconMapping = {
  Email: Mail,
  Phone: Phone,
  LinkedIn: Linkedin,
  Location: MapPin,
  Calendar: CalendarDays,
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Publication: FileText,
  Certification: Award,
  Skills: Settings2,
  Interests: Lightbulb,
  Download: LinkIcon, // Using LinkIcon as placeholder for download
  ExternalLink: LinkIcon,
  Default: Lightbulb,
};

export const sectionIds = {
  home: "home",
  about: "about",
  experience: "experience",
  education: "education",
  projects: "projects", // Combined for Publications & Certifications
  skills: "skills", // Combined for Skills, Digital Skills, Language Skills
  contact: "contact", // Includes Recommendations
  aiTool: "ai-tool",
};
