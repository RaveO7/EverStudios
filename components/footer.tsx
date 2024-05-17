import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className='flex w-full h-full justify-center bg-[#121212]'>
            <ul className='flex flex-wrap items-center w-[80%] gap-2 py-1'>
                {siteConfig.footerLinks.map((item) => (
                    item.href == "" ?
                        <li key={item.label} className="h-full flex items-center">
                            <p className='opacity-70 text-[10px]'>
                                {item.label}
                            </p>
                        </li>
                        :
                        <li key={item.label} className="flex">
                            <p className="before:content-['\b7'] before:mr-2 before:rotate-[270deg] h-full flex items-center">
                                <Link href={item.href} className="opacity-70 text-[10px] hover:underline hover:opacity-100 hover:cursor-pointer">
                                    {item.label}
                                </Link>
                            </p>
                        </li>
                ))}
            </ul>
        </footer>
    )
}