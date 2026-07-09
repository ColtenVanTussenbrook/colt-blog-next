import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['800'] });

const Heading = ({ children }: { children: string }) => (
  <div className="relative flex flex-col mb-4">
    <h1 className={`${dmSans.className} text-4xl text-copper`}>{children}</h1>
    <div className="mt-3 h-[3px] w-16 bg-copper rounded-full" />
  </div>
);

export default Heading;
