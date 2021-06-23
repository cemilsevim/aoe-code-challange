import React from "react";
import AppRoutes from "../routes/App";
import Header from "../components/Header";

function App(): JSX.Element {
    return (
        <div className="app-container">
            <Header />
            <div className="app-content">
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;