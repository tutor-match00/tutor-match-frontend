export type TutorProblemsType = {
    course_tag: string;
    description: string;
    id: Number;
    status: string;
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
