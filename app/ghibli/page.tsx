import Cards from "@/components/cards";
import { siteConfig } from "@/config/site";

export default function Ghibli() {
	return (
		<section className="w-full">
			<div className="inline-block w-full bg-[#121212] pb-8 py-8 md:py-20  pt-5">
				<div className="w-[80%] m-auto">
					<h2 className="text-[40px] text-[#ecedee]"><strong>{siteConfig.navItems[3].label.toUpperCase()}</strong></h2>
					<div className="mb-14">
						<Cards list={siteConfig.listghibli} />
					</div>
				</div>
			</div>
		</section>
	);
}
