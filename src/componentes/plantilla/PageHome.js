import React from 'react';
import Header from './page-header';
import Sidebar from './sidebar-wapper';
import Details from './detallesfacturacion';

const PageHome = () => {
    return (
        <React.StrictMode>
            <div className="page-wrapper">
                <Header></Header>
                <Sidebar></Sidebar>
                <Details></Details>
            </div>
        </React.StrictMode>
    );
}
export default PageHome;