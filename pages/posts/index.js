import React from "react";
import Link from "next/link";
import Home from "../index";
import styles from "../../styles/Index.module.css";
import Layout from "../../components/Layout";

const Index = (props) =>{

    const posts =[
    {
        "product_id" : "123",
        "product_data" : {
            "image_id" : "1234",
            "text" : "foo",
            "link" : "bar",
            "image_url" : "baz"
        }
    },{
        "product_id" : "456",
        "product_data" : {
            "image_id" : "1234",
            "text" : "foo",
            "link" : "bar",
            "image_url" : "baz"
        }
    }
]

    return(
        <React.Fragment>
            <div>
               {posts.map(post =>{
                    return(
                        <React.Fragment>
                        <p className={styles.post}>{post.product_id}</p>
                        <img src="chilli.png" alt="chilli"/>
                        <Home />
                        <Layout/>
                        </React.Fragment>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Index;