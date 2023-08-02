import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    bronnen,
    eduhint, 
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Designer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Application- & media developer (internship)",
      company_name: "FCsprint2 bronnenbedrijf",
      icon: bronnen,
      iconBg: "#E6DEDD",
      date: "2018",
      points: [
        "Developed a language learning web application for Dutch, implementing a multiple-choice quiz using JavaScript, JSON, HTML, and CSS.",
        "Designed and ensured responsiveness of the web application to deliver an optimal learning experience across various devices.",
        "Followed Scrum methodology, participating in daily standup meetings and weekly code reviews to foster collaboration and project progress.",
        "Took full ownership of the application's design, providing an intuitive user interface for an engaging language learning journey.",
      ],
    },
    {
      title: "Application- & media developer (internship)",
      company_name: "FCsprint2 bronnenbedrijf",
      icon: bronnen,
      iconBg: "#383E56",
      date: "2019",
      points: [
        "Led the implementation of images within the portfolio application, utilizing the Flickr & PixaBay APIs to integrate and manage image content.",
        "Contributed expertise in Symfony, JSON, HTML, CSS, JavaScript, and Ajax to create an image-centric user interface for a seamless browsing experience.",
        "Ensured the responsiveness of the application, enabling users to access and interact with images effortlessly from diverse devices and browsers.",
        "Implemented customizable image display options based on user preferences, enhancing the user experience and satisfaction.",
        "Worked collaboratively with a team of developers, engaging in Scrum-based project management, daily standups, and weekly code reviews to deliver high-quality results.",
      ],
    },
    {
      title: "Application- & media developer (internship)",
      company_name: "EduHintOVD",
      icon: eduhint,
      iconBg: "#E6DEDD",
      date: "2021",
      points: [
        "Embarked on the internship with no prior knowledge of C#, but fearlessly embraced the challenge and quickly adapted to working with C# and TypeScript.",
        "Contributed significantly to a project focused on digitalizing schoolbooks by importing and processing word documents, enabling students to study online.",
        "Took on a challenging task within the project, successfully handling hyperlinks, text, and charts to enhance the user experience and functionality.",
        "Explored and integrated the ECharts API to visualize data, elevating the project's presentation and interactivity.",
        "Acknowledged as a quick learner, thriving in an environment that presented new and complex concepts, ultimately acquiring invaluable experience in handling challenging situations.",
        "Worked collaboratively within a team while simultaneously managing individual tasks, showcasing effective teamwork and personal responsibility.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };