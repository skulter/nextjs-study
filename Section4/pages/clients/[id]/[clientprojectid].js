import { useRouter } from "next/router";
import React from "react";

const ClientProjectsPage = () => {
    const {
        query: { clientprojectid, id },
    } = useRouter();
    console.log(clientprojectid);
    return (
        <div>
            <h1>ClientProjectsPage</h1>
            <h2>
                {id} {clientprojectid}
            </h2>
        </div>
    );
};

export default ClientProjectsPage;
