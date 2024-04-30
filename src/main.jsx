import React from "react";
import ReactDOM from "react-dom/client";
import { ApplicationViews } from "./views/ApplicationViews";


const root = ReactDOM.createRoot(document.getElementById('root')
)

root.render(
    <React.StrictMode>
        <ApplicationViews />
    </React.StrictMode>
);