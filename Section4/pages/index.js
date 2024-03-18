import Link from "next/link";
import React from "react";

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link replace href="/portfolio/1">
                        portfolio 1
                    </Link>
                    -
                </li>
                <li>
                    <Link href="/clients/babo/jino">client babo jino</Link>
                </li>
                <li>
                    <Link href="/blog/foo/bar/foo">catch-all foo bar foo</Link>
                </li>
                <li>
                    <Link href="/clients">clients</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;
