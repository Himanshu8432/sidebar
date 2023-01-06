import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidemenu from './Sidemenu'
function Layout(props) {
    return (
        <div><div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Header></Header>
        </div>
            <div style={{ display: "flex", flexDirection: "row", flex: 1, height: "100vh" }}><Sidemenu ></Sidemenu>
                {props.children}</div>
            <div><Footer></Footer></div>
        </div>
    )
}

export default Layout