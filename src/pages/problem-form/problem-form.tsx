import React, { useRef } from "react";
import axios from "axios";

export function ProblemForm(prop: { user: number | undefined }): JSX.Element {
    const tutee_id = prop.user;
    const baseURL = "http://127.0.0.1:5000";
    const problemsEndpoint = baseURL + "/problems/";
    const courseRef = useRef<HTMLInputElement>(null);
    const topicRef = useRef<HTMLInputElement>(null);
    const problemDescriptionRef = useRef<HTMLTextAreaElement>(null);

    function submitProblem(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const course = courseRef.current?.value;
        const topic = topicRef.current?.value;
        const problemDescription = problemDescriptionRef.current?.value;
        axios
            .post(
                problemsEndpoint,
                {
                    course_tag: course,
                    title: topic,
                    description: problemDescription,
                    tutee_id: tutee_id,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Allow-Methods": "*",
                    },
                }
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <form
                className="needs-validation"
                onSubmit={(e) => submitProblem(e)}>
                <div className="mb-3">
                    <label htmlFor="courseName" className="form-label">
                        Course*
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="courseName"
                        aria-describedby="courseName"
                        required
                        ref={courseRef}
                    />
                    <div id="courseHelp" className="form-text">
                        Enter the main course eg. Mathematics{" "}
                    </div>
                    <div className="invalid-feedback">
                        This field is required.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">
                        Title*
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="topic"
                        required
                        ref={topicRef}
                    />
                    <div id="topic" className="form-text">
                        Enter topic eg. Matrices{" "}
                    </div>
                    <div className="invalid-feedback">
                        This field is required.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="moreDescription" className="form-label">
                        More Description (optional)
                    </label>
                    <textarea
                        className="form-control"
                        name="moreDescription"
                        id="moreDescription"
                        rows={3}
                        ref={problemDescriptionRef}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
