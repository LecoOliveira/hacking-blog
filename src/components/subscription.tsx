import Link from 'next/link';
import NewsletterForm from './newsletterForm';
import SvgGithubNewsletter from './svgComponents/svgGithub2';
import SvgLinkedinNewsletter from './svgComponents/svgLinkedin';
import SvgInstagramNewsletter from './svgComponents/svgInstagram2';

export default function Subscription() {
  return (
    <div className="flex flex-col mt-10 sm:mt-16 text-center items-center">
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto lg:mb-0"
      />
      <h2
        className="text-xs lg:text-base font-semibold italic 
        tracking-tight my-3"
      >
        SIGMA-ME & SUBSCREVA
      </h2>
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto lg:mb-0"
      />
      <div
        className="flex flex-row gap-4 items-center 
        place-content-center mt-7"
      >
        <Link href={'https://istagram.com/lecooliveira_'} target="_blank">
          <SvgInstagramNewsletter
            className="w-6 h-6 fill-[--foreground] opacity-80
            hover:fill-blue-500 hover:opacity-100 transition-all duration-300 
            hover:scale-110"
          />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/alex-rocha-23119411b/'}
          target="_blank"
        >
          <SvgLinkedinNewsletter
            className="w-6 h-6 fill-[--foreground] opacity-80
            hover:fill-blue-500 hover:opacity-100 transition-all duration-300
            hover:scale-110"
          />
        </Link>
        <Link href={'https://github.com/LecoOliveira/'} target="_blank">
          <SvgGithubNewsletter
            className="w-6 h-6 fill-[--foreground] opacity-80
            hover:fill-blue-500 hover:opacity-100 transition-all duration-300
            hover:scale-110"
          />
        </Link>
      </div>
      <NewsletterForm />
    </div>
  );
}
