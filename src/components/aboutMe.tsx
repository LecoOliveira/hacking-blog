import Image from 'next/image';
// eslint-disable-next-line max-len
import profilePicture from '../../public/profilePicture/IMG_20221210_151515_627.jpg';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <Link
      href={'/about'}
      className="hidden sm:flex flex-col justify-center 
      items-center cursor-pointer"
    >
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto lg:mb-0"
      />
      <h2 className="mt-3 text-sm lg:text-base font-semibold italic">
        SOBRE MIM
      </h2>
      <div
        className="h-[1px] w-full self-stretch 
        bg-gradient-to-tr from-transparent via-white to-transparent 
        opacity-25 mx-auto mt-2 lg:mb-0"
      />
      <Image
        className="w-[100px] lg:w-[150px] rounded-full mt-4"
        src={profilePicture}
        alt="Foto de perfil"
      />
      <p
        className="tracking-tight font-extralight mt-4 text-sm 
        lg:text-base text-center w-11/12"
      >
        Hacker, desenvolvedor e curioso por natureza. Se a gente não sabe, a
        gente aprende!
      </p>
    </Link>
  );
}
