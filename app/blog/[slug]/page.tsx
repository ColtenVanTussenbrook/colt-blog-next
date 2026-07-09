import Heading from '@/app/components/heading';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import backArrow from '../../../public/icons/back-arrow.svg';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = getMDXComponent(post?.body.code);

  return (
    <div>
      <Heading>{post.title}</Heading>
      <MDXContent />
      <Link href="/blog" className="flex items-center mt-8 no-underline group">
        <Image
          src={backArrow}
          alt="back arrow icon"
          width={28}
          className="pr-2 opacity-70 transition-opacity group-hover:opacity-100"
          style={{ filter: 'invert(46%) sepia(60%) saturate(1000%) hue-rotate(345deg) brightness(95%)' }}
        />
        <p className="text-copper underline group-hover:brightness-125 transition-[filter]">Back to blog</p>
      </Link>
    </div>
  );
}
