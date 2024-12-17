import { formatarDataEmPortugues } from "@/lib/utils";
import { PostProps } from "@/types/notionTypes";
import Image from "next/image";
import Link from "next/link";


export default function PostList({ cover, title, data, description, slug }: PostProps){
    const dataFormatada = formatarDataEmPortugues(data)
    return (
        <Link href={`/blog/${slug}`} className="group flex flex-col w-[600px] mb-12">
            <Image 
                className="width-full h-[220px] object-cover rounded-xl group-hover:grayscale group-hover:object-none transition-all duration-300" 
                src={cover} 
                alt="Imagem de capa do post" 
                width={600} 
                height={220} 
                loading="lazy"
            />
            <h2 className="text-xl font-semibold italic mt-4 m-auto"> {title} </h2>
            <div className="w-[37px] border m-auto border-dashed border-[#d5d5d6]/70 mt-1.5"></div>
            <p className="text-center font-light italic mt-1.5 text-[11px]"> {dataFormatada} </p>
            <p className="text-base mt-6 m-2 mb-0">{description}</p>
            <div className="h-[1px] w-[500px] self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-300 mx-auto my-12" />
        
        </Link>
    );
}