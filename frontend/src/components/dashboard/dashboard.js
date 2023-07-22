import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Dashboard(){
    return(
        <>
        <title>Dashboard</title>
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
        </HelmetProvider>
        </>
    );
}