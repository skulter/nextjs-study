import Link from "next/link";
import { useSession, signout } from "next-auth/client";
import classes from "./main-navigation.module.css";

function MainNavigation() {
    const [session, loading] = useSession();

    return (
        <header className={classes.header}>
            <Link href="/">
                <div className={classes.logo}>Next Auth</div>
            </Link>
            <nav>
                <ul>
                    {!session && (
                        <li>
                            <Link href="/auth">Login</Link>
                        </li>
                    )}
                    {session && (
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                    )}
                    {session && (
                        <li>
                            <button onClick={signout}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
