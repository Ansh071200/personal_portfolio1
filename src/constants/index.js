import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  pandas,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  hindalco,
  iei,
  matplotlib,
  scikitlearn,
  python,
  fastapi,
  tensorflow,
  em,
  KYC_ss,
  cb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML/DL Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "pandas",
    icon: pandas,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "scikitlearn",
    icon: scikitlearn,
  },
  {
    name: "matplotlib",
    icon: matplotlib,
  },
  {
    name: "fastapi",
    icon: fastapi,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
];

const experiences = [
  {
    title: "Technical Intern",
    company_name: "Hindalco Industries",
    icon: hindalco,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using Oracle Apex and other related technologies.",
      "Collaborating with cross-functional teams to develop an industry level product.",
      "Implementing a responsive dashboard for user convenience and hassle free work experience.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Team Member",
    company_name: "Iei [Professional Body]",
    icon: iei,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional team members including designers and providing insights.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in task meets and implementing collaborative and curative tech.",
    ],
  },
];

const projects = [
  {
    name: "Employee Management Directory",
    description:
      "Web-based platform that allows the admin to manage employees online and avoid user exertion.(Developed this collaborative project as the technical team member at the IEI Professional Body)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: em,
    source_code_link:
      "https://github.com/Ansh071200/Employee-Management-Directory-",
  },
  {
    name: "Automated KYC",
    description:
      "Worked as the Backend/ML Dev to develop and deploy an Automated KYC Mobile Application. (This Project won us the 3rd Place in the Standard Chartered Hackathon)",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "scikitlearn",
        color: "pink-text-gradient",
      },
    ],
    image: KYC_ss,
    source_code_link: "https://github.com/zeelsheth2003/Online-Video-KYC-SC",
  },
  {
    name: "CloudBurst Prediction",
    description:
      "Worked as the Backend/ML Dev to develop and deploy an Clouburst Prediction Mobile Application. (This Project made us victorious in the DAA Tech Conclave Ideathon)",
    tags: [
      {
        name: "ml",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: cb,
    source_code_link: "https://github.com/Ansh071200/Cloud_burst_prediction",
  },
];

export { services, technologies, experiences, projects };
