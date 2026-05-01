import { IProject } from '@/types';

const PLACEHOLDER_IMG = '/logo/framer-motion.svg';

const PROJECT_IMAGE_BASE = '/projects/images';

/** Filenames in public/projects/images, named per project. */
const PROJECT_IMAGE_FILE: Record<string, string> = {
    podpress: 'Podpress.png',
    'mapped-city': 'MappedCity.png',
    linkwave: 'Linkwave.png',
    pedlar: 'Pedlar.png',
};

const projectImages = (slug: string) => {
    const file = PROJECT_IMAGE_FILE[slug];
    const url = file ? `${PROJECT_IMAGE_BASE}/${file}` : PLACEHOLDER_IMG;
    return { thumbnail: url, longThumbnail: url, images: [url] as string[] };
};

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
        title: 'Podpress',
        slug: 'podpress',
        liveUrl: 'https://podpress.so',
        description: `
            <p>
          PodPress is an AI-powered tool that automatically converts podcast episodes into ready-to-send newsletters in minutes. Users simply connect a podcast RSS feed, upload an MP3, or paste a YouTube link — and PodPress generates polished, formatted newsletter content with no manual editing required.
            </p>
        `,
        techStack: ['Next.js', 'Tailwind CSS', 'OpenAI', 'ElevenLabs'],
        ...projectImages('podpress'),
    },
    {
        title: 'Mapped City',
        slug: 'mapped-city',
        liveUrl: 'https://mappedcity.com',
        description: `
            <p>
                A travel discovery platform that curates local favorites and hidden gems in cities. Built with Next.js, Tailwind CSS,
                and integrated with mapping APIs for seamless location discovery.
            </p>
        `,
        techStack: ['Next.js', 'Tailwind CSS', 'Mapping APIs', 'REST APIs'],
        ...projectImages('mapped-city'),
    },
    {
        title: 'LinkWave',
        slug: 'linkwave',
        liveUrl: 'https://linkwave-frontend.vercel.app',
        description: `
            <p>
                A personalized link-sharing platform with a built-in AI assistant (powered by LLM APIs) that analyzes social media
                content to auto-generate engaging bios and captions, supporting profile customization and seamless sharing.
            </p>
        `,
        techStack: ['Next.js', 'React', 'LLM APIs', 'Vercel', 'TypeScript'],
        ...projectImages('linkwave'),
    },
    {
        title: 'Pedlar',
        slug: 'pedlar',
        liveUrl: 'https://dev.pedlar.store',
        description: `
            <p>
                An e-commerce platform enabling creators and influencers to build personalized digital storefronts, integrated with
                partner brand APIs for product showcasing and selling.
            </p>
        `,
        techStack: ['React', 'Next.js', 'REST APIs', 'E-commerce'],
        ...projectImages('pedlar'),
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Engineer',
        company: 'Visiata Systems International · Claymont, Delaware',
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
