import React from "react";
import Link from "next/link";

const Path = () =>{
    return(
        <React.Fragment>
            <div>
                <ul>
                    <li>
                        <Link href={{pathname: "/home"}}><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href={{pathname: "/head"}}><a>Head</a></Link>
                    </li>
                </ul>
                <style>{`
                ul{
                    display:flex;
                    justify-content:space-around;
                }
                a{
                    font-size:20px;
                }
                li{
                    list-style-type:none;
                }
                `}</style>
            </div>
        </React.Fragment>
    )
}

export default Path;