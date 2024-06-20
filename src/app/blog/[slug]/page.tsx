import styles from './blogDetail.module.css';


const fetchBlog = async (slug) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog');
    }
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

const page = async ({ params }) => {
  const { slug } = params;
  console.log(params.slug, 'kj');
  
    const blog = await fetchBlog(slug);
    console.log(slug, blog);
    return (
      <div className={styles.blogContainer}>
         <div className={styles.title}>{blog.title}</div>
      </div>
    );
}

export default page;
