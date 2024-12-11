import { IconWorld, IconBrandGithub } from "@tabler/icons-react";


export const DATA = {
    projects: [
    {
        title: "Simulvolve",
        href: "https://simulvolve.vercel.app",
        active: true,
        description:
            "A Next.js website communicating with a Rust backend through WebAssembly, allowing to display a genetic algorithm for a snake game.",
        links: [
            {
                type: "Website",
                href: "https://simulvolve.vercel.app",
                icon: <IconWorld className="size-3" />,
            },
            {
                type: "GitHub",
                href: "https://github.com/Adissuu/Simulvolve",
                icon: <IconBrandGithub className="size-3" />,
            },
        ],
        image: "",
        video: "/Simulvolve.mp4",
    },
    {
        title: "AdvancedWarpCore",
        href: "https://github.com/Adissuu/AdvancedWarpCore",
        active: true,
        description:
            "A (actually three) machine learning model predicting queue time for your next Dead By Daylight game!",
        links: [
            {
                type: "GitHub",
                href: "https://github.com/Adissuu/AdvancedWarpCore",
                icon: <IconBrandGithub className="size-3" />,
            },
        ],
        image: "",
        video:
            "/AdvancedWarpCore.mp4",
    },
    {
        title: "CondoVision",
        href: "https://condo-vision.vercel.app",
        active: true,
        description:
            "Comprehensive condo management system designed for the modern era. Our platform seamlessly integrates the needs of condo owners, rental users, and condo management companies, offering a streamlined and intuitive experience.",
        links: [
            {
                type: "Website",
                href: "https://condo-vision.vercel.app",
                icon: <IconWorld className="size-3" />,
            },
            {
                type: "GitHub",
                href: "https://github.com/Adissuu/CondoVision",
                icon: <IconBrandGithub className="size-3" />,
            },
        ],
        image: "/Condovision.png",
        video:
            "",
    },

    ]
} as const;