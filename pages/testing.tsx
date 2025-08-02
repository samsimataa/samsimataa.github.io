import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Link from 'next/link';

type Post = {
  title: string;
  date: string;
  category: string;
  content: string;
  slug: string;
};

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const matterResult = matter(fileContent);
    const data = matterResult.data as Record<string, any>;
    return {
      title: typeof data.title === 'string' ? data.title : '',
      date: typeof data.date === 'string' ? data.date : '',
      category: typeof data.category === 'string' ? data.category : '',
      content: matterResult.content,
      slug: filename.replace(/\.md$/, ''),
    };
  });
  // Filter for testing category
  const testingPosts = posts.filter((post: Post) => post.category === 'testing');
  return { props: { testingPosts } };
}

export default function Testing({ testingPosts }: { testingPosts: Post[] }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Software Testing | Sam Simataa</title>
        <meta name="description" content="Blog posts, automation POCs, and resources for software testing." />
      </Head>
      <header className="bg-gradient-to-r from-primary via-secondary to-accent shadow-lg">
        <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-8">
          <div className="flex items-center mb-2 md:mb-0">
            {/* Logo SVG */}
            <span className="mr-3">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#F67280" />
                <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="20" fontFamily="Arial" dy=".3em">🧪</text>
              </svg>
            </span>
            <h1 className="text-3xl font-extrabold text-white text-center md:text-left tracking-tight drop-shadow-lg">Software Testing</h1>
          </div>
          <Link href="/" className="hover:underline text-base md:text-lg text-white font-medium transition duration-200 hover:text-accent">Home</Link>
        </nav>
      </header>
      <main className="container mx-auto py-10 px-4 md:px-8">
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary">Blog Posts</h2>
          <p className="mb-6 text-base md:text-lg text-secondary">Share your experiences, learnings, and automation testing POCs here.</p>
          {/* Blog post list for testing */}
          {testingPosts.length === 0 ? (
            <p className="text-gray-500">No software testing blog posts yet.</p>
          ) : (
            testingPosts.map((post) => (
              <div key={post.slug} className="mb-10 bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            ))
          )}
        </section>
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-accent">Automation POCs & Repos</h2>
          <p className="mb-6 text-base md:text-lg text-secondary">Share links to your GitHub repositories and proof of concepts.</p>
          {/* Repo/resource links will go here */}
        </section>
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-highlight">Curated Resources</h2>
          <p className="mb-6 text-base md:text-lg text-secondary">Useful links and resources for testers.</p>
          {/* Resource links will go here */}
        </section>
      </main>
    </div>
  );
}
