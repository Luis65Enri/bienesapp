import React from 'react';
import Header from './page-header';
import Sidebar from './sidebar-wapper';

const PageHome = () => {
    return (
        <React.StrictMode>
            <div className="page-wrapper">
                <Header></Header>
                <Sidebar></Sidebar>
            </div>
        </React.StrictMode>
    );
}
export default PageHome;