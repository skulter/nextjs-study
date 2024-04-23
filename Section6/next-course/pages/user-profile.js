const UserProfilePage = (props) => {
    return <div>{props.userName}</div>;
};

export async function getServerSideProps(context) {
    const { params, req, res } = context;

    console.log("Server side code", req);
    return {
        props: {
            userName: "진호25",
        },
    };
}

export default UserProfilePage;
