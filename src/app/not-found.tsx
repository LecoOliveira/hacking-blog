import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-11/12 lg:w-[580px] mx-auto mt-48 text-center">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-5xl">Página não encontrada</h2>
      <p>Não foi possível encontrar o recurso solicitado</p>
      <Link
        href="/"
        className="relative top-12 font-medium after:duration-500 ease-out 
          after:block after:h-0.5 after:w-full after:origin-bottom-right 
          after:scale-x-0 after:bg-blue-500 after:transition-transform 
          after:hover:origin-bottom-left after:hover:scale-x-100 inline-block"
      >
        Retornar á página inicial
      </Link>
    </div>
  );
}
