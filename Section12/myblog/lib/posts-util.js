import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
}

export function postFilesNameRemoveExtension(postIdentifier) {
    return postIdentifier.replace(/\.md$/, "");
}

export function getPostData(postIdentifier) {
    const postSlug = postFilesNameRemoveExtension(postIdentifier); // remove the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();
    const allPosts = postFiles.map(getPostData);
    const sortedPosts = allPosts.sort((postA, postB) =>
        postA.date > postB.date ? -1 : 1
    );
    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);
    return featuredPosts;
}
