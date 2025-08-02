import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Sam Simataa</title>
        <meta name="description" content="Personal website for Sam Simataa: Software Testing & Music Harmony" />
      </Head>
      <header className="bg-white shadow-md border-b border-gray-200">
        <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-8">
          <div className="flex items-center mb-2 md:mb-0">
            <h1 className="text-3xl font-extrabold text-gray-900 text-center md:text-left tracking-tight">Sam Simataa</h1>
          </div>
          <div className="space-x-0 md:space-x-4 flex flex-col md:flex-row items-center">
            <Link href="/testing" className="hover:text-accent text-base md:text-lg mb-2 md:mb-0 text-gray-700 font-medium transition duration-200">Software Testing</Link>
            <Link href="/music" className="hover:text-accent text-base md:text-lg text-gray-700 font-medium transition duration-200">Music & Harmony</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto py-10 px-4 md:px-8 bg-background">
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left text-primary">Welcome!</h2>
          <p className="text-lg md:text-xl text-center md:text-left text-secondary">Explore my journey in software testing and music harmony. Read blog posts, discover resources, and enjoy media content.</p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/testing" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition mb-4 md:mb-0 border border-gray-200 hover:border-accent group">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary group-hover:text-accent">Software Testing</h3>
            <p className="text-base md:text-lg text-secondary">Blog posts, automation POCs, and curated resources for testers.</p>
          </Link>
          <Link href="/music" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-200 hover:border-accent group">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-accent group-hover:text-primary">Music & Harmony</h3>
            <p className="text-base md:text-lg text-secondary">Blog posts, harmonic recordings, and music resources.</p>
          </Link>
        </div>
      </main>
      <footer className="bg-white border-t mt-12 py-6 text-center text-sm md:text-base text-gray-500">
        Created with passion for software testing, music harmony, and travelling/culture.
      </footer>
    </div>
  );
}
