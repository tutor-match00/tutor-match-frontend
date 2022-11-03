import axios from "axios";
import React, { useEffect, useState } from "react";
import { TutorProblemsType } from "./tutor-dashboard.type";

export function TutorDashboard(prop: {
    user: number | undefined;
}): JSX.Element {
    const tutor_id = prop.user;

    const baseURL = "http://127.0.0.1:5000";
    const problemsEndpoint = baseURL + "/problems/";
    const tuteeDashboardUrlParameter = "?tutor_id=1";
    const [tutorProblems, setTutorProblems] = useState<TutorProblemsType>([]);
    const [reloadProblems, setReloadProblems] = useState<boolean>(false);

    useEffect(() => {
        axios
            .get(problemsEndpoint + tuteeDashboardUrlParameter, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://127.0.0.1:5000",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "*",
                },
            })
            .then((res) => {
                setTutorProblems(res.data.msg);
            })
            .catch((err) => console.log(err));
    }, [reloadProblems]);

    function helpClicked(problem: any) {
        console.log(problem);
        axios
            .put(
                problemsEndpoint,
                {
                    problem_id: problem.id,
                    tutor_id: problem.tutor?.id === tutor_id ? null : tutor_id,
                    status: problem.status,
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
            .then(() => {
                setReloadProblems(!reloadProblems);
            })
            .catch((err) => console.log(err));
    }
    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a
                    className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
                    href="#">
                    Tutor Match
                </a>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">{"(+)"}</span>
                </button>
                <input
                    className="form-control form-control-dark w-100 rounded-0 border-0"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="#">
                            Sign out
                        </a>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav
                        id="sidebarMenu"
                        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3 sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#">
                                        <span
                                            data-feather="home"
                                            className="align-text-bottom"></span>
                                        Dashboard
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Tutor Dashboard</h1>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center align-items-center g-2">
                                {tutorProblems.map((problem, index) => (
                                    <div className="col" key={index}>
                                        <div
                                            className="card"
                                            style={{ width: "18rem" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {problem["course_tag"]}
                                                </h5>
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    {problem["title"]}
                                                </h6>
                                                <h6 className="card-subtitle mb-2 text-muted">
                                                    Whatsapp Number:{" "}
                                                    <a
                                                        href={
                                                            "https://" +
                                                            problem.tutee
                                                                ?.whatsapp_number
                                                        }>
                                                        {
                                                            problem.tutee
                                                                ?.whatsapp_number
                                                        }
                                                    </a>
                                                </h6>
                                                <p className="card-text">
                                                    {problem["description"]}
                                                </p>

                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        checked={
                                                            problem.tutor
                                                                ?.id ===
                                                            tutor_id
                                                                ? true
                                                                : false
                                                        }
                                                        id=""
                                                        onChange={() =>
                                                            helpClicked(problem)
                                                        }
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="">
                                                        {" "}
                                                        Help{" "}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
