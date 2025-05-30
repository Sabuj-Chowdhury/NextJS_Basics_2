// data fetch by id
export const singlePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).id;

  // fetch data
  const postSingle = await singlePost(id);

  return {
    title: postSingle.title,
    description: postSingle.body,
  };
}

const SinglePost = async ({ params }) => {
  const p = await params;
  //   console.log(p.id);
  const post = await singlePost(p.id);
  //   console.log(post);
  return (
    <div className="text-center text-2xl p-5 border border-yellow-300">
      <p>userID: {post.userId}</p>
      <p>id : {post.id}</p>
      <p>Title : {post.title}</p>
      <p>body : {post.body}</p>
    </div>
  );
};

export default SinglePost;
