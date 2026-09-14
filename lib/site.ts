export const site = {
  name: "Master Roofing Services",
  tagline: "Built to Protect What Matters",
  title: "Master Roofing Services | Reliable Roofing Solutions",
  description:
    "Professional roofing repairs, restoration, replacement and maintenance from Master Roofing Services. Quality workmanship and dependable service.",
  phone: "0414 947 902",
  emails: [
    "Info@masteroutdoor.com.au",
    "Preet.masterroofingservices@gmail.com",
  ],
  address: "Bradbury, NSW 2560",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
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
  "Roofing",
  "Landscaping",
  "Decking",
  "Fencing",
  "Paving",
  "Pergolas & Patios",
  "Retaining Walls",
  "Outdoor Living",
  "Property Maintenance",
] as const;

export const services = [
  {
    id: "roofing",
    title: "Roofing",
    description:
      "The roof is the first line of defence. We install, restore and maintain complete roof systems so the home stays dry, ventilated and ready for heat, rain and storm season.",
    image: "/images/Service1.jpeg",
    alt: "Residential home with a completed architectural shingle roof",
    items: [
      "New roof installation and replacement",
      "Roof restoration and repairs",
      "Roof inspections",
      "Roof leak repairs",
      "Tile and metal roofing",
      "Ridge capping and repointing",
      "Flashings, sarking and roof ventilation",
      "Gutter and downpipe installation or repairs",
      "Roof cleaning, painting and maintenance",
      "Skylights and whirlybirds",
    ],
  },
  {
    id: "landscaping",
    title: "Landscaping",
    description:
      "Outdoor spaces planned around the block, the climate and how you live. From a full garden makeover to turf, planting and drainage, the finish is clean and built to last.",
    image: "/images/service2.png",
    alt: "Landscaped garden and outdoor beds around a residential property",
    items: [
      "Complete garden landscaping",
      "Garden makeovers and garden beds",
      "Turf and lawn installation",
      "Retaining walls",
      "Paving and pathways",
      "Planting, mulching and edging",
      "Soil, gravel and decorative stone",
      "Garden maintenance",
      "Drainage and excavation",
    ],
  },
  {
    id: "decking",
    title: "Decking & Outdoor Living",
    description:
      "Decks, pergolas and entertaining areas built for everyday use. Timber or composite, repaired or new — the structure is solid and the finish is made to be lived on.",
    image: "/images/service3.png",
    alt: "Timber deck and outdoor living space",
    items: [
      "Timber and composite decking",
      "Deck installation, repairs and restoration",
      "Pergolas and patios",
      "Outdoor entertaining areas",
      "Privacy screens and balustrades",
    ],
  },
  {
    id: "fencing",
    title: "Fencing & Gates",
    description:
      "Boundary, privacy and pool fencing that sits properly on the line and lasts in Australian conditions. Gates are hung, aligned and finished as part of the same job.",
    image: "/images/service4.png",
    alt: "Timber fence and gate on a residential property",
    items: [
      "Timber and Colorbond fencing",
      "Boundary and privacy fencing",
      "Pool fencing",
      "Picket and slat fencing",
      "Gate installation and repairs",
    ],
  },
  {
    id: "paving",
    title: "Paving & Hardscaping",
    description:
      "Driveways, paths and outdoor floors with a proper base, clean lines and a surface that holds up to weather and daily use. Repairs and sealing included where the existing work can be saved.",
    image: "/images/service5.png",
    alt: "Paved driveway and outdoor hardscaping",
    items: [
      "Driveways and pathways",
      "Brick, concrete and stone paving",
      "Outdoor areas and patio paving",
      "Garden steps and edging",
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

export const projects = [
  {
    title: "Residential Roofing",
    caption: "Completed architectural shingle installation",
    image: "/images/project-1.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Roof Restoration",
    caption: "Careful material replacement and surface renewal",
    image: "/images/project-2.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Roof Replacement",
    caption: "Full tear-off and new roof system",
    image: "/images/project-3.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Roof Repair",
    caption: "Targeted repair around flashing and chimney",
    image: "/images/project-4.jpg",
    aspect: "aspect-square",
  },
  {
    title: "Gutter Services",
    caption: "Clean fascia, edge and water management",
    image: "/images/project-5.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Storm Damage",
    caption: "Assessment and recovery after severe weather",
    image: "/images/project-6.jpg",
    aspect: "aspect-[4/3]",
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
