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

export const services = [
  {
    id: "roof-installation",
    title: "Roof Installation",
    description:
      "Professional installation of new roofs, built to protect your property and provide a durable, long-lasting finish.",
    image: "/images/Service1.jpeg",
    alt: "New roof installation by Master Roofing Services",
    details: [
      "New roof design and complete installation",
      "Materials selected to suit the property and climate",
      "Flashings, ridges, valleys and finishing details completed properly",
      "Site kept protected and left tidy at handover",
    ],
  },
  {
    id: "roof-repairs",
    title: "Roof Repairs",
    description:
      "Professional roof repairs to address damage, wear and general roofing issues while helping protect your property.",
    image: "/images/roof-repair.png",
    alt: "Residential roof repairs by Master Roofing Services",
    details: [
      "Damaged tiles, sheets, flashings and ridges repaired",
      "Storm damage, wear and general roofing issues addressed",
      "Targeted repairs to help extend the life of the roof",
      "Property protected throughout the work",
    ],
  },
  {
    id: "roof-leak-repairs",
    title: "Roof Leak Repairs",
    description:
      "Identify and repair roof leaks to help prevent water damage and keep your property protected.",
    image: "/images/roof-leaking.png",
    alt: "Roof leak repair work by Master Roofing Services",
    details: [
      "Leak source identified before repairs begin",
      "Flashings, valleys, penetrations and weak points checked",
      "Repairs completed to help stop water entering the home",
      "Clear advice on how to keep the roof watertight",
    ],
  },
  {
    id: "roof-restoration",
    title: "Roof Restoration",
    description:
      "Restore ageing or weathered roofs with professional repairs, preparation and restoration work.",
    image: "/images/roof-restoration.png",
    alt: "Roof restoration work by Master Roofing Services",
    details: [
      "Ageing or weathered surfaces prepared for restoration",
      "Repairs completed before coatings or finishing work",
      "Protective restoration to improve appearance and condition",
      "A longer-lasting finish without a full roof replacement, where suitable",
    ],
  },
  {
    id: "metal-roofing",
    title: "Metal Roofing",
    description:
      "Durable metal roofing solutions designed to provide long-lasting protection and a clean, modern finish.",
    image: "/images/metal-roof.png",
    alt: "Metal roofing by Master Roofing Services",
    details: [
      "Metal and Colorbond roof installation",
      "Durable protection with a clean, modern finish",
      "Flashings and edges detailed for weather performance",
      "Gutters and accessories fitted as part of the job where needed",
    ],
  },
  {
    id: "roof-painting",
    title: "Roof Painting",
    description:
      "Professional roof painting to refresh the appearance of your roof and provide an additional layer of protection.",
    image: "/images/roof-painting.avif",
    alt: "Roof painting by Master Roofing Services",
    details: [
      "Roof cleaned and prepared before painting",
      "Professional coatings for appearance and extra protection",
      "Colour options to suit the home",
      "A refreshed finish that helps the roof weather more evenly",
    ],
  },
  {
    id: "gutter-installation",
    title: "Gutter Installation",
    description:
      "Professional gutter installation to help manage rainwater and keep your roofing system working effectively.",
    image: "/images/gutter-installation.png",
    alt: "Gutter installation by Master Roofing Services",
    details: [
      "New gutters sized and set out for the roof",
      "Downpipes and overflows installed to move water away from the building",
      "Colour-matched options where available",
      "Clean lines and a secure, tidy installation",
    ],
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description:
      "Thorough gutter cleaning to remove buildup, improve water flow and help prevent overflow and water damage.",
    image: "/images/gutter-cleaning.avif",
    alt: "Gutter cleaning by Master Roofing Services",
    details: [
      "Leaves, silt and debris removed from gutters",
      "Downpipes flushed and checked for blockages",
      "Overflow and water-damage risk reduced",
      "Roof drainage left clear and working effectively",
    ],
  },
  {
    id: "terracotta-roof-restoration",
    title: "Terracotta Roof Restoration",
    description:
      "Specialised restoration for terracotta roofs, helping preserve their appearance, condition and long-term performance.",
    image: "/images/Terracotta-Roof-Restoration.png",
    alt: "Terracotta roof restoration by Master Roofing Services",
    details: [
      "Specialised terracotta tile repairs and replacement where needed",
      "Bedding, pointing and ridge work restored",
      "Appearance and condition of the terracotta roof improved",
      "Work aimed at protecting long-term performance",
    ],
  },
  {
    id: "carport-and-patio",
    title: "Carport and Patio",
    description:
      "Carport and patio roofing built to provide shade, weather protection and a clean finish for outdoor living areas.",
    image: "/images/carport.png",
    alt: "Carport and patio by Master Roofing Services",
    details: [
      "Carport and patio roofs designed for the space",
      "Shade and weather protection for outdoor areas",
      "A clean finish that sits well with the home",
      "Secure, tidy installation from structure through to the roof edge",
    ],
  },
  {
    id: "solar-panel-cleaning-and-bird-mesh",
    title: "Solar Panel Cleaning and Bird Mesh",
    description:
      "Solar panel cleaning and bird mesh installation to help keep panels working efficiently and protected from pests.",
    image: "/images/solar-cleaning.avif",
    alt: "Solar panel cleaning and bird mesh by Master Roofing Services",
    details: [
      "Solar panels cleaned to remove dirt, dust and buildup",
      "Bird mesh fitted to help keep pests out from under the panels",
      "Work completed carefully around existing roofing and solar hardware",
      "Site left tidy at handover",
    ],
  },
  {
    id: "driveway-wash-and-paint",
    title: "Driveway Wash and Paint",
    description:
      "Pressure washing and protective coatings to clean, refresh and help protect your driveway.",
    image: "/images/driveway.png",
    alt: "Driveway wash and paint by Master Roofing Services",
    details: [
      "Driveway pressure washed to remove dirt, stains and buildup",
      "Surface prepared before coatings are applied",
      "Durable coatings for a refreshed, more even finish",
      "Work aimed at improving appearance and surface protection",
    ],
  },
] as const;

export const homeHighlights = services.map((service) => ({
  title: service.title,
  href: `/services#${service.id}`,
  description: service.description,
  image: service.image,
  alt: service.alt,
}));

export const serviceTags = services.map((service) => ({
  label: service.title,
  href: `#${service.id}`,
}));

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
