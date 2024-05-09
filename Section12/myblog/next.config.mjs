const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = () => {
    if (PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "skulter",
                mongodb_password: "OX6fJpbikV9LZ6xO@cluster0",
                mongodb_clustername: "Cluster0",
                mongodb_database: "ya84vqh",
            },
        };
    }

    return {
        env: {
            mongodb_username: "skulter",
            mongodb_password: "OX6fJpbikV9LZ6xO@cluster0",
            mongodb_clustername: "Cluster0",
            mongodb_database: "ya84vqh",
        },
    };
};

export default nextConfig;
