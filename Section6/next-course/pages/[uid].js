function UserProfilePage({ id }) {
    return <h1>{id} </h1>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
    const { params } = context;
    const userId = params.uid;

    console.log("getServerSideProps", params);
    return {
        props: {
            id: userId,
        },
    };
}
