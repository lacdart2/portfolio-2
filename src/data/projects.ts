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
        title: 'Bootstrap Components',
        shortDesc: 'A hands-on Bootstrap project demonstrating grids, navbars, accordions, forms, and responsive layouts.',
        thumbnail: '/images/css-frameworks.png',
        articleImage: '/images/css-frameworks.png',
        imageCaption: 'Bootstrap components demo — built during the CSS Frameworks course at Noroff',
        liveUrl: 'https://fantastic-cajeta-049b07.netlify.app/',
        repoUrl: 'https://github.com/lacdart2/bootstrap-css_frameworks',
        description: `A practical Bootstrap project built during the CSS Frameworks course at Noroff. 
        The project demonstrates core Bootstrap concepts including the grid system, navigation, 
        accordion components, forms, and responsive utilities — all without writing custom CSS from scratch.`,
        techStack: ['HTML', 'Bootstrap', 'SASS', 'CSS'],
        improvements: [
            'Added proper README documentation',
            'Fixed layout overflow on mobile screens',
        ],
    },
    {
        id: '2',
        slug: 'semester-project-2',
        category: 'Semester Project 2',
        title: 'Auction House',
        shortDesc: 'A live auction web app where users can list items, place bids, and manage their virtual currency balance.',
        thumbnail: '/images/auction-website-semester_project_2.png',
        articleImage: '/images/auction-website-semester_project_2.png',
        imageCaption: 'Auction House — real-time bidding platform built for Noroff Semester Project 2',
        liveUrl: 'https://your-sp2-live-url.com',
        repoUrl: 'https://github.com/lacdart2/semester-project-2-auction-website_lakhdar-hafsi',
        description: `Auction House is a full-featured bidding platform built as part of the Noroff Semester Project 2. 
        Users can register, list items for auction, place bids, and track their virtual currency. 
        The project integrates the Noroff Auction API and demonstrates async JavaScript, authentication, and dynamic DOM manipulation.`,
        techStack: ['HTML', 'CSS', 'JavaScript', 'Noroff API'],
        improvements: [
            'Refactored async fetch calls for cleaner error handling',
            'Improved semantic HTML structure for better accessibility',
        ],
    },
    {
        id: '3',
        slug: 'holidaze',
        category: 'Project Exam 2',
        title: 'Holidaze',
        shortDesc: 'A holiday venue booking app with venue management, availability calendars, and user authentication.',
        thumbnail: '/images/holidaze-website_PE2.png',
        articleImage: '/images/holidaze-website_PE2.png',
        imageCaption: 'Holidaze — holiday venue booking platform built with React and Noroff API',
        liveUrl: 'https://holidaze-pe2.vercel.app/',
        repoUrl: 'https://github.com/lacdart2/holidaze-pe2',
        description: `Holidaze is a venue booking application built for the Noroff Project Exam 2. 
        The app allows customers to browse and book holiday venues, while venue managers can create and manage listings. 
        Built with React and the Noroff Holidaze API, it demonstrates component architecture, 
        routing, form handling, and API integration in a real-world scenario.`,
        techStack: ['React', 'JavaScript', 'CSS', 'Noroff API'],
        improvements: [
            'Fixed broken image fallbacks on venue cards',
            'Improved form validation feedback on the booking form',
        ],
    },
]