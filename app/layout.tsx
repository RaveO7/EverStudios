import "@/styles/globals.css";

import { Metadata, Viewport } from "next";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { BannerPromo } from "@/components/BannerPromo";
import { Footer } from "@/components/footer";

import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: siteConfig.icon,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col min-h-screen ">
						<BannerPromo />
						<Navbar />
						<main>{children}</main>
						<Footer />
					</div>
				</Providers>
				<Analytics />
			</body>
		</html >
	);
}
