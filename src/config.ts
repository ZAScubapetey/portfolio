import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Lee Bezuidenhout",
  logo: "/favicon-32x32.png",
  person:"/Lee.jpg",
  email: "Lee@bezuidenhout.net.za",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
 
];

export const socialLinks: SocialLink[] = [
  
  {
    title: "Mail",
    url: "mailto:Lee@bezuidenhout.net.za",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Lee Bezuidenhout",
    description:
      "Dedicated and results-driven IT Manager and Business owner with experience in managing operations",
    image: identity.logo,
  },
  role: "IT Manager and Labour Relations",
  description:
    "Hey there! I'm an IT solutions expert and entrepreneur. I thrive on making things tick in the tech world and have a knack for turning chaos into order. With a solid background in system administration, data analysis, and team leadership, I'm rather useful to turn your IT problems into solutions.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Lee Bezuidenhout",
    description:
     "Dedicated and results-driven IT Manager and Business owner with experience in managing operations",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
Life isn't just about codes and algorithms, right? When I'm not juggling bytes and bits, you'll find me lost in the fantastical realms of science fiction and fantasy. And let's not forget my soft spot for a glass of wine and whipping up some epic new dishes in the kitchen. Practical problem-solving is my jam, especially when the braaivleis fire is roaring!
<br/><br/>
Tech is my playground, and I'm always on the lookout for the latest and greatest. Lately, I've been diving into the expansive world of AWS infrastructure – talk about a digital adventure!
Adventures aren't just confined to the digital realm, though. I'm a workshop warrior, having recently tried my hand at Radio Presenting and News Reading, taking me back to the good ol' days at MFM Radio in Stellenbosch. But wait, there's more – I'm also into 3D printing, cultivating my own veggies, chasing bass on the weekends, and holding the fort as a licensed Radio Amateur (call me ZS1GWL).
<br/><br/>
Oh, did I mention the brainchild that is Greatvibes.co.za? It's my personal review hub where I spill the tea on what I read, drink, and eat. Because, you know, opinions are like butts – and now mine is waving hello on the internet.
<br/><br/>
When I'm not glued to screens, I'm rolling dice and slaying dragons with my Dungeons and Dragons crew since 2018. We've conquered dungeons, vanquished foes, and laughed our way through countless campaigns. And let's not forget my family – I love making them laugh, even if it means subjecting them to my terrible dad jokes.
<br/><br/>
So, buckle up, because this IT guru is not just about business; I'm here for a good time, a great laugh, and a fantastic adventure!
`, // Markdown is supported
    image_l: {
      url: "/collage.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/Lee.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with in variety of roles and gained various different skills to use. Here are some of the places I've worked at and expanded my  horizons.`, // Markdown is supported
    items: [
      {
        title: "IT Manager and Labour Relations",
        company: {
          name: "Lazena Poultry",
          image: "/lazena.webp",
          url: "",
        },
        date: "Mar 2018 - Present",
      },
      {
        title: "Sales and Technical Support",
        company: {
          name: "Cloud Ops (Pty) Ltd",
          image: "/PSA-logo.png",
          url: "#",
        },
        date: "Apr 2016 - Mar 2023",
      },
      {
        title: "Sales and Technical Rep",
        company: {
          name: "Abaserve - Megasolve",
          image: "/megasolve.jpg",
          url: "https://megasolve.co.za/",
        },
        date: "Jun 2015 - Feb 2018",
      },
      {
        title: "Account Manager",
        company: {
          name: "Compuscan Pty LTD",
          image: "/compuscan.jpg",
          url: "https://www.experian.co.za/",
        },
        date: "Feb 2012 - May 2015",
      },
      {
        title: "Helpdesk Support Staff",
        company: {
          name: "Compuscan Pty LTD",
          image: "/compuscan.jpg",
          url: "https://www.experian.co.za/",
        },
        date: "Mar 2009 - Jan 2012",
      },
      {
        title: "Radio Host",
        company: {
          name: "MFM Community Radio Station",
          image: "/mfm.jpg",
          url: "https://mfm.co.za/",
        },
        date: "May 2008 - Jan 2012",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Lee Bezuidenhout",
    description: "Check out what I've been working on recently.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on rrecently.",
  projects: [
    {
      title: "API Development for TXD Systems",
      description: 'Custom-built API developed in Python with FastApi using JWT bearer tokens and Bcrypt to store user details to gain access to temperature monitoring system hosting in a mariaDB. <br/>For this project, I had to gain experience in database design and best practices to keep your database simple and efficient. <br/>The project will be launched in the next few months as the company still needs to finalize the hardware system. <br/><br/> Technology used: Python, FastAPI, Nginx, MariaDB, Docker',
      image: "/txdapi.jpg",
      year: "May 2024 - Present",
      url: "https://api.gomtor.co.za/docs",
    },
    {
      title: "Moodle Development",
      description: "Research, implement, and set up an LMS for a client (Mediation Academy) who required an enterprise-level system for their custom-developed internationally accredited Mediator Training course.<br/> I had to research hosting platforms to deploy the system as well as learn about the LMS space and best practices regarding security and hosting requirements. <br/><br/>Technology used: AWS, Moodle, Apache, PHP, CSS, 0Auth (Google)",
      image: "/Moodle.jpg",
      year: "Jun 2023 - Present",
      url: "https://lms.mediationacademy.co.za",
    },
    {
      title: "Nohire Anti-Fraud Database",
      description: "Nohire.co.za is an anti-fraud database and search system built for the tool hire industry of South Africa. <br/>For this project, I researched with clients to understand their needs in the industry. I provided training and support with suggested improvements and resolved any issues. We built a secure database and sharing platform that cannot be used for marketing purposes. <br/>This system is being used by the majority of South Africa's tool hire industry with enormous success in combating theft and fraud while keeping the client’s information secure and safe.<br/><br/> Technology used: AWS EC2, PHP, Nginx, MySQL RDS, Route 53, HTML, CSS, GitHub",
      image: "/Nohire.jpg",
      year: "Jun 2016 - Present",
      url: "https://www.nohire.co.za",
    },
    {
      title: "Tierkat Wine Awards",
      description: "A prestigious award, the Tierkat Award is carefully given to wines that are of excellent quality and enjoyable but at an affordable price.<br/><br/>Technology used: CPanel, HTML, CSS, Javascript, GitHub",
      image: "/Tierkat.jpg",
      year: "Jun 2022 - Present",
      url: "https://www.tierkat.co.za",
    },
    {
      title: "Nostay Short-Term Rental Database",
      description: "NoStay is a platform where companies in the same industry can share data in a controlled and secured environment to mitigate the risk of fraudulent behaviour and theft through collaboration of all stakeholders and industry players. <br/> For this project, I researched with clients to understand their needs in the industry. I provided training and support with suggested improvements and resolved any issues. We built a secure database and sharing platform that cannot be used for marketing purposes. <br/><br/>Technology used: AWS EC2, PHP, Nginx, MySQL RDS, Route 53, HTML, CSS, GitHub",
      image: "/Nostay.jpg",
      year: "Jun 2016 - Present",
      url: "https://www.nostay.co.za",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Lee Bezuidenhout",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
