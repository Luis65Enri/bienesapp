import React from "react"
import sidebar from "./sidebar"
import header from "./header"
import script from "./script"
import footer from "./footer"
import wrapper from "./wrapper"

function principal(){
    return (
        <React.StrictMode>
            <div className="wrapper">
                <sidebar></sidebar>
                <header></header>
                <script></script>
                <footer></footer>
                <wrapper></wrapper>
            </div>
        </React.StrictMode>
    )
}

export default principal 