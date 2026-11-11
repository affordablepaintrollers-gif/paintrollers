import { Factory, Layers, PackageCheck, Truck } from 'lucide-react';

/*
 * Single source of truth for all copy, prices, specs, contact details and image references.
 * Placeholders to replace before launch: brand name, phone, email, address, social links,
 * testimonials, and the covers-per-pallet figure ([X]).
 */

export const brand = {
  name: 'Roller Wholesale Co.',
  shortName: 'Roller Wholesale',
  tagline: 'Wholesale paint roller covers for contractors, resellers, and distributors.',
  phoneDisplay: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'sales@yourcompany.com',
  address: '1200 Industrial Parkway, Suite 4, Columbus, OH 43228',
  hours: 'Monday to Friday, 8am to 6pm ET',
  copyright: `© ${new Date().getFullYear()} Roller Wholesale Co. All rights reserved.`,
};

export const navLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Who We Serve', href: '#audiences' },
  { label: 'Quality', href: '#quality' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export const ctaLabels = {
  samplePack: 'Request a Sample Pack',
  palletQuote: 'Get a Pallet Quote',
};

export const palletCoversPlaceholder = '[X]';

export const images = {
  hero: 'https://images.pexels.com/photos/36153946/pexels-photo-36153946.jpeg?auto=compress&cs=tinysrgb&w=1800',
  audienceContractor: 'https://images.pexels.com/photos/5493661/pexels-photo-5493661.jpeg?auto=compress&cs=tinysrgb&w=1200',
  audienceReseller: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1200',
  product18: 'https://images.pexels.com/photos/6474465/pexels-photo-6474465.jpeg?auto=compress&cs=tinysrgb&w=1000',
  product9: 'https://images.pexels.com/photos/5583052/pexels-photo-5583052.jpeg?auto=compress&cs=tinysrgb&w=1000',
  quality: 'https://images.pexels.com/photos/16751235/pexels-photo-16751235.jpeg?auto=compress&cs=tinysrgb&w=2000',
  whyUs: 'https://images.pexels.com/photos/5798972/pexels-photo-5798972.jpeg?auto=compress&cs=tinysrgb&w=1200',
  preOrder: 'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=2000',
  sample: 'https://images.pexels.com/photos/5583113/pexels-photo-5583113.jpeg?auto=compress&cs=tinysrgb&w=1400',
  quote: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1400',
  faq: 'https://images.pexels.com/photos/8486896/pexels-photo-8486896.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export const hero = {
  eyebrow: 'Wholesale paint roller covers',
  headline: 'Premium paint roller covers at wholesale pricing.',
  subheadline:
    'Durable, lint-free covers built for professional painters, resellers, and distributors. Sold by the pallet and shipped direct to your door or your customer.',
  image: images.hero,
  imageAlt: 'Two painters rolling fresh paint on the walls of an interior room',
  panelTitle: 'Wholesale pricing',
  panelRows: [
    { label: '18-inch roller cover', price: '$2.99' },
    { label: '9-inch roller cover', price: '$1.99' },
  ],
  panelNote: 'Per roller cover. Pallet minimum.',
};

export const trustStats = [
  { value: 'Pallet minimum', label: 'Wholesale orders only' },
  { value: 'Direct shipping', label: 'To you or your customer' },
  { value: 'Sample packs', label: 'Test on a live job first' },
  { value: 'About 60 days', label: 'Pre-order delivery estimate' },
];

export const audiences = {
  id: 'audiences',
  eyebrow: 'Who we serve',
  title: 'Built for the people who put paint on walls, and the people who sell to them.',
  groups: [
    {
      title: 'Painting contractors and crews',
      body: 'Stock your crews with covers that finish clean on every job. Pallet pricing keeps your cost per wall low across ongoing work.',
      points: ['Consistent finish from job to job', 'Pallet pricing for ongoing work', 'Sample pack to test on a live site'],
      image: images.audienceContractor,
      imageAlt: 'Painter working on a wall during an interior renovation',
      cta: ctaLabels.palletQuote,
    },
    {
      title: 'Retailers and distributors',
      body: 'Buy in volume and resell under your own storefront or catalog. Orders can ship directly to your end customers.',
      points: ['Pallet-level wholesale pricing', 'Direct-to-customer shipping', 'Private labeling on qualifying orders'],
      image: images.audienceReseller,
      imageAlt: 'Two warehouse workers moving a trolley loaded with stock',
      cta: ctaLabels.palletQuote,
    },
  ],
};

export const pricing = {
  id: 'pricing',
  eyebrow: 'Wholesale pricing',
  title: 'Two sizes. One clear price per cover.',
  intro: 'Prices are per roller cover and sold by the pallet. There are no single-cover retail orders.',
  products: [
    {
      name: '18-inch roller cover',
      price: '$2.99',
      image: images.product18,
      imageAlt: 'Gray 18-inch paint roller cover resting in an orange paint tray',
      description:
        'Our full-size cover for large walls, ceilings, and production work. Covers more area per pass and holds a generous load of paint.',
      palletCovers: palletCoversPlaceholder,
    },
    {
      name: '9-inch roller cover',
      price: '$1.99',
      image: images.product9,
      imageAlt: 'Two paint roller covers lying on a wooden surface',
      description:
        'The everyday cover for walls, trim-adjacent work, and smaller rooms. Even release for clean, streak-free coverage.',
      palletCovers: palletCoversPlaceholder,
    },
  ],
  tableHeaders: ['Product', 'Price per cover', 'Minimum order', 'Covers per pallet', 'Lead time'],
  tableNote: 'Per roller cover, pallet minimum. Pre-orders ship directly to your customer or address.',
  leadTime: 'About 60 days',
  bulkOnly: {
    title: 'Bulk orders only',
    body: 'We sell wholesale by the pallet. Single-cover orders are not available.',
  },
};

export const quality = {
  id: 'quality',
  eyebrow: 'Built to finish',
  title: 'A cover that holds up job after job.',
  intro: 'Every cover is made to a consistent standard, so the wall you finish today matches the one you finish next month.',
  image: images.quality,
  imageAlt: 'Close-up of a blue paint roller applying paint across a textured wall',
  points: [
    {
      title: 'Durable',
      body: 'Stays intact through repeated loading and long runs across large walls.',
    },
    {
      title: 'Lint-free',
      body: 'Leaves no fibers in wet paint, so your finish stays clean from the first pass to the last.',
    },
    {
      title: 'Smooth, consistent finish',
      body: 'Even paint release and a uniform surface for streak-free, predictable coverage.',
    },
    {
      title: 'Holds paint well',
      body: 'Carries a full load without dripping or running dry partway across the wall.',
    },
  ],
};

export const whyUs = {
  id: 'why-us',
  eyebrow: 'Why buy from us',
  title: 'Priced for volume. Run like a supplier, not a storefront.',
  image: images.whyUs,
  imageAlt: 'Painter rolling paint onto a wall with a roller',
  items: [
    {
      icon: Layers,
      title: 'Bulk savings',
      body: 'Pallet pricing lowers your cost per cover and protects margins on every job.',
    },
    {
      icon: Factory,
      title: 'Quality you can rely on',
      body: 'Consistent covers from order to order, so your finish and your schedule stay predictable.',
    },
    {
      icon: Truck,
      title: 'Direct shipping',
      body: 'Ship to your warehouse, your job site, or your customer. No extra handling on your end.',
    },
    {
      icon: PackageCheck,
      title: 'Sample packs available',
      body: 'Test both sizes on real work before you commit to a pallet.',
    },
  ],
};

export const preOrder = {
  id: 'how-it-works',
  eyebrow: 'How pre-orders work',
  title: 'From quote to delivery in four steps.',
  intro: 'Orders are pre-orders placed against a confirmed pallet. We prepare the full order and ship it directly.',
  image: images.preOrder,
  imageAlt: 'Forklift moving boxed stock through a warehouse',
  steps: [
    {
      title: 'Request a quote',
      body: 'Tell us the sizes and number of pallets you need. We reply with pricing and availability.',
    },
    {
      title: 'Confirm your pallet order',
      body: 'Approve the quote and confirm your pallet. Shipping details are locked in with your order.',
    },
    {
      title: 'We prepare and ship',
      body: 'Your covers are packed and shipped directly to your customer or your chosen address.',
    },
    {
      title: 'Delivered in about 60 days',
      body: 'Estimated delivery is about 60 days from confirmed order. We keep you updated along the way.',
    },
  ],
};

export const samplePack = {
  id: 'sample-pack',
  eyebrow: 'Sample pack',
  title: 'Test both sizes before you commit to a pallet.',
  intro: 'Tell us where to ship and which sizes you want. We will confirm the details within one business day.',
  price: 'Free',
  priceNote: 'Sample pack price. Limit one per company.',
  image: images.sample,
  imageAlt: 'Paint roller and tray on a wooden floor beside a paint can',
  bullets: ['Both sizes included', 'Ships to the address you choose', 'Confirmation within one business day'],
  sizeOptions: ['18-inch', '9-inch'],
};

export const gallery = {
  id: 'gallery',
  eyebrow: 'Gallery',
  title: 'The cover, the crew, and the stock behind it.',
  items: [
    {
      src: 'https://images.pexels.com/photos/6764270/pexels-photo-6764270.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Woman rolling gray paint onto an indoor wall',
      caption: 'Even coverage on interior walls',
      span: 'tall',
    },
    {
      src: 'https://images.pexels.com/photos/5853940/pexels-photo-5853940.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Yellow paint rollers arranged on a wooden background',
      caption: 'Roller covers, ready to load',
      span: 'normal',
    },
    {
      src: 'https://images.pexels.com/photos/1267329/pexels-photo-1267329.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Forklift operator moving stock in a busy warehouse',
      caption: 'Stock moved by the pallet',
      span: 'wide',
    },
    {
      src: 'https://images.pexels.com/photos/6474499/pexels-photo-6474499.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Female painter in safety goggles renovating a wall',
      caption: 'Professional crews',
      span: 'tall',
    },
    {
      src: 'https://images.pexels.com/photos/9222200/pexels-photo-9222200.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Paint can, roller, and tray on a textured floor',
      caption: 'Everything for the job',
      span: 'normal',
    },
    {
      src: 'https://images.pexels.com/photos/11835350/pexels-photo-11835350.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'High shelves in a warehouse stocked with boxed merchandise',
      caption: 'Warehouse-ready inventory',
      span: 'normal',
    },
    {
      src: 'https://images.pexels.com/photos/5798983/pexels-photo-5798983.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Painter on a ladder holding a roller during a home renovation',
      caption: 'On the ladder, on the job',
      span: 'normal',
    },
    {
      src: 'https://images.pexels.com/photos/10096900/pexels-photo-10096900.jpeg?auto=compress&cs=tinysrgb&w=1400',
      alt: 'Stacked pallets outside a building, ready for transport',
      caption: 'Full pallet orders',
      span: 'wide',
    },
  ],
};

export const testimonials = {
  id: 'testimonials',
  eyebrow: 'Customer stories',
  title: 'What buyers say after their first pallet.',
  items: [
    {
      quote:
        'We moved the whole crew to the 18-inch covers. Cleaner finish, less shedding, and the pallet pricing made our numbers work on every job.',
      name: 'Marcus T.',
      role: 'Owner, Summit Painting Co.',
      image: 'https://images.pexels.com/photos/6050251/pexels-photo-6050251.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Portrait of a painter holding a roller against a yellow background',
    },
    {
      quote:
        'We tested a sample pack on three rentals, then placed a pallet the following week. Easy decision, and the delivery came exactly as quoted.',
      name: 'Jenna R.',
      role: 'Operations Manager, Brightline Property Services',
      image: 'https://images.pexels.com/photos/5798983/pexels-photo-5798983.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Portrait of a painter standing on a ladder with a roller',
    },
    {
      quote:
        'We resell to our own customers, so consistency matters most. These covers arrive uniform, and our returns dropped to almost nothing.',
      name: 'David K.',
      role: 'Buyer, Harbor Hardware Supply',
      image: 'https://images.pexels.com/photos/6474499/pexels-photo-6474499.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'Painter in safety goggles working on an interior wall',
    },
  ],
};

export const quote = {
  id: 'quote',
  eyebrow: 'Get a pallet quote',
  title: 'Tell us what you need. We will quote your pallet.',
  intro: 'Share your sizes and pallet count. A member of our sales team replies with pricing and delivery dates.',
  image: images.quote,
  imageAlt: 'Warehouse aisle lined with stacked pallets',
  sizeOptions: ['18-inch', '9-inch'],
  contactRows: [
    { label: 'Call sales', value: brand.phoneDisplay, href: brand.phoneHref },
    { label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
    { label: 'Warehouse', value: brand.address },
    { label: 'Hours', value: brand.hours },
  ],
};

export const faq = {
  id: 'faq',
  eyebrow: 'FAQ',
  title: 'Questions buyers ask before they order.',
  image: images.faq,
  imageAlt: 'Two workers shaking hands in a construction setting',
  items: [
    {
      q: 'What is the minimum order?',
      a: 'The minimum order is one pallet. We sell wholesale only and do not fill single-cover or small-quantity orders.',
    },
    {
      q: 'How long is the lead time?',
      a: 'Pre-orders ship directly to your customer or address with an estimated delivery of about 60 days from confirmed order.',
    },
    {
      q: 'Can I test the covers before ordering a pallet?',
      a: 'Yes. Request a sample pack and we will ship both sizes so you can test them on real work. Sample packs are free, limited to one per company.',
    },
    {
      q: 'Can you ship directly to my customers?',
      a: 'Yes. Pre-orders can ship straight to your customer or any address you choose. Confirm the address when you approve your quote.',
    },
    {
      q: 'What are your payment terms?',
      a: 'Pallet orders are invoiced when the quote is confirmed. Established accounts can ask our sales team about other payment terms.',
    },
    {
      q: 'Do you offer custom or private labeling?',
      a: 'Private labeling is available on qualifying pallet orders. Contact our sales team with your volume and label requirements.',
    },
  ],
};

export const footer = {
  ctaTitle: 'Ready to quote your next pallet?',
  ctaBody: 'Request a sample pack to test first, or go straight to a pallet quote.',
  columns: [
    {
      title: 'Products',
      links: [
        { label: 'Pricing', href: '#pricing' },
        { label: 'Quality', href: '#quality' },
        { label: 'Gallery', href: '#gallery' },
      ],
    },
    {
      title: 'Buying',
      links: [
        { label: 'Who We Serve', href: '#audiences' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Sample Pack', href: '#sample-pack' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
  ],
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
};
