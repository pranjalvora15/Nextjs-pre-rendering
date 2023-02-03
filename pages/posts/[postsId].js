export default function Post({ post }) {
  return (
    <>
      <h2>{post.id}</h2>
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => ({
    params: {
      postsId: `${post.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  // console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postsId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
    revalidate:10 // after every 10 seconds next.js will revalidate this page every 10 seconds
    // so that page does not show stale data without re-building entire appf
  };
}
