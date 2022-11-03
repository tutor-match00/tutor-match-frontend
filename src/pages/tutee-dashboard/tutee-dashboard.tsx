import React, { useState, useEffect } from "react";
import axios from "axios";
import { TuteeProblemType } from "./tutee-dashboard.type";

export function TuteeDashboard(): JSX.Element {
    const tutee_id = 1;

    const baseURL = "http://127.0.0.1:5000";
    const problemsEndpoint = baseURL + "/problems/";
    const tuteeDashboardUrlParameter = "?tutee_id=" + tutee_id;

    const [tuteeProblems, setTuteeProblems] = useState<TuteeProblemType>([]);
    const [reloadProblems, setReloadProblems] = useState<boolean>(false);

    useEffect(() => {
        axios
            .get(problemsEndpoint + tuteeDashboardUrlParameter, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Methods": "*",
                },
            })
            .then((res) => setTuteeProblems(res.data.msg))
            .catch((err) => console.log(err));
    }, [reloadProblems]);

    function helpedClicked(problem: any) {
        axios
            .put(
                problemsEndpoint,
                {
                    problem_id: problem.id,
                    status: !problem.status,
                    tutor_id: problem.tutor ? problem.tutor.id : null,
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
            .then(() => setReloadProblems(!reloadProblems))
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
                    <span className="navbar-toggler-icon"></span>
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
                            <h1 className="h2">Student Dashboard</h1>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center align-items-center g-2">
                                {tuteeProblems.map((problem, index) => (
                                    <div className="col" key={index}>
                                        <div
                                            className="card"
                                            style={{ width: "18rem" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {problem.title}
                                                </h5>
                                                <h5 className="card-text">
                                                    Status -
                                                    <span
                                                        style={{
                                                            fontStyle: "italic",
                                                            fontSize: "small",
                                                        }}>
                                                        {problem.status
                                                            ? "Sovled"
                                                            : "Not Yet Solved"}
                                                    </span>
                                                </h5>
                                                <p className="card-text">
                                                    {problem.description}
                                                </p>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    View tutor details
                                                </button>
                                                <div
                                                    className="modal fade"
                                                    id="exampleModal"
                                                    tabIndex={-1}
                                                    aria-labelledby="exampleModalLabel"
                                                    aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1
                                                                    className="modal-title fs-5"
                                                                    id="exampleModalLabel">
                                                                    Tutor
                                                                    details
                                                                </h1>
                                                                <button
                                                                    type="button"
                                                                    className="btn-close"
                                                                    data-bs-dismiss="modal"
                                                                    aria-label="Close"></button>
                                                            </div>
                                                            {problem.tutor ? (
                                                                <div className="modal-body">
                                                                    <h3>
                                                                        {
                                                                            problem
                                                                                .tutor
                                                                                .name
                                                                        }
                                                                    </h3>
                                                                    <p>
                                                                        Whatsapp
                                                                        Number:{" "}
                                                                        <a
                                                                            href={
                                                                                "https://" +
                                                                                problem
                                                                                    .tutor
                                                                                    .whatsapp_number
                                                                            }>
                                                                            {
                                                                                problem
                                                                                    .tutor
                                                                                    .whatsapp_number
                                                                            }
                                                                        </a>
                                                                    </p>
                                                                </div>
                                                            ) : (
                                                                "No tutors available yet"
                                                            )}
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-secondary"
                                                                    data-bs-dismiss="modal">
                                                                    Close
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        checked={problem.status}
                                                        id=""
                                                        onChange={() =>
                                                            helpedClicked(
                                                                problem
                                                            )
                                                        }
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="">
                                                        {" "}
                                                        Helped{" "}
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
