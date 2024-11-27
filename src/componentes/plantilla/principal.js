import React from "react";
import Sidebar from "../plantilla/sidebar";
import Header from "../plantilla/header";
import Script from "../plantilla/script";
import Footer from "../plantilla/footer";
import Wrapper from "../plantilla/wrapper";

function Principal() {
    return (
    <React.StrictMode>
        <Wrapper>
        <Sidebar />
        <Header />
        <Footer />
        <Script />
        </Wrapper>
    </React.StrictMode>
    );
}

export default Principal;
