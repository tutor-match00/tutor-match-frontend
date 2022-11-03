import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProblemForm } from "./pages/problem-form/problem-form";
import { TutorDashboard } from "./pages/tutor-dashboard/tutor-dashboard";
import { TuteeDashboard } from "./pages/tutee-dashboard/tutee-dashboard";
import { Home } from "./pages/home/home";
import { Login, Signup } from "./pages/auth";

function App() {
    const [user, setUser] = useState<number | undefined>(1);

    return (
        <>
            <Routes>
                <Route
                    path="/tutee-problem-form"
                    element={<ProblemForm user={user} />}
                />
                <Route
                    path="/tutor-dashboard"
                    element={<TutorDashboard user={user} />}
                />
                <Route
                    path="/tutee-dashboard"
                    element={<TuteeDashboard user={user} />}
                />
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={<Login user={user} setUser={setUser} />}
                />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;
