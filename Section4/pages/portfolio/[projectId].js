import { useRouter } from "next/router";

const ProjectPage = (props) => {
    const path = useRouter();
    console.log(path);
    return (
        <div>
            <h1>ProjectPage</h1>
            <h2>{path.query.projectId}</h2>
        </div>
    );
};

export default ProjectPage;
