import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Click Me
      </a>
    )
  })

const Home = (props) =>{
    return(
        <React.Fragment>
            <div>
                <Link href="/page" passHref replace>
                    <MyButton/>
                </Link>
                <Image src="/chilli.png" alt="image" width={50} height={50}/>
            </div>
        </React.Fragment>
    )
}

export default Home;