export type Project = {
    id: string
    slug: string
    category: string
    title: string
    shortDesc: string
    thumbnail: string
    articleImage: string
    imageCaption: string
    liveUrl: string
    repoUrl: string
    description: string
    techStack: string[]
    improvements: string[]
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'css-frameworks',
        category: 'CSS Frameworks',
        title: 'Pulse — Social Media App',
        shortDesc: 'A dark-themed social media feed built with Tailwind CSS v4 — post creation, likes, follow system and filtering.',
        thumbnail: '/images/pulse.webp',
        articleImage: '/images/pulse.webp',
        imageCaption: 'Pulse — social media app built with Tailwind CSS v4 for the CSS Frameworks CA at Noroff',
        liveUrl: 'https://pulse-social-ca.netlify.app/',
        repoUrl: 'https://github.com/lacdart2/css-frameworks-ca',
        description: `Pulse is a social media feed application built for the CSS Frameworks CA at Noroff. 
        The project uses Tailwind CSS v4 with a custom dark design system — cyan accent, Inter and Sora fonts. 
        Features include post creation, like toggle, follow/unfollow, sort filtering by latest, popular and following, 
        and a responsive mobile hamburger menu. Built on a separate branch with an open PR as required by the brief.`,
        techStack: ['HTML', 'Tailwind CSS v4', 'JavaScript', 'Netlify'],
        improvements: [
            'Rebuilt from scratch with Tailwind CSS v4 via npm instead of CDN',
            'Added mobile hamburger menu with full navigation and user info',
            'Implemented live post creation, like toggle and follow/unfollow without page reload',
            'Added sort filtering: latest, popular, following',
        ],
    },
    {
        id: '2',
        slug: 'semester-project-2',
        category: 'Semester Project 2',
        title: 'Bidly — Auction House',
        shortDesc: 'A full auction platform — rebranded and rebuilt with Noroff API v2, dark theme, CRUD listings and live bidding.',
        thumbnail: '/images/bidly.webp',
        articleImage: '/images/bidly.webp',
        imageCaption: 'Bidly — auction house rebuilt with Noroff API v2 for Portfolio 2 at Noroff',
        liveUrl: 'https://auction-website-semester-project2.netlify.app/',
        repoUrl: 'https://github.com/lacdart2/semester-project-2-auction-website_lakhdar-hafsi',
        description: `Bidly is a full-featured auction platform — rebranded from the original Year 1 "BID it ALL" submission. 
        For Portfolio 2, the project was migrated from Noroff API v1 to v2, fully redesigned with a dark theme, 
        and extended with new features. Users can browse listings without an account, register with a Noroff email, 
        create, edit and delete their own listings, place bids with live credit updates, 
        view and edit their profile, and search listings by title or tag.`,
        techStack: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap 5', 'Noroff API v2', 'Netlify'],
        improvements: [
            'Migrated from Noroff API v1 to v2 — new base URLs, X-Noroff-API-Key header, .data unwrapping',
            'Rebranded to Bidly with new SVG logo and full dark theme redesign',
            'Added full CRUD: create, edit and delete listings',
            'Added live bidding with credit updates and user dropdown with profile, sell and logout',
        ],
    },
    {
        id: '3',
        slug: 'holidaze',
        category: 'Project Exam 2',
        title: 'Holidaze',
        shortDesc: 'An Airbnb-inspired venue booking app with role-based dashboards, booking calendar and interactive map.',
        thumbnail: '/images/holidaze.webp',
        articleImage: '/images/holidaze.webp',
        imageCaption: 'Holidaze — holiday venue booking platform built with React, TypeScript and Tailwind CSS',
        liveUrl: 'https://holidaze-pe2.vercel.app/',
        repoUrl: 'https://github.com/lacdart2/holidaze-pe2',
        description: `Holidaze is an Airbnb-inspired venue booking application built for Noroff Project Exam 2. 
        Customers can browse, search and book venues with an interactive booking calendar and Leaflet map. 
        Venue managers get a dedicated dashboard to create, edit and manage their properties and bookings. 
        Built with React, TypeScript and Tailwind CSS v4, using Zustand for auth state and Zod for form validation.`,
        techStack: ['React', 'TypeScript', 'Tailwind CSS v4', 'Zustand', 'Zod', 'Leaflet', 'Noroff API v2', 'Vercel'],
        improvements: [
            'Added loading="lazy" to all 16 venue and avatar images for performance',
            'Fixed booking date timezone bug with toNoonISO() helper — dates no longer shift in UTC+ timezones',
            'Added newline at end of all source files for POSIX compliance',
        ],
    },
]