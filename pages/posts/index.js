import Link from "next/link";
export default function PostList({ posts }) {
  //   console.log(posts);
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((item) => (
        <div key={item.id}>
          <Link href={`posts/${item.id}`}>
            <h2>
              {item.id} {item.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data
    },
  };
}
