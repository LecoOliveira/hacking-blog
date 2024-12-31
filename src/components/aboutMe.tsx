import Image from 'next/image';
// eslint-disable-next-line max-len
import profilePicture from '../../public/profilePicture/IMG_20221210_151515_627.jpg';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <Link
      href={'/about'}
      className="hidden sm:flex flex-col justify-center 
      items-center cursor-pointer hover:opacity-70"
    >
      <Image
        className="w-[100px] lg:w-[150px] rounded-full"
        src={profilePicture}
        alt="Foto de perfil"
      />
      <h2 className="mt-3 text-sm lg:text-base font-semibold italic">
        SOBRE MIM
      </h2>
      <p
        className="tracking-tight font-extralight text-[10px] lg:text-[13px] 
        text-center w-11/12"
      >
        Hacker, desenvolvedor e curioso por natureza. Se a gente não sabe, a
        gente aprende!
      </p>
    </Link>
  );
}
