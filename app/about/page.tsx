import Image from 'next/image';
import Heading from '../components/heading';
import portrait from '../../public/images/me.jpg';

export default function About() {
  return (
    <main className="items-center">
      <Heading>About</Heading>
      <div className="md:flex">
        <div className="flex-1 mr-0 md:mr-8 mb-8 md:mb-0">
          <p>
            Hey, I’m Colten.
          </p>
          <br />
          <p></p>
          <p>
            Though I've spent most of my career as a developer, I've recently started to shift more towards product. I like to code, but I've found I like working with people even more and collaborating with others to create awesome products.
          </p>
          <br />
          <p>
            During my career, I've always prided myself on being a developer who can write good code but also be able to communicate across other teams and use those
            skills to help businesses move forward. I majored in Technical Communication, which has helped me to bridge the gap between technology and business.
          </p>
          <br />
          <p>
            When I’m not coding, I enjoy trail running, fly fishing, snowboarding, backpacking and hanging out with my family - ideally doing all of those things <i>with</i> them.
            If you’d like to reach out, you can contact me at coltenvantussenbrook@gmail.com, or through the social links below.
          </p>
        </div>
        <div>
          <Image
            src={portrait}
            alt="photo of Colten Van Tussenbrook"
            width={300}
            height={300}
            className="rounded-lg shadow-[0_0_30px_-8px_rgba(184,115,51,0.6)]"
          />
        </div>
      </div>
    </main>
  );
}
