/* =========================================================
   Traductions
   Le français est écrit directement dans index.html.
   Ici, uniquement les textes anglais, avec la même clé
   que l'attribut data-i18n de l'élément HTML.
   ========================================================= */

const TRANSLATIONS_EN = {
  "nav.about": "About",
  "nav.path": "Education",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.contact": "Contact",

  "hero.status": "Looking for an internship · 29 March to 18 June 2027",
  "cv.download": "Download my CV",
  "hero.eyebrow": "Portfolio of a future engineer",
  "hero.sub": "Second-year Computer Science student (BUT Informatique) at the IUT of Aix-Marseille, Arles campus.",
  "hero.cta1": "See my projects",
  "hero.cta2": "Get in touch",
  "hero.scroll": "Scroll",

  "about.title": "About",
  "about.who": "Who am I?",
  "about.p1": "Hello and welcome to my portfolio. I'm <strong>Briand TETEH</strong>, a second-year Computer Science student (BUT Informatique).",
  "about.p2": "Originally from Togo and passionate about mathematics, I earned a scientific baccalaureate, series C4 (Mathematics and Physical Sciences).",
  "about.p3": "Dreaming of becoming a <strong>great engineer</strong>, I chose computer science. At the IUT of Aix-Marseille, Arles campus, I'm preparing my BUT and building the skills I need to continue on to an engineering degree.",
  "about.f1l": "Based in",
  "about.f2l": "Studies",
  "about.f2v": "BUT Computer Science · 2nd year",
  "about.f3l": "Goal",
  "about.f3v": "Engineering degree",
  "about.tag": "Available for an internship in 2027",
  "about.softTitle": "My soft skills",

  "soft.1t": "Teamwork",
  "soft.1d": "I enjoy working in teams and learning from others. I've already worked on several group projects, both at the IUT and outside it.",
  "soft.2t": "Adaptability and autonomy",
  "soft.2d": "Having come from Togo to continue my studies in France, I learned to adapt quickly to a new environment, new methods and new tools, organising myself on my own.",
  "soft.3t": "Rigour and punctuality",
  "soft.3d": "Qualities I hold myself to in every commitment, so that I always deliver quality work on time.",

  "path.title": "Education",
  "path.current": "In progress · 2nd year",
  "path.1d": "2024 — today",
  "path.1t": "BUT Computer Science",
  "path.1n": "Second-year internship planned from 29 March to 18 June 2027.",
  "path.2t": "L1 — Professional Degree in Computer Systems and Networks",
  "path.2p": "École Polytechnique de Lomé — Togo",
  "path.3d": "High school",
  "path.3t": "Baccalaureate, series C4 (Maths &amp; Physical Sciences)",
  "path.3p": "Lycée de Tsévié 1 — Togo",

  "skills.title": "Skills",
  "skills.web": "Web",
  "skills.prog": "Programming",
  "skills.sys": "Data &amp; Systems",

  "but.title": "BUT competencies in practice",
  "but.intro": "The six competencies of the BUT Computer Science framework, and the projects where I put them into practice.",
  "but.1t": "Develop",
  "but.1d": "Build simple software applications.",
  "but.2t": "Optimise",
  "but.2d": "Choose and compare algorithms suited to the problem.",
  "but.3t": "Administer",
  "but.3d": "Install and configure a workstation and its systems.",
  "but.4t": "Manage data",
  "but.4d": "Design, handle and save structured data.",
  "but.5t": "Lead a project",
  "but.5d": "Meet a client's needs and follow a specification.",
  "but.6t": "Collaborate",
  "but.6d": "Work effectively within a team.",

  "projects.title": "Projects",
  "filter.all": "All",
  "filter.soft": "Software",
  "filter.web": "Web",
  "filter.sys": "Systems &amp; hardware",
  "more": "What I learned",
  "link.demo": "View the site",
  "link.code": "View the code",
  "features": "Features",
  "tag.algo": "Algorithms",
  "tag.complex": "Complexity",
  "tag.sensors": "Sensors",

  "p7.meta": "SAÉ S2.02 · BUT year 1 · Solo project",
  "p7.t": "Driving time calculator",
  "p7.d": "A C++ and Qt desktop application that finds the fastest route between two French cities and shows the path as a list of cities (Brest → Rennes → … → Nice). It also compares travel times in a table and finds the best location for a depot. The data covers 100 cities and 542 road links.",
  "p7.l": "This project brought together mathematics, C++ programming and building an interface with Qt. Travel times are stored in a weighted graph: each city is a vertex and each road is weighted by its duration. The core of the work was <strong>choosing the algorithm</strong>. I went with Floyd–Warshall, which computes the shortest times between every pair of cities in one go, a good fit for an app that compares many routes. Its O(V³) complexity stays reasonable for 100 cities, and every search is then instant. For the depot, I implemented two criteria: minimising the total travel time, or minimising the longest trip.",
  "p7.f1": "Fastest route, with the cities along the way",
  "p7.f2": "Comparison table of travel times between several cities",
  "p7.f3": "Sort by name or population, filter by region",
  "p7.f4": "Optimal depot based on two criteria",
  "tag.graphs": "Graphs",
  "link.video": "Watch the demo",
  "p8.l": "This first portfolio taught me how to present myself through a website: choosing what to show of my background, skills and projects, and how to tell it. It is also where I learned to host a site online with Vercel. Finally, it served as the foundation for building the current version.",
  "p9.meta": "R3.01 module · BUT year 2 · Solo project",
  "p9.t": "Weather at your address",
  "p9.d": "A web application that shows the weather for an address entered by the user, either a precise street or just a city. It chains two APIs: the IGN API to get the address coordinates, then OpenWeatherMap to fetch the weather at that location.",
  "p9.l": "This project taught me to chain asynchronous HTTP requests with fetch and async/await, the second one depending on the result of the first. I also learned to read an API's documentation and use its JSON responses, to organise the application into classes with a single responsibility each, and to configure webpack to bundle the project.",
  "p9.f1": "Search by precise address (street, number) or by city",
  "p9.f2": "Temperature, feels-like, description, humidity and wind",
  "p9.f3": "Error handling: empty field, address not found, network problem",
  "p9.f4": "Responsive interface",
  "tag.oop": "OOP",
  "p1.meta": "IUT project · CLI",
  "p1.t": "Digital library",
  "p1.d": "A robust command-line application for managing a library, built to meet a demanding specification precisely.",
  "p1.l": "Getting started with command-line development, and learning why rigour and following the specification matter.",

  "p2.meta": "IUT project · Algorithms",
  "p2.t": "Algorithm showcase",
  "p2.d": "Implementing and comparing several sorting algorithms to measure how complexity affects performance.",
  "p2.l": "Choosing an algorithm is never random: you have to reason about the data you're processing.",

  "p3.meta": "IUT project · Team of 2",
  "p3.t": "Setting up a development workstation",
  "p3.d": "Building a working environment by configuring a computer to dual boot Windows / Linux.",
  "p3.l": "Disk partitioning, installing operating systems and configuring development tools.",

  "p4.meta": "IUT project · Team of 3",
  "p4.t": "BUT Computer Science showcase website",
  "p4.d": "An HTML/CSS website presenting the Arles BUT Computer Science programme to high-school students, for the IUT of Aix-Marseille.",
  "p4.l": "Teamwork, running a project around the client's needs, and using web development tools.",

  "p5.meta": "Professional Degree (SRI) · Arduino · Team of 5",
  "p5.t": "Automatic watering system",
  "p5.d": "Watering triggered below a humidity threshold, with a sound alert (distance sensor) when the tank reaches a critical level.",
  "p5.l": "An introduction to Arduino and sensors, and coordinating a team of five.",

  "p6.meta": "IUT project · Team of 2",
  "p6.t": "GUI application (Qt)",
  "p6.d": "A program to load, edit and save XML / JSON data files, with a responsive Qt interface.",
  "p6.f1": "File picker to load an XML or JSON file",
  "p6.f2": "Master / detail display",
  "p6.f3": "Save to XML and JSON formats",
  "p6.f4": "Case-insensitive search to filter the data",
  "p6.f5": "Internationalisation: English interface by default, translatable",

  "contact.title": "Contact",
  "contact.h": "Want to work together?",
  "contact.p": "I'm looking for a <strong>second-year BUT Computer Science internship from 29 March to 18 June 2027</strong> (12 weeks). Feel free to reach out with an offer, or just to talk about a project.",
  "contact.loc": "Location",

  "form.h": "Send a message",
  "form.name": "Name / Company",
  "form.email": "Your email",
  "form.msg": "Your message",
  "form.send": "Send message",
  "form.note": "The message opens in your email app: no data is stored on this site.",

  "footer.rights": "All rights reserved.",
  "footer.top": "Back to top ↑"
};

/* Messages générés par le JavaScript */
const UI_MESSAGES = {
  fr: {
    formError: "Merci de remplir correctement tous les champs.",
    formOk: "Votre application mail va s'ouvrir avec le message prêt à envoyer.",
    mailSubject: "Contact depuis le portfolio",
    title: "Briand Kokou TETEH | Portfolio"
  },
  en: {
    formError: "Please fill in all the fields correctly.",
    formOk: "Your email app will open with the message ready to send.",
    mailSubject: "Contact from portfolio",
    title: "Briand Kokou TETEH | Portfolio"
  }
};