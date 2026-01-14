import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Dev J",
  lastName: "Patel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "COMPUTER ENGINEER",
  avatar: "/images/avatar2.png",
  location: "Asia/India", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Gujarati"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about code, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DevPatel0007",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dev-patel-24b934299",
  },
  {
    name: "Kaggle",
    icon: "kaggle",
    link: "https://www.kaggle.com/devpatel0007",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:devjpatel13@gmail.com",
  },
  {
    name: "CV",
    icon: "cv",
    link: "/Dev_Jigneshkumar_Patel.pdf", 
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>COMPUTER ENGINEER</>,
  subline: (
    <>
      I'm Dev, a Computer Engineer who can adapt any language and tech stack. Currently studying at <InlineCode>Apollo institute of engineering and technology(Gujarat Technological University)</InlineCode>, where I am pursuing
       <br /><InlineCode>B.E in Computer Engineering</InlineCode> with expertise in Web Development, RAG, AI/ML, and various programming languages including C, C++, DSA, Java, Python and more
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/dev-patel",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Computer Engineer who can adapt to any language and tech stack. I specialize in Web Development, 
        RAG (Retrieval-Augmented Generation), AI/ML solutions, backend development with Django, Flask, Nest.js, 
        Express.js, and frontend technologies like React, Next.js, and Three.js. I build immersive web experiences 
        and AI-powered applications across diverse technology ecosystems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Addicted technologies",
        timeframe: "2024",
        role: "AI ML Developer (Internship)",
        achievements: [
          <>
            Strong Python & Data Handling Skills – Proficiency in Python and libraries like NumPy,Pandas, and Matplotlib for datamanipulation.
          </>,
          <>
            Designed and implemented a chatbot using Natural Language Processing (NLP) and Deep Learning that improved customer engagement by 40%.
          </>,
        ],
        images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                      src: "/images/projects/project-01/cover-01.0.jpg",
                      alt: "",
                      width: 16,
                      height: 9,
                    }
        ],
      },
      {
        company: "praxware technologies",
        timeframe: "2023",
        role: "Python Developer (Internship)",
        achievements: [
          <>
            Proficiency in Python and its core libraries
          </>,
          <>
            Knowledge of OOP (Object-Oriented Programming) concepts
          </>,
          <>
            Experience with web frameworks (Django, Flask, FastAPI)
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/55287491-12c4de80-53c7-11e9-8c6a-3f02b79ba9ca.gif",
            alt: "",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Certifications",
    institutions: [
      {
        name: "AI/ML for Geodata Analysis",
        description: <>by ISRO and IIRS (Aug-2024)</>,
      },
      {
        name: "Introduction to Machine Learing : Artof the Possible",
        description: <>by AWS (Mar-2024)</>,
      },
      {
        name: "Crash Course on Python",
        description: <>by Google on coursera (Dec-2023)</>,
      },
      {
        name: "Introduction to Generative AI",
        description: <>by Google cloud Skill Boost (Dec-2023)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Proficient in developing code using <InlineCode>Python, JavaScript, C, C++, Java, PHP</InlineCode> and other modern programming languages</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "AI/ML Development: Machine Learning, Deep Learning, Data Science, RAG",
        description: <>Experienced in creating AI/ML and Deep Learning models, implementing RAG (Retrieval-Augmented Generation) systems, and performing data preprocessing and analysis</>,
        // optional: leave the array empty if you don't want to display images
        
      },
      {
        title: "Backend Development: Django, Flask, Nest.js, Express.js",
        description: <>Skilled in building robust website backends using <InlineCode>Django, Flask, Nest.js, Express.js</InlineCode> and other JavaScript-based backend frameworks, with expertise in database management and API development</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Web Development",
        description: <>Capable of creating dynamic and interactive websites using <InlineCode>React, Next.js, Three.js, Node.js, HTML, CSS</InlineCode> and modern web technologies</>,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Created and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Daily Tech Updates",
  title: "Daily Tech Updates",
  description: `Stay updated with the latest technology news, trends, and innovations curated by ${person.name}`,
  updates: [
    {
      date: "2025-12-20",
      title: "AI Breakthrough: New Language Model Achieves Human-Level Reasoning",
      summary: "Researchers have developed a new AI model that demonstrates advanced reasoning capabilities, potentially revolutionizing how we interact with artificial intelligence.",
      category: "Artificial Intelligence",
    },
    {
      date: "2025-12-19",
      title: "Quantum Computing Milestone: 1000-Qubit Processor Unveiled",
      summary: "A major tech company has announced a breakthrough in quantum computing with a new 1000-qubit processor, bringing us closer to practical quantum applications.",
      category: "Quantum Computing",
    },
    {
      date: "2025-12-18",
      title: "Web3 Revolution: Decentralized Social Networks Gain Traction",
      summary: "Decentralized social media platforms are seeing increased adoption as users seek more control over their data and content.",
      category: "Web3",
    },
    {
      date: "2025-12-17",
      title: "Edge Computing: The Future of Low-Latency Applications",
      summary: "Edge computing infrastructure is expanding rapidly, enabling real-time processing for IoT devices, autonomous vehicles, and AR/VR applications.",
      category: "Cloud Computing",
    },
    {
      date: "2025-12-16",
      title: "Sustainable Tech: Green AI Models Reduce Carbon Footprint",
      summary: "New energy-efficient AI training methods are reducing the environmental impact of machine learning by up to 90%.",
      category: "Sustainability",
    },
    {
      date: "2025-12-15",
      title: "5G Advanced: Next-Generation Networks Enable New Use Cases",
      summary: "5G Advanced networks are rolling out globally, supporting enhanced mobile broadband and enabling new applications in smart cities and industrial automation.",
      category: "Networking",
    },
    {
      date: "2025-12-14",
      title: "RAG Systems: Enhancing AI with Retrieval-Augmented Generation",
      summary: "Retrieval-Augmented Generation (RAG) is transforming how AI systems access and utilize information, improving accuracy and reducing hallucinations.",
      category: "AI/ML",
    },
    {
      date: "2025-12-13",
      title: "Cybersecurity: Zero-Trust Architecture Becomes Standard",
      summary: "Organizations are increasingly adopting zero-trust security models to protect against sophisticated cyber threats in an interconnected world.",
      category: "Cybersecurity",
    },
    {
      date: "2025-12-12",
      title: "Blockchain Innovation: Layer 2 Solutions Address Scalability",
      summary: "New Layer 2 blockchain solutions are solving scalability issues, enabling faster and cheaper transactions while maintaining security.",
      category: "Blockchain",
    },
    {
      date: "2025-12-11",
      title: "DevOps Evolution: AI-Powered CI/CD Pipelines",
      summary: "Artificial intelligence is being integrated into DevOps workflows, automating testing, deployment, and monitoring processes.",
      category: "DevOps",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
