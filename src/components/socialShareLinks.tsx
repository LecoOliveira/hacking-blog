import Link from 'next/link';
import SvgFacebookComponent from './svgFacebook';
import SvgWhatsappComponent from './svgWhatsapp';
import SvgTweeterComponent from './svgTweeter';
import SvgLinkedinComponent from './svgLinkedin';

export default function ShareLink({ slug }: { slug: string }) {
  return (
    <div className="flex flex-row gap-2 px-6 bg-[--background] rounded-lg">
      <Link
        title="Compartilhar no Facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=https://hackingblog.online/blog/${slug}`}
        target="_blank"
        className=""
      >
        <SvgFacebookComponent
          className="fill-[--foreground] hover:fill-blue-500 transition-all 
              duration-300 opacity-65 hover:opacity-100 w-4"
        />
      </Link>
      <Link
        title="Compartilhar no Whatsapp"
        href={`https://wa.me/?text=Confira%20este%20post:%20https://hackingblog.online/blog/${slug}`}
        target="_blank"
        className=""
      >
        <SvgWhatsappComponent
          className="fill-[--foreground] hover:fill-blue-500 transition-all 
              duration-300 opacity-65 hover:opacity-100 w-4"
        />
      </Link>
      <Link
        title="Compartilhar no Twitter"
        href={`https://twitter.com/intent/tweet?url=https://hackingblog.online/blog/${slug}`}
        target="_blank"
        className=""
      >
        <SvgTweeterComponent
          className="fill-[--foreground] hover:fill-blue-500 transition-all 
              duration-300 opacity-65 hover:opacity-100 w-4"
        />
      </Link>
      <Link
        title="Compartilhar no Linkedin"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://hackingblog.online/blog/${slug}`}
        target="_blank"
        className=""
      >
        <SvgLinkedinComponent
          className="fill-[--foreground] hover:fill-blue-500 transition-all 
              duration-300 opacity-65 hover:opacity-100 w-4"
        />
      </Link>
    </div>
  );
}
