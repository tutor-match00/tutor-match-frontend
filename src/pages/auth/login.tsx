import axios from "axios";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPropType } from "./login.type";

export function Login(prop: LoginPropType): JSX.Element {
    const baseURL = "https://127.0.0.1:5000";
    const tuteeLoginEndpoint = baseURL + "/tutee/login/";
    const tutorLoginEndpoint = baseURL + "/tutor/login/";

    const navigate = useNavigate();

    const [isTutor, setIsTutor] = useState<boolean>(true);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function isTutorClicked(): void {
        setIsTutor(!isTutor);
    }

    function submitCredentials(e: React.FormEvent): void {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        let postURL = "";
        if (isTutor) {
            postURL = tutorLoginEndpoint;
        } else {
            postURL = tuteeLoginEndpoint;
        }

        const data = {
            email: email,
            password: password,
        };

        // axios
        //     .post(postURL, data, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             "Access-Control-Allow-Origin": "*",
        //             "Access-Control-Allow-Headers": "*",
        //             "Access-Control-Allow-Methods": "*",
        //         },
        //     })
        //     .then((res) => {
        //         if (prop.setUser !== undefined) {
        //             prop.setUser(res.data.msg);
        //             navigate(isTutor ? "/tutor-dashboard" : "/tutee-dashboard");
        //         }
        //     })
        //     .catch((err) => console.log(err));

        if (email == "kofi@brempong.com" && password == "1223") {
            if (prop.setUser !== undefined) {
                prop.setUser(1);
                navigate(isTutor ? "/tutor-dashboard" : "/tutee-dashboard");
            }
        }
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
                            <a href="/signup" className="nav-link">
                                Sign Up
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link">
                                Login
                            </a>
                        </li>
                    </ul>
                </header>
            </div>

            <main>
                <h1 className="mb-3">Sign In</h1>
                <form onSubmit={(e) => submitCredentials(e)}>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            ref={emailRef}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
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
                    <button type="submit" className="btn btn-primary">
                        Sign In
                    </button>
                </form>
            </main>
        </>
    );
}
