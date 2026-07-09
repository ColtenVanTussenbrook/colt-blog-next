import Heading from '../components/heading';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
  return (
    <main>
      <Heading>Blog</Heading>
      <div>
        {posts.map((post) => (
          <div key={post._raw.flattenedPath} className="mb-8 border-l-2 border-copper/30 pl-4 transition-colors hover:border-copper">
            <Link href={`/blog/${post._raw.flattenedPath}`} className="no-underline">
              <h2 className="text-2xl text-bone hover:text-copper transition-colors">{post.title}</h2>
              <p className="text-bone-muted">{format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
