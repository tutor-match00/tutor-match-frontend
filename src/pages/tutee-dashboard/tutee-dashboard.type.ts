export type TuteeProblemType = {
    course_tag: string;
    description: string;
    id: Number;
    status: boolean;
    title: string;
    tutee: {
        id: Number;
        name: string;
        whatsapp_number: string;
    };
    tutor: {
        id: Number;
        name: string;
        whatsapp_number: string;
    };
}[];
