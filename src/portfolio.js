import emoji from "react-easy-emoji";

const greeting = {
  username: "Arun Rajbhar ",
  title: "Hi, I'm Arun",
  subTitle: emoji(["Full Stack Developer", "Computer Engineer"]),
  resumeLink:
    "https://drive.google.com/drive/folders/1mX42Fc11Re2HB7T6EAD7xyppNqSB82if?usp=share_link",
};

const socialMediaLinks = {
  github: "https://github.com/arunrajbhar123",
  linkedin: "https://www.linkedin.com/in/arun-rajbhar-11570b216/",
  gmail: "arunrajbhar1998@gmail.com",
  twitter: "https://twitter.com/arunrajbhar1998",
};

const skillsSection = {
  title: "Skills",
  subTitle:
    "I want to always keep myself engaged in learning something new of programming.",

  allskills: {
    language: [
      {
        skillName: "Javascript",
        classname: "logos:javascript",
        status: "developed",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Typescript",
        classname: "logos:typescript-icon",
        status: "intermediate",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],

    designs: [
      {
        skillName: "Html",
        classname: "icon-park:html-five",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Css",
        classname: "vscode-icons:file-type-css",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Bootstrap",
        classname: "logos:bootstrap",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Javascript",
        classname: "logos:javascript",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Material UI",
        classname: "logos:material-ui",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "ES6",
        classname: "logos:es6",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Tailwind Css",
        classname: "logos:tailwindcss-icon",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],

    frontends: [
      {
        skillName: "React Js ",
        classname: "logos:react",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "React Redux",
        classname: "logos:redux",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Jquery ",
        classname: "fontisto:jquery",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Firebase ",
        classname: "logos:firebase",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "React Router  ",
        classname: "logos:react-router",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],

    backends: [
      {
        skillName: "Node  Js ",
        classname: "la:node-js",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Express Js ",
        classname: "simple-icons:express",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Rest Api ",
        classname: "bi:server",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: " Api ",
        classname: "eos-icons:api",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: " Mongodb ",
        classname: "vscode-icons:file-type-mongo",
        style: {
          backgroundColor: "transparent",
        },
        {
        skillName: " Postgresql ",
        classname: "vscode-icons:file-type-postgresql",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],

    tools: [
      {
        skillName: " Postman ",
        classname: "logos:postman-icon",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: " Heroku ",
        classname: "logos:heroku-icon",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Netlify ",
        classname: "logos:netlify",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "VS Code  ",
        classname: "vscode-icons:file-type-vscode2",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Vercel",
        classname: "logos:vercel-icon",
        style: {
          backgroundColor: "transparent",
        },
      },
      {
        skillName: "Github",
        classname: "logos:github-icon",
        style: {
          backgroundColor: "transparent",
        },
      },
    ],
  },
};

const workExperiences = {
  viewExperiences: true, 
  experience: [
    {
      role: "SDE-1",
      company: "Mayhem-Studios",
      companylogo: require("./assets/images/1290457-mayem.jpg"),
      date: "Dec 2022 – Present",
    },
  ],
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9137086840",
  email_address: "arunrajbhar1998@gmail.com",
};

const projects = [
  {
    image: "skinstore.png",
    title: "Clone SkinStore",
    features: [
      " User , Order  management",
      "Full featured shopping cart",
      "Mark orders as delivered option",
      "Checkout process (shipping, payment method, etc)",
      "credit card integration (dummy)",
    ],

    classname: [
      "logos:javascript",
      "icon-park:html-five",
      "vscode-icons:file-type-css",
      "logos:bootstrap",
      "la:node-js",
    ],
    codeLink: "https://github.com/Sagar-Gondage/SkinStore",
    liveLink: "https://sagar-gondage.github.io/SkinStore/",
  },
  {
    image: "mytheresa.png",
    title: "Clone Mytheresa",
    features: [
      " User , Order  management",
      "Full featured shopping cart",
      "Mark orders as delivered option",
      "Checkout process (shipping, payment method, etc)",
      "credit card integration (dummy)",
    ],

    classname: [
      "logos:javascript",
      "icon-park:html-five",
      "vscode-icons:file-type-css",
      "logos:bootstrap",
      "la:node-js",
    ],
    codeLink: "https://github.com/ArjunSinghBhakuni/Mytheresa-clone-website",
    liveLink: "https://arjunsinghbhakuni.github.io/Mytheresa-clone-website/",
  },
  {
    image: "expedia.png",
    title: "Clone expedia",
    features: [
      "You can Search Hotel",
      "Login & Signup",
      "Landing Page ",
      "credit card integration (dummy)",
    ],

    classname: [
      "logos:javascript",
      "logos:react",
      "icon-park:html-five",
      "vscode-icons:file-type-css",
      "logos:material-ui",
    ],
    codeLink: "https://github.com/arunrajbhar123/expedia",
    liveLink: "https://expedia-clone-004.netlify.app/",
  },
  {
    image: "rodan.png",
    title: "Clone RODAN+FIELDS",
    features: [
      "Cart Section",
      "Login & Signup",
      "Landing Page ",
      "credit card integration (dummy)",
    ],

    classname: [
      "logos:javascript",
      "logos:react",
      "icon-park:html-five",
      "vscode-icons:file-type-css",
      "logos:material-ui",
    ],
    codeLink: "https://github.com/jitender004/wonderful-sound-2096",
    liveLink: "https://wonderful-sound-2096-nu.vercel.app/",
  },
];

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  contactInfo,
  openSource,
  projects,
};
