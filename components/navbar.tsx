import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { Logo } from "./logo";


export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="z-10 sm:py-3 py-10  bg-[#121212] opacity-[.98]">

			<NavbarContent className="basis-1/5 sm:basis-full hidden sm:flex" justify="start">
				<ul className="hidden sm:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarBrand as="li" className="max-w-fit">
					<Link className="flex justify-start items-center" href="/">
						<Logo />
					</Link>
				</NavbarBrand>
			</NavbarContent>


			<NavbarContent
				className="flex flex-col sm:hidden basis-full h-auto w-full"
				justify="center"
			>
				<NavbarBrand as="li" className="max-w-fit">
					<Link className="flex justify-start items-center w-full h-full" href="/">
						<Logo />
					</Link>
				</NavbarBrand>

				<ul className="flex gap-4 justify-center w-full">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>


		</NextUINavbar>
	);
};
