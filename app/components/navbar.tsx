'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkWrapper = ({ children }: { children: JSX.Element }) => {
  const pathname = usePathname();
  const link = children.props.href ? children.props.href : '';
  const isActive = link === pathname;
  return (
    <li
      className={`mr-6 text-xl uppercase tracking-wide transition-colors ${
        isActive ? 'text-copper' : 'text-bone hover:text-copper'
      }`}
    >
      {children}
    </li>
  );
};

const Navbar = () => (
  <nav className="relative mb-2">
    <ul className="inline-flex no-underline [&_a]:no-underline">
      <LinkWrapper>
        <Link href="/">Home</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/about">About</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link href="/blog">Blog</Link>
      </LinkWrapper>
    </ul>
    <div className="mt-3 h-[3px] w-full bg-copper rounded-full" />
  </nav>
);

export default Navbar;
