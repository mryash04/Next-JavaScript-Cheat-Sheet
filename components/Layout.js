import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Layout = () =>{
    return(
        <React.Fragment>
            <div>
                <Head>
                    <title>Next App</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                </Head>
                <Navbar/>
            </div>
        </React.Fragment>
    )
}

export default Layout;