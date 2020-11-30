import React from "react";
import {useRouter} from "next/router";
import Home from "./index";
import Head from "./head";

const ActiveLink = ({children, href}) =>{
    const router = useRouter()
    const style = {
      marginRight: 10,
      color: router.pathname === href ? 'red' : 'black',
    }
  
    const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
    }
    return(
        <React.Fragment>
            <div>
                <a href={href} onClick={handleClick} style={style}>
                    {children}
                </a>
            </div>
        </React.Fragment>
    )
}

export default ActiveLink;