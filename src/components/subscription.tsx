'use client';

import Image from 'next/image';
import instagram from '../../public/instagram.svg';
import whatsapp from '../../public/whatsapp.svg';
import github from '../../public/github.svg';
import linkedin from '../../public/linkedin.svg';
import email from '../../public/email.svg';
import Link from 'next/link';
// import mail from '../../public/mail.svg';
// import React, { useState } from 'react';
import NewsletterForm from './newsletterForm';

export default function Subscription() {
  // const [valor, setValor] = useState('');

  // const handleSubmit = () => {
  //   console.log(valor);
  //   window.open(
  //     'https://buttondown.com/api/emails/embed-subscribe/AlexRocha',
  //     'popupwindow',
  //   );
  // };

  return (
    <div className="mt-32 text-center">
      <h2 className="font-semibold italic tracking-tight">
        SIGMA-ME & SUBSCREVA
      </h2>
      <div
        className="w-[37px] border m-auto border-dashed 
        border-[#d5d5d6]/70 mt-2.5 mb-4"
      />
      <div
        className="flex flex-row gap-3 items-center 
        place-content-center mt-8"
      >
        <Link href={''}>
          <Image
            className="w-6 h-6 opacity-80 hover:opacity-100"
            src={instagram}
            alt="Logotipo do instagram"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
            src={linkedin}
            alt="Logotipo do linkedin"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-6 h-6 opacity-80 hover:opacity-100"
            src={github}
            alt="Logotipo do github"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-6 h-6 opacity-80 hover:opacity-100"
            src={whatsapp}
            alt="Logotipo do whatsapp"
          />
        </Link>
        <Link href={''}>
          <Image
            className="w-6 h-6 opacity-80 hover:opacity-100"
            src={email}
            alt="Logotipo do email"
          />
        </Link>
      </div>
      <h3 className="tracking-tight mt-6 font-medium text-xs w-[200px] m-auto">
        Cadastre-se para receber os últimos posts
      </h3>
      {/* <form
        action={'https://buttondown.com/api/emails/embed-subscribe/AlexRocha'}
        method="post"
        target="popupwindow"
        className="embeddable-buttondown-form mt-8 flex 
        flex-row gap-2 relative z-0"
        onSubmit={handleSubmit}
      >
        <Image className="w-10" src={mail} alt="" />
        <div>
          <input
            onChange={(e) => setValor(e.target.value)}
            value={valor}
            id="bd-email"
            className="block bg-transparent border-b-2 appearance-none 
            focus:outline-none text-sm"
            type="email"
            placeholder="Seu melhor Email"
            required
          />
        </div>
        <input
          type="submit"
          value={'Cadastrar'}
          className="absolute left-1/2 -translate-x-1/2 
          translate-y-11 l w-[120px] text-[12px] px-4 py-1 
          border bg-[#d5d5d6] text-[#0e1018] rounded-lg
          hover:bg-white font-semibold active:opacity-65"
        ></input>
      </form> */}
      <NewsletterForm />
    </div>
  );
}
