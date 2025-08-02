import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return {
      ...data,
      content,
      slug: filename.replace(/\.md$/, ''),
    };
  });
  return { props: { posts } };
}

export default function Blog({ posts }: { posts: any[] }) {
  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">All Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.slug} className="mb-10 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date} | {post.category}</p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}

