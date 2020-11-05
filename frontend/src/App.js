import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import api from "./services/api";
import "./App.css";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get("/projects").then((res) => {
            setProjects(res.data);
        });
    }, []);

    async function handleAddProject() {

        const response = await api.post("projects", {
            title: `New project ${Date.now()}`,
            owner: "Oswaldo",
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects">
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>{project.title}</li>
                    ))}
                </ul>
            </Header>
            <button onClick={handleAddProject}>Add projects</button>
        </>
    );
}

export default App;
