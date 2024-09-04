import Image from "next/image";

const services = [
  {
    title: "Recover From Distractions And Stay Focused",
    description:
      "Our AI coach detects when you are working on less important tasks or scrolling on social media, help you overcome the underlying concerns feeding the distraction, and help you get back to the important task",
    icon: LaptopIcon,
    src: "/distraction.jpg",
  },
  {
    title: "Avoid Procrastination And Get Started",
    description:
      "Address hidden anxieties, embrace imperfection, chunk tasks, kickstart with mini-goals, and use regular check-ins to maintain momentum while you work.",
    icon: SmartphoneIcon,
    src: "/prod.jpg",
  },

  {
    title: "Manage Stress And Prevent Burnout",
    description:
      "Detect stress buildup, integrate mindfulness habits, take short rejuvenating breaks, and stay composed while working.",
    icon: BrushIcon,
    src: "/fresh.jpg",
  },
  {
    title: "Anonymous and Affordable",
    description:
      "You have the option to stay fully anonymous. Our goal is to make Focus Buddy affordable and accessible to everyone. Focus Buddy is free for the first month, and then $20 a month",
    icon: CodeIcon,
    src: "/anony.jpg",
  },
  {
    title: "Available 24x7",
    description:
      "Co-work with your AI productivity coach at any time for as long as you need.",
    icon: CloudIcon,
    src: "/support.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6 w-full md:w-3/4 mx-auto">
      {services.map(({ title, description, src }) => (
        <div
          key={title}
          className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-sm group hover:shadow-md hover:-translate-y-2"
        >
          <Image
            src={src}
            alt={title}
            width={500}
            height={300}
            className="object-cover w-full h-96"
            placeholder="blur"
            blurDataURL="/blur-placeholder.png"
          />
          {/* <div className="flex items-center justify-center bg-muted p-4">
            <Icon className="h-10 w-10 text-muted-foreground" />
          </div> */}
          <div className="p-4 bg-background">
            <h3 className="text-xl font-medium">{title}</h3>
            <p className="text-lg mt-2 text-muted-foreground">{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
