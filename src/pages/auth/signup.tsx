import axios from "axios";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SignupPropType } from "./signup.type";

export function Signup(prop: SignupPropType): JSX.Element {
    const [isTutor, setIsTutor] = useState<boolean>(true);

    const navigate = useNavigate();

    const baseURL = "https://127.0.0.1:5000";
    const tuteeSignupEndpoint = baseURL + "/tutee/signup/";
    const tutorSignupEndpoint = baseURL + "/tutor/signup/";

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const whatsappNumberRed = useRef<HTMLInputElement>(null);
    const courseTagRef = useRef<HTMLInputElement>(null);

    function isTutorClicked(): void {
        setIsTutor(!isTutor);
    }

    function submitData(e: React.FormEvent): void {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const firstName = firstNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const whatsappNumber = whatsappNumberRed.current?.value;
        const courseTag = courseTagRef.current?.value;

        console.log(password);

        let postURL = "";
        if (isTutor) {
            postURL = tutorSignupEndpoint;
        } else {
            postURL = tuteeSignupEndpoint;
        }
        const data = {
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            whatsapp_number: whatsappNumber,
            course_tag: courseTag,
        };

        axios
            .post(postURL, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "*",
                },
            })
            .then((res) => {
                if (prop.setUser !== undefined) {
                    prop.setUser(res.data.msg);
                    navigate(isTutor ? "/tutor-dashboard" : "/tutee-dashboard");
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4">Tutor Match</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a
                                href="#"
                                className="nav-link active"
                                aria-current="page">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Sign Up
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/problem-form.html" className="nav-link">
                                Login
                            </a>
                        </li>
                    </ul>
                </header>
            </div>

            <main>
                <h1 className="mb-3">Sign Up</h1>
                <form onSubmit={submitData}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            aria-describedby="firstName"
                            ref={firstNameRef}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            aria-describedby="lastName"
                            ref={lastNameRef}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="whatsappNumber" className="form-label">
                            WhatsApp Number
                        </label>
                        <input
                            type="phone"
                            className="form-control"
                            id="whatsappNumber"
                            aria-describedby="whatsappNumber"
                            ref={whatsappNumberRed}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="email"
                            ref={emailRef}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            ref={passwordRef}
                            required
                        />
                    </div>
                    <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={isTutor}
                            id=""
                            onChange={isTutorClicked}
                        />{" "}
                        <label className="form-check-label" htmlFor="">
                            {" "}
                            Tutor?{" "}
                        </label>
                    </div>
                    {isTutor ? (
                        <div className="mb-3">
                            <label htmlFor="course-tag" className="form-label">
                                Course Tag
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="course-tag"
                                ref={courseTagRef}
                                required
                            />
                        </div>
                    ) : (
                        ""
                    )}
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </form>
            </main>
        </>
    );
}
