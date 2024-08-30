import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Extract the id from the URL

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      {/* Here you can fetch and display the content based on the id */}
    </div>
  );
};

export default BlogPost;
