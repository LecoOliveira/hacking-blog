import Image from 'next/image';
// eslint-disable-next-line max-len
import profilePicture from '../../public/profilePicture/IMG_20221210_151515_627.jpg';

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <Image
        className="w-[150px] rounded-full"
        src={profilePicture}
        alt="Foto de perfil"
      />
      <h2 className="mt-3 font-semibold italic"> SOBRE MIM </h2>
      <div
        className="w-[37px] border border-dashed 
        border-[#d5d5d6]/70 m-auto mt-1.5 mb-4"
      />
      <p className="font-medium tracking-tight text-[13px] text-center">
        Lorem ipsum dolor sit amet consectetur. Fringilla facilisi amet ut
        venenatis at. Pulvinar pretium magna magna aliquet. Odio eu urna
        dignissim at urna adipiscing risus. Sociis felis aliquam placerat sed
        ut. Nibh in metus amet accumsan.
      </p>
    </div>
  );
}
