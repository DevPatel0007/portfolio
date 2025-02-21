import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Dev J",
  lastName: "Patel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "PYTHON DEVELOPER/AI ML DEVELOPER",
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
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:devjpatel13@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>PYTHON DEVELOPER / <br  />AI ML DEVELOPER</>,
  subline: (
    <>
      I'm Dev, a Student at <InlineCode>Apollo institute of engineering and technology(Gujarat Thechnological University)</InlineCode>, where I am doing
       <br /><InlineCode> Computer Engineeing in Diploma</InlineCode> and Learning computer fundaments and computer languvages like C, C++, DSA, Java, Python and more
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
        I'm a Python developer and AI/ML engineer specializing in Three.js, AI solutions, and backend
        development with Django & Flask. I build immersive web experiences and AI-powered
        applications.
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
            Strong Python & Data Handling Skills – Proficiency in Python andlibraries like NumPy,Pandas, and Matplotlib for datamanipulation.
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
            DEVLOPERProficiency in Python and its core libraries
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
        description: <>Able to develp code in<InlineCode> Python,JavaScript , C , C++ , Java , Php</InlineCode></>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "AI/ML Development: MachineLearning, DeepLearning, DataScience",
        description: <>Able to create a models in AI ML or DeepLearning also know to data preprosesing</>,
        // optional: leave the array empty if you don't want to display images
        
      },
      {
        title: "Backend Development: Django,Flask",
        description: <>Able to create website backend using Django Flask also Knowledge od detabase management</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "website Development",
        description: <>Able to create website using react, Three.js, Node.js, HTML, CSS</>,
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
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
