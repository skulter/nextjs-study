import { useRouter } from "next/router";
import React from "react";

const AboutIdPage = () => {
    const router = useRouter();
    console.log(router.query.slug);
    return (
        <div>
            {router.query.slug?.map((x) => (
                <h1>{x}</h1>
            ))}
        </div>
    );
};

export default AboutIdPage;
