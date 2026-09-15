export const site = {
  name: "Master Roofing Services",
  tagline: "Built to Protect What Matters",
  title: "Master Roofing Services | Reliable Roofing Solutions",
  description:
    "Professional roofing repairs, restoration, replacement and maintenance from Master Roofing Services. Quality workmanship and dependable service.",
  phone: "0414 947 902",
  emails: ["preet.masterroofingservices@gmail.com"],
  address: "Bradbury, NSW 2560",
  serviceArea: "Bradbury & surrounding NSW",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Our Work" },
  { href: "/contact", label: "Contact Us" },
] as const;

export function getPhoneHref(phone: string = site.phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 8) return "/contact";
  return `tel:${digits.startsWith("0") ? `+61${digits.slice(1)}` : digits}`;
}

export const phoneHref = getPhoneHref();

export const homeHighlights = [
  {
    title: "Roofing",
    href: "/services#roofing",
    description:
      "New roofs, restorations, leak repairs, gutters, flashings and ongoing maintenance.",
    image: "/images/Service1.jpeg",
    alt: "Residential home with a completed architectural shingle roof",
  },
  {
    title: "Landscaping",
    href: "/services#landscaping",
    description: "Garden makeovers, turf, retaining walls, planting and outdoor beds.",
    image: "/images/service2.png",
    alt: "Landscaped outdoor area around a residential property",
  },
  {
    title: "Decking",
    href: "/services#decking",
    description: "Timber and composite decks, pergolas, patios and outdoor rooms.",
    image: "/images/service3.png",
    alt: "Outdoor living and decking work",
  },
  {
    title: "Fencing",
    href: "/services#fencing",
    description: "Timber, Colorbond, privacy, pool fencing and gate installs.",
    image: "/images/service4.png",
    alt: "Fence and gate installation on a residential property",
  },
  {
    title: "Paving",
    href: "/services#paving",
    description: "Driveways, pathways, patio paving, steps, edging and sealing.",
    image: "/images/service5.png",
    alt: "Paving and hardscaping on a residential site",
  },
] as const;

export const serviceTags = [
  { label: "Roofing", href: "#roofing" },
  { label: "Landscaping", href: "#landscaping" },
  { label: "Decking", href: "#decking" },
  { label: "Fencing", href: "#fencing" },
  { label: "Paving", href: "#paving" },
  { label: "Pergolas & Patios", href: "#decking" },
  { label: "Retaining Walls", href: "#landscaping" },
  { label: "Outdoor Living", href: "#decking" },
  { label: "Property Maintenance", href: "#roofing" },
] as const;

export const services = [
  {
    id: "roofing",
    title: "Roofing",
    description:
      "We install, restore and maintain complete roof systems so the home stays dry and ready for heat, rain and storm season.",
    image: "/images/Service1.jpeg",
    alt: "Residential home with a completed architectural shingle roof",
    items: [
      "New roof installation and replacement",
      "Roof restoration and repairs",
      "Roof leak repairs",
      "Tile and metal roofing",
      "Gutters, flashings and ventilation",
      "Roof inspections and maintenance",
    ],
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Outdoor spaces planned around the block and how you live — from a garden makeover to turf, planting and drainage.",
    image: "/images/service2.png",
    alt: "Landscaped garden and outdoor beds around a residential property",
    items: [
      "Complete garden landscaping",
      "Garden makeovers and garden beds",
      "Turf and lawn installation",
      "Retaining walls",
      "Planting, mulching and edging",
      "Drainage and excavation",
    ],
  },
  {
    id: "decking",
    title: "Decking & Outdoor Living",
    description:
      "Decks, pergolas and entertaining areas built for everyday use — timber or composite, repaired or new.",
    image: "/images/service3.png",
    alt: "Timber deck and outdoor living space",
    items: [
      "Timber and composite decking",
      "Deck installation and repairs",
      "Pergolas and patios",
      "Outdoor entertaining areas",
    ],
  },
  {
    id: "fencing",
    title: "Fencing & Gates",
    description:
      "Boundary, privacy and pool fencing that sits properly on the line, with gates hung and finished as part of the same job.",
    image: "/images/service4.png",
    alt: "Timber fence and gate on a residential property",
    items: [
      "Timber and Colorbond fencing",
      "Boundary and privacy fencing",
      "Pool fencing",
      "Gate installation and repairs",
    ],
  },
  {
    id: "paving",
    title: "Paving & Hardscaping",
    description:
      "Driveways, paths and outdoor floors with a proper base, clean lines and a surface that holds up to weather and daily use.",
    image: "/images/service5.png",
    alt: "Paved driveway and outdoor hardscaping",
    items: [
      "Driveways and pathways",
      "Brick, concrete and stone paving",
      "Patio paving, steps and edging",
      "Paver repairs and sealing",
    ],
  },
] as const;

