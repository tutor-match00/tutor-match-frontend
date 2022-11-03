export type TuteeProblemType = {
    course_tag: string;
    description: string;
    id_problem: Number;
    status: string;
    title: string;
    tutee: {
        id: Number;
        name: string;
        programme: string;
        year: string;
        whatsapp_number: string;
    };
    tutor: {
        id: Number;
        name: string;
        programme: string;
        year: string;
        whatsapp_number: string;
    };
}[];
