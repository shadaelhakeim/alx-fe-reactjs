import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    isFetching,
  } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60, // 1 minute
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      {isFetching && <div>Updating...</div>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
