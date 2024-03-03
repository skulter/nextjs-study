export default function BlogPostPage(props) {
  console.log(props);
  return (
    <main>
      <h1> Blog Post </h1>
      <p>{props.params.id}</p>
    </main>
  );
}
