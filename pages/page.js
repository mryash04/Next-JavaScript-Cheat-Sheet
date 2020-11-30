import React from "react";
import {useRouter} from "next/router";

const Page = () =>{

    const router = useRouter();

    return(
        <React.Fragment>
            <div>
                <span onClick={() =>
                    router.push('/')}>Click Me.
                    </span>
            </div>
        </React.Fragment>
    )
}

export default Page;