export const whyItems = [
  {
    number: "01",
    title: "Experienced Team",
    description:
      "Our crew brings practiced roofing skill to every job, from simple repairs to full replacements.",
  },
  {
    number: "02",
    title: "Quality Materials",
    description:
      "We specify materials that suit the property and the climate, not the cheapest option on the list.",
  },
  {
    number: "03",
    title: "Honest Recommendations",
    description:
      "You will hear what the roof actually needs. If a repair is enough, we will say so.",
  },
  {
    number: "04",
    title: "Reliable Service",
    description:
      "We show up as planned, keep you informed and leave the site tidy at the end of each day.",
  },
  {
    number: "05",
    title: "Attention to Detail",
    description:
      "Flashings, edges and transitions are where roofs fail. We spend the extra time there.",
  },
] as const;

export const howWeWorkSteps = [
  {
    number: "01",
    title: "Free Quote & Consultation",
    description:
      "Contact us through the form or call the team to discuss your project. We will look at the job with you, share a professional opinion and talk through clear pricing options.",
  },
  {
    number: "02",
    title: "Planning & Site Prep",
    description:
      "We plan the job properly and prep the site so the structure is sound, the work runs cleanly and the finish is right.",
  },
  {
    number: "03",
    title: "Construction & Installation",
    description:
      "Our crew completes the work professionally, safely and to the standard our clients have come to expect.",
  },
  {
    number: "04",
    title: "Completion & Quality Check",
    description:
      "We make sure everything is finished properly — aligned, secured, built correctly and left ready to use.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Inspection",
    description:
      "We walk the roof, photograph the issues and explain what we find in plain language.",
  },
  {
    number: "02",
    title: "Assessment & Quote",
    description:
      "You receive a clear scope of work and a straightforward quote with no hidden extras.",
  },
  {
    number: "03",
    title: "Planning",
    description:
      "Materials, access and timing are organized so the job can proceed without disruption.",
  },
  {
    number: "04",
    title: "Professional Installation",
    description:
      "The crew completes the work to a high standard and keeps the property protected throughout.",
  },
  {
    number: "05",
    title: "Final Inspection",
    description:
      "We review the finished roof with you and confirm every detail before we leave the site.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Great service and communication. We're very happy with our new roof. Quality materials and finish. Would highly recommend these guys.",
    name: "Sarah Mitchell",
    note: "Google",
  },
  {
    quote:
      "I cannot say enough good things about my experience with Master Roofing. From start to finish, this was exactly what you hope for when working with a local team.",
    name: "James Carter",
    note: "Google",
  },
  {
    quote:
      "Customer service is second to none and a beautiful job. Just had our roof replaced over the weekend and we already feel more protected. Awesome!",
    name: "Lindsey Beumer",
    note: "Google",
  },
  {
    quote:
      "Honest assessment, fair quote and the crew left the site spotless. The new roof looks sharp and we have peace of mind through storm season.",
    name: "David Nguyen",
    note: "Google",
  },
  {
    quote:
      "They explained every option clearly and never pushed us into extra work. The finish is excellent and we would use them again without hesitation.",
    name: "Priya Sharma",
    note: "Google",
  },
  {
    quote:
      "On time, professional and the quality of the workmanship is obvious. Our home feels properly protected and the whole process was easy.",
    name: "Mark Ellison",
    note: "Google",
  },
] as const;

export const founder = {
  name: "Preet",
  role: "Founder",
  image: "/images/Preet.jpeg",
  quote: "A roof is a long-term investment. If a repair is enough, I will say so.",
  bio: [
    "Preet started Master Roofing Services so homeowners in Bradbury and across NSW could deal with a local team they can trust — honest about what the job needs, careful with the property, and present from the first inspection through to the finished edge.",
    "He stays close to the work. That is why the standard on site is the same standard he holds himself to: quality materials, tidy workmanship and a straight conversation about the best next step.",
  ],
} as const;

export const images = {
  hero: "/images/Home.avif",
  about: "/images/about.jpg",
  cta: "/images/cta-bg.jpg",
  founder: founder.image,
} as const;
