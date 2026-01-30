// Mock data for Dhruvin's Portfolio
// You can easily update this file to add/modify your projects and information

export const personalInfo = {
  fullName: "Dhruvin Hirenbhai Mehta",
  firstName: "Dhruvin",
  lastName: "Mehta",
  title: "Web Developer",
  tagline: "Building modern, responsive web experiences with cutting-edge technologies",
  email: "dhruvinmehta003@gmail.com",
  phone: "+91 81419 43231", // Add your phone if needed
  location: "Rajkot, Gujarat, India",
  github: "https://github.com/Dhruvin-3",
  linkedin: "https://in.linkedin.com/in/dhruvin-mehta-1b37a2221",
  resumeUrl: "/Resume_DhruvinMehta.pdf", // Place your resume in public folder
  available: true,
  bio: "Passionate Web Developer with 2+ years of experience building scalable web applications and e-commerce solutions. Specialized in frontend development with expertise in React, Next.js, and modern web technologies. Proven track record of delivering high-quality projects for diverse clients, from custom web applications to e-commerce platforms on Shopify, WordPress, Magento, and BigCommerce."
};

export const skills = {
  frontend: [
    { name: "HTML5", icon: "Code2" },
    { name: "CSS3", icon: "Palette" },
    { name: "JavaScript", icon: "Code" },
    { name: "React", icon: "Component" },
    { name: "Next.js", icon: "Layout" }
  ],
  backend: [
    { name: "Node.js", icon: "Server" },
    { name: "REST APIs", icon: "Database" }
  ],
  tools: [
    { name: "Git", icon: "GitBranch" },
    { name: "GitHub", icon: "Github" },
    { name: "VS Code", icon: "Terminal" },
    { name: "Cursor", icon: "Terminal" },
    { name: "Antigravity", icon: "Terminal" }
  ],
  platforms: [
    { name: "Shopify", icon: "ShoppingCart" },
    { name: "WordPress (Frontend)", icon: "Globe" },
    { name: "Magento (Frontend)", icon: "Store" },
    { name: "BigCommerce", icon: "ShoppingBag" }
  ]
};

export const experience = [
  {
    id: 1,
    role: "Web Developer",
    company: "Evolution Infosystem",
    period: "April 2025 - Present",
    location: "Rajkot, Gujarat, India",
    description: "Currently working on developing modern web applications and e-commerce solutions.",
    achievements: [
      "Developing responsive web applications using React and Next.js",
      "Building custom e-commerce solutions on various platforms",
      "Collaborating with cross-functional teams to deliver high-quality products"
    ],
    current: true
  },
  {
    id: 2,
    role: "Junior Web Developer",
    company: "Tectic Technolabs",
    period: "February 2024 - March 2025",
    location: "Ahmedabad, Gujarat, India",
    description: "Worked on multiple client projects focusing on frontend development and e-commerce platforms.",
    achievements: [
      "Developed and maintained responsive web applications using modern JavaScript frameworks",
      "Customized e-commerce platforms including Shopify and WordPress",
      "Improved website performance and user experience across multiple projects",
      "Collaborated with designers and backend developers to implement pixel-perfect designs"
    ],
    current: false
  }
];

export const projects = [
  {
    id: 1,
    title: "ChatterFox",
    description: "A modern web application for enhanced communication and collaboration. Currently working on this project with focus on user experience and performance.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Nest", "MongoDB"],
    liveUrl: "https://app.chatterfox.co/",
    githubUrl: "",
    image: "/images/chatterfox_dashboard.png",
    featured: true,
    status: "In Progress"
  },
  // {
  //   id: 2,
  //   title: "De Meubel Importeur",
  //   description: "A clean and intuitive task management application with real-time updates. Features include task creation, editing, deletion, and status tracking.",
  //   techStack: ["Shopify", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  //   liveUrl: "https://www.demeubelimporteur.nl/",
  //   githubUrl: "",
  //   image: "/images/de_meubel_importeur.png",
  //   featured: true,
  //   status: "Completed"
  // },
  {
    id: 3,
    title: "Crawford Packaging",
    description: "Custom theme development and functionality enhancements for Shopify and WordPress e-commerce stores. Improved user experience and conversion rates.",
    techStack: ["BigCommerce", "Stencil", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://crawford-packaging-b2b-sandbox-1.mybigcommerce.com/",
    githubUrl: "",
    image: "/images/crawford_packaging.png",
    featured: true,
    status: "Completed"
  },
  {
    id: 4,
    title: "ProStar Industries",
    description: "Used BigCommerce Widget Builder to set up flexible sections that can be updated or customized easily without needing to touch the code every time. Worked on building the Home Page and several CMS pages, making sure they’re easy to use and look great for the end user.Focused on creating a design that’s not just attractive but also built to adapt to future requirements without major rework.",
    techStack: ["BigCommerce", "Stencil", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://prostar-industries-sandbox.mybigcommerce.com/",
    githubUrl: "",
    image: "/images/prostar_industries.png",
    featured: true,
    status: "Completed"
  },
  {
    id: 5,
    title: "Laudpulse",
    description: "Designed and developed the Home Page and several CMS Pages, enhancing the website's visual appeal and usability. Implemented dynamic and customizable sections using the BigCommerce Widget Builder, simplifying content management for the client.Ensured the website met client expectations by focusing on functionality, scalability, and ease of maintenance.",
    techStack: ["BigCommerce", "Stencil", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://laudpulse.com/",
    githubUrl: "",
    image: "/images/laudpulse.png",
    featured: true,
    status: "Completed"
  },
  {
    id: 6,
    title: "Palomino Planters",
    description: "Developed and enhanced the Home Page and CMS Pages, along with creating custom Shopify sections, enabling the client to easily update and manage content across the website. Resolved bugs and addressed QA issues to ensure a smooth and error-free user experience.",
    techStack: ["Shopify", "Liquid", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "https://palominoplanters.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=169754689815",
    githubUrl: "",
    image: "/images/palamino_planters.png",
    featured: true,
    status: "Completed"
  }
  // ADD MORE PROJECTS HERE
  // Copy the structure above and add your own projects
  // {
  //   id: 4,
  //   title: "Your Project Name",
  //   description: "Project description",
  //   techStack: ["Tech1", "Tech2", "Tech3"],
  //   liveUrl: "https://your-project-url.com",
  //   githubUrl: "https://github.com/yourusername/repo",
  //   image: "https://your-image-url.com",
  //   featured: true,
  //   status: "Completed"
  // }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Marwadi University",
    period: "2022 - 2024",
    description: "Advanced studies in computer applications with focus on software development and web technologies."
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shipra College, Saurashtra University",
    period: "2019 - 2022",
    description: "Foundation in computer science, programming, and web development."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Position, Company",
    content: "Dhruvin is an excellent web developer who delivered our project on time and exceeded our expectations. His attention to detail and technical skills are outstanding.",
    avatar: ""
  }
  // Add real testimonials from LinkedIn or clients
];
