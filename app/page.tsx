import Cards from "@/components/cards";
import { siteConfig } from "@/config/site";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4">
			<video
				className='aspect-video'
				preload="auto"
				muted
				loop
				playsInline
				autoPlay
			>
				<source src="/videos/homeVideo.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="inline-block w-full bg-[#121212] pb-8 md:py-14 pt-5">
				<div className="w-[80%] m-auto">
					<div className="mb-14">
						<h2 className="text-[40px] text-[#ecedee]">
							<strong>{siteConfig.presentation[0].label.toUpperCase()}</strong>
						</h2>
						<Cards list={siteConfig.listbestseller} />
					</div>
					<div className="mb-14">
						<h2 className="text-[40px] text-[#ecedee]">
							<strong>{siteConfig.presentation[1].label.toUpperCase()}</strong>
						</h2>
						<Cards list={siteConfig.listpokemon} />
					</div>
					<div className="mb-14">
						<h2 className="text-[40px] text-[#ecedee]">
							<strong>{siteConfig.presentation[2].label.toUpperCase()}</strong>
						</h2>
						<Cards list={siteConfig.listghibli} />
					</div>
					<div className="mb-14">
						<h2 className="text-[40px] text-[#ecedee]">
							<strong>{siteConfig.presentation[3].label.toUpperCase()}</strong>
						</h2>
						<Cards list={siteConfig.listother} />
					</div>
				</div>
			</div>
		</section>
	);
}
