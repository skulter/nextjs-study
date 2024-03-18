import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
    const router = useRouter();
    const handleClick = () => {
        // router.push("/clients/max/projecta");
        router.push({
            pathname: "/clients/[id]/[clientprojectid]",
            query: { id: "max", clientprojectid: "test" },
        });
    };
    return (
        <div>
            <h1>Client id Page</h1>
            <h2>{router.query.id}</h2>
            <button onClick={handleClick}>네이게이팅</button>
        </div>
    );
};

export default index;
