import Head from "next/head";
import PostContent from "@/components/posts/post-detail/post-content";
import {
    getPostData,
    getPostsFiles,
    postFilesNameRemoveExtension,
} from "@/lib/posts-util";

const PostDetailPage = ({ post }) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <PostContent post={post} />
        </>
    );
};

export default PostDetailPage;

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
}

export function getStaticPaths(context) {
    const postFiles = getPostsFiles();
    const slugs = postFiles.map(postFilesNameRemoveExtension);
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}
