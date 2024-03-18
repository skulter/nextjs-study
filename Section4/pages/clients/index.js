import Link from "next/link";
import React from "react";

const index = () => {
    const clients = [
        {
            id: "jinho",
            name: "kimjinho",
        },
        {
            id: "jinho2",
            name: "kimjinho2",
        },
        {
            id: "jinho3",
            name: "kimjinho3",
        },
    ];
    return (
        <div>
            <h1>Client id Page</h1>
            <ul>
                {clients.map((client) => {
                    return (
                        <li key={client.id}>
                            <Link
                                href={{
                                    pathname: "/clients/[id]",
                                    query: { id: client.id },
                                }}
                            >
                                {client.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default index;
