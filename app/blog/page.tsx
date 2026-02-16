import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Traumas & PTSD',
      excerpt: 'Como psiquiatra, he visto de primera mano cómo el trauma puede afectar la vida de las personas, desde la salud mental hasta la física...',
      date: 'January 15, 2024',
      author: 'Dr. Smith',
      slug: 'traumas-ptsd'
    },
    {
      title: 'What are the benefits of integrated health and care?',
      excerpt: 'Integrated health and care is a holistic approach to healthcare that combines medical, social, and mental health services...',
      date: 'January 10, 2024',
      author: 'Dr. Johnson',
      slug: 'benefits-integrated-health'
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl">
              Latest insights, tips, and news about mental health and wellness
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-primary-700 mb-4">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get the latest mental health tips, news, and blog updates delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
