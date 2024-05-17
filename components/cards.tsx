'use client'
import React, { useEffect, useRef } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import ImageHover from "./imageHover";
import { siteConfig } from "@/config/site";
import { upperFirstLetter } from "./Utils";

interface Props { list: Array<any>, }

export default function Cards(props: Props) {
  const { list } = props;

  return (
    <div className="gap-y-4 gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">



      {/* <div className="
      bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.4)_50%,transparent_75%,transparent_100%)] 
    bg-zinc-950 
      relative
      max-w-md 
      overflow-hidden
      rounded-xl
      border
      border-slate-900
      bg-[length:250%_250%,100%_100%] 
      bg-[position:-100%_0,0_0]
      bg-no-repeat px-8 py-16 shadow-2xl
      transition-[background-position_0s_ease] 
      hover:bg-[position:200%_0,0_0] 
      hover:duration-[1500ms]"
      >
        <span className="mb-4 inline-flex items-center justify-center rounded-md bg-blue-600 p-2 shadow-lg">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          />
        </span>
        <img width={500} src="https://everstudioz.com/cdn/shop/files/CE53D891-9AFD-4852-AEB8-870E61295100.webp?width=533" alt="" />

      </div> */}



      {list.map((item: any, index: number) => (
        <Link href={"/" + item.title.toLowerCase()} key={index} className="z-0 group max-w-[275px]">

          <Card shadow="lg" isPressable className="w-[275px] relative z-0">
            <CardBody className="overflow-visible p-0">

              <ImageHover item={item} />

            </CardBody>
            <CardFooter className="text-small flex flex-col">
              <b>{upperFirstLetter(item.title)}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        </Link>
      ))
      }
    </div >
  );
}
