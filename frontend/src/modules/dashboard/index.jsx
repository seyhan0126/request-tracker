import React from "react";
import Dashboard from './containerDashboard';

const Renderer = React.memo(() => {
    return (
        <Dashboard />
    )
});

export default Renderer;