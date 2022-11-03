import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProblemForm } from "./pages/problem-form/problem-form";
import { TutorDashboard } from "./pages/tutor-dashboard/tutor-dashboard";
import { TuteeDashboard } from "./pages/tutee-dashboard/tutee-dashboard";

function App() {
    return (
        <>
            <Routes>
                <Route path="/tutee-problem-form" element={<ProblemForm />} />
                <Route path="/tutor-dashboard" element={<TutorDashboard />} />
                <Route path="/tutee-dashboard" element={<TuteeDashboard />} />
            </Routes>
        </>
    );
}

export default App;
