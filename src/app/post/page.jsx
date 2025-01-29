import Link from "next/link";

// for data fetch
export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
};

const Posts = async () => {
  const data = await getPosts();
  //   console.log(data);
  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((post, idx) => (
        <div key={idx}>
          <div className="p-5">
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <Link href={`/post/${post.id}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
