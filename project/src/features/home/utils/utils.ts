import { CardInfo } from "../types/types";

export const CARDS: CardInfo[] = [
    {
        title: "Mental health match",
        subtitle: "Match with a mental health specialist",
        imagePath: "mental.png",
        href: "/mental-health",
        isNew: true,
    },
    {
        title: "Doctor's appointment",
        subtitle: "Schedule with your care team",
        imagePath: "doctor.png",
        href: "/home",
    },
    {
        title: "Same-day care",
        subtitle: "In-person and virtual visits for urgent health concerns",
        imagePath: "sameday.png",
        href: "/home",
    },
    {
        title: "Routine services",
        subtitle: "Lab tests, screenings, vaccines",
        imagePath: "routine.png",
        href: "/home",
    },
    {
        title: "Cough or cold symptoms",
        subtitle: "Get care instructions for COVID, colds or flu",
        imagePath: "cough.png",
        href: "/home",
    },
]