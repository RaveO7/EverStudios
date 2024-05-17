import React from "react";
import Image from "next/image";

interface Props { item: any, }
interface Item {
    img: string;
    img2: string;
    title: string;
}
export default function ImageHover(props: Props) {
    let { item } = props;
    const items: Item = item
    const img: string = items.img;
    const img2: string = items.img2;
    const title: string = items.title;

    return (
        <div className="relative w-[275px] h-[275px]
                        bg-[linear-gradient(90deg,transparent_25%,rgba(255,255,255,.5)_50%,transparent_75%,transparent_100%)]
                        bg-zinc-950 overflow-hidden 
                        rounded-xl border border-slate-900 
                        bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0]
                        bg-no-repeat px-8 py-16 shadow-2xl 
                        transition-[background-position_0s_ease] 
                        hover:bg-[position:200%_0,0_0] 
                        hover:duration-[1500ms]
                        animate-tilt-shaking hover:animate-none 
                        delay-500">
            {/* https://www.ibelick.com/blog/create-shine-effect-on-card-with-tailwind-css */}
            <Image
                src={img}
                alt={title}
                width={275}
                height={275}
                className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out transform group-hover:scale-110 group-hover:opacity-0"
            />
            <Image
                src={img2}
                alt={title}
                width={275}
                height={275}
                className="
                absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out transform scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-100"/>
        </div>
    );
};