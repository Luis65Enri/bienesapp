import React from "react";
import Footer from "../plantilla/footer";
import Header from "../plantilla/header";
import Script from "../plantilla/script";
import Sidebar from "../plantilla/sidebar";
import Wrapper from "../plantilla/wrapper";

const Principal = () => {
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