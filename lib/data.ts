import { IProject } from '@/types';

const PLACEHOLDER_IMG = '/logo/framer-motion.svg';

export const GENERAL_INFO = {
    email: 'Sumeethashmi@gmail.com',

    emailSubject: "Let's collaborate",
    emailBody: 'Hi Sumeet, I am reaching out because...',

    linkedin: 'https://www.linkedin.com/in/sumeethashmi',
    location: 'Lahore, Pakistan',
    phone: '+92 304 1444454',
};

export const SOCIAL_LINKS = [
    { name: 'linkedin', url: GENERAL_INFO.linkedin },
    { name: 'email', url: `mailto:${GENERAL_INFO.email}` },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Redux', icon: '/logo/redux.png' },
        { name: 'Zustand', icon: '/logo/react.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'GSAP', icon: '/logo/gsap.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
        { name: 'Material UI', icon: '/MaterialUiIcon.svg' },
        { name: 'Shadcn/UI', icon: '/ShedCNIcon.png' },
    ],
    'tools & platforms': [
        { name: 'Git & GitHub', icon: '/logo/git.png' },
        { name: 'Vercel', icon: '/VercelIcon.svg' },
        { name: 'AWS', icon: '/logo/aws.png' },
        { name: 'Figma', icon: '/figma-icon.svg' },
        { name: 'REST APIs', icon: '/Restapi-icon.svg' },
        { name: 'Zapier', icon: '/zapier-icon.svg' },
        { name: 'Make.com', icon: '/make.com.svg' },
    ],
    cms: [
        { name: 'Strapi', icon: '/strapi-icon.svg' },
        { name: 'Wordpress', icon: '/Wordpress-Icon.svg' },
        { name: 'Contentful', icon: '/Contentful-Icon.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Mapped City',
        slug: 'mapped-city',
        liveUrl: 'https://mappedcity.com',
        year: 2024,
        description: `
            <p>
                A travel discovery platform that curates local favorites and hidden gems in cities. Built with Next.js, Tailwind CSS,
                and integrated with mapping APIs for seamless location discovery.
            </p>
        `,
        role: `
            <p>
                Frontend ownership end to end: discovery experiences, map-driven UX, and production-ready layouts
                aligned with design and performance goals (responsive UI, API integration).
            </p>
        `,
        techStack: ['Next.js', 'Tailwind CSS', 'Mapping APIs', 'REST APIs'],
        thumbnail: PLACEHOLDER_IMG,
        longThumbnail: PLACEHOLDER_IMG,
        images: [PLACEHOLDER_IMG],
    },
    {
        title: 'Vonterra',
        slug: 'vonterra',
        liveUrl: 'https://vonterra.io',
        year: 2024,
        description: `
            <p>
                A digital product studio partnering with founders to build scalable software — offering mobile/web design, UX
                audits, and design systems. Includes Klimter (subscription design service) and Saget (SaaS for product-market
                fit).
            </p>
        `,
        role: `
            <p>
                Frontend implementation for studio and product surfaces: marketing and product pages, narrative UX,
                and UI consistent with design-system and brand guidelines.
            </p>
        `,
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Design systems'],
        thumbnail: PLACEHOLDER_IMG,
        longThumbnail: PLACEHOLDER_IMG,
        images: [PLACEHOLDER_IMG],
    },
    {
        title: 'LinkWave',
        slug: 'linkwave',
        liveUrl: 'https://linkwave-frontend.vercel.app',
        year: 2024,
        description: `
            <p>
                A personalized link-sharing platform with a built-in AI assistant (powered by LLM APIs) that analyzes social media
                content to auto-generate engaging bios and captions, supporting profile customization and seamless sharing.
            </p>
        `,
        role: `
            <p>
                Frontend for profile and link workflows, AI-assisted flows (prompting, results presentation), and
                sharing UX; integrated LLM APIs and deployed on Vercel.
            </p>
        `,
        techStack: ['Next.js', 'React', 'LLM APIs', 'Vercel', 'TypeScript'],
        thumbnail: PLACEHOLDER_IMG,
        longThumbnail: PLACEHOLDER_IMG,
        images: [PLACEHOLDER_IMG],
    },
    {
        title: 'Pedlar',
        slug: 'pedlar',
        liveUrl: 'https://dev.pedlar.store',
        year: 2024,
        description: `
            <p>
                An e-commerce platform enabling creators and influencers to build personalized digital storefronts, integrated with
                partner brand APIs for product showcasing and selling.
            </p>
        `,
        role: `
            <p>
                Storefront UI, catalog and product presentation, and integration with partner brand APIs for listing,
                merchandising, and checkout-related flows.
            </p>
        `,
        techStack: ['React', 'Next.js', 'REST APIs', 'E-commerce'],
        thumbnail: PLACEHOLDER_IMG,
        longThumbnail: PLACEHOLDER_IMG,
        images: [PLACEHOLDER_IMG],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Engineer',
        company: 'Visiata Systems International · Cyaymont, Delaware',
        duration: 'Apr 2024 – Present',
    },
    {
        title: 'React JS Developer',
        company: 'Absolute Solutions · Riyadh, Central',
        duration: 'Feb 2023 – Mar 2024',
    },
    {
        title: 'React JS Developer',
        company: 'Global Software Consulting · Lahore',
        duration: 'May 2022 – Jan 2023',
    },
];
