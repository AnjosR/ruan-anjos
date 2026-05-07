export interface Achievement {
  icon: string;
  year: string;
  title: string;
  quote: string;
}

export const TYPED_STRINGS: string[] = [
  "Turning complex problems into crystal-clear code.",
  "Full Stack Developer & Clean Architecture.",
  "Building slick web solutions with solid engineering.",
  "Software Engineer | Clean Architecture | TDD.",
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: "solar:cup-star-bold-duotone",
    year: "2024",
    title: "Where It All Started",
    quote:
      "I kicked off my tech journey by joining the first-ever Computer Systems batch at UESPI. That was the spark that pushed me to go all-in on Programming Logic and Object-Oriented Programming (OOP).",
  },
  {
    icon: "solar:cpu-bolt-bold-duotone",
    year: "November 2025 - Currently",
    title: "Breaking Into the Industry",
    quote:
      "A major turning point: officially landing my gig as a Software Engineering Intern - Requirements Analyst. This is where I got my hands dirty applying BPMN & UML, tackling robust requirement breakdowns and business rules head-on.",
  },
  {
    icon: "solar:cpu-bolt-bold-duotone",
    year: "May 2026",
    title: "Social Impact & Clean Code",
    quote:
      "A high-output month: started building the institutional website for CERAC (an NGO driving social action in the semi-arid region). At the same time, I went deep into Clean Architecture and TDD, building complex backend authentication use cases from scratch.",
  },
  {
    icon: "solar:cpu-bolt-bold-duotone",
    year: "Currently",
    title: "The GeoHistória Project",
    quote:
      "Highly focused on my final thesis: GeoHistória. It's a web application built to read QR codes directly from the mobile browser, unlocking historical information and bringing physical locations' history to life.",
  },
];

export interface SocialLink {
  icon: string
  label: string
  href: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: "mdi:instagram",  label: "Instagram", href: "#" },
  { icon: "mdi:linkedin",   label: "LinkedIn",  href: "https://www.linkedin.com/in/ruan-anjos-0b95712b3/" },
  { icon: "mdi:github",     label: "GitHub",    href: "https://github.com/oAnjophb" },
]

export const QUOTES: string[] = [
  '"The only way to do great work is to love what you do." — Steve Jobs',
  '"You can\'t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in the future." — Steve Jobs',
];
