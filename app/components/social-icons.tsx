import Image from 'next/image';
import github from '../../public/icons/github-icon.svg';
import x from '../../public/icons/x-icon.svg';
import linkedIn from '../../public/icons/linkedin-icon.png';

const iconLinkClasses =
  'flex h-10 w-10 items-center justify-center rounded-full border border-copper/50 bg-ink-light transition-colors hover:bg-copper [&_img]:transition-transform [&_img]:hover:scale-110';

const SocialIcons = () => (
  <div className="flex gap-4">
    <a href="https://github.com/ColtenVanTussenbrook" target="_blank" className={iconLinkClasses}>
      <Image src={github} alt="github icon" width={20} height={20} />
    </a>
    <a href="https://twitter.com/coltvant" target="_blank" className={iconLinkClasses}>
      <Image src={x} alt="X twitter icon" width={18} height={18} />
    </a>
    <a href="https://www.linkedin.com/in/coltenvantussenbrook/" target="_blank" className={iconLinkClasses}>
      <Image src={linkedIn} alt="LinkedIn icon" width={20} height={20} />
    </a>
  </div>
);

export default SocialIcons;
