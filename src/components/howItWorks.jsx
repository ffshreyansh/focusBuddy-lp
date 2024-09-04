import Image from "next/image";

const services = [
  {
    title: "Recover From Distractions And Stay Focused",
    description:
      "Our AI coach detects when you are working on less important tasks or scrolling on social media, help you overcome the underlying concerns feeding the distraction, and help you get back to the important task",
    src: "/distraction.jpg",
  },
  {
    title: "Avoid Procrastination And Get Started",
    description:
      "Address hidden anxieties, embrace imperfection, chunk tasks, kickstart with mini-goals, and use regular check-ins to maintain momentum while you work.",
    src: "/prod.jpg",
  },

  {
    title: "Manage Stress And Prevent Burnout",
    description:
      "Detect stress buildup, integrate mindfulness habits, take short rejuvenating breaks, and stay composed while working.",
    src: "/fresh.jpg",
  },
  {
    title: "Anonymous and Affordable",
    description:
      "You have the option to stay fully anonymous. Our goal is to make Focus Buddy affordable and accessible to everyone. Focus Buddy is free for the first month, and then $20 a month",
    src: "/anony.jpg",
  },
  {
    title: "Available 24x7",
    description:
      "Co-work with your AI productivity coach at any time for as long as you need.",
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
