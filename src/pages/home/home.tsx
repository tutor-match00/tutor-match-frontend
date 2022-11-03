import React from "react";

export function Home() {
    return (
        <>
            <header>
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
                                <a
                                    href="/problem-form.html"
                                    className="nav-link">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </header>
                </div>
            </header>

            <main>
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">
                        Connecting Tutees to Tutors
                    </h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-6">
                            Tutor Match is an online question-and-answer portal
                            where students are matched with other students.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg px-4 gap-3">
                                Join as Tutee
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary btn-lg px-4">
                                Become a Tutor
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
