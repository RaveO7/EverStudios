'use client'

import { upperFirstLetter } from "@/components/Utils";
import Carousel from "@/components/carousel";
import Question from "@/components/question";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useState } from "react";
import { MoveRight } from 'lucide-react';

export default function Product({ params, }: {
	params: { product: string; }
}) {
	const [value, setValue] = useState("");

	async function onSubmit(e: any) {
		e.preventDefault();
		try {
			const apiUrlEndpoint = "/api/"; // Assurez-vous que c'est le bon endpoint
			const postData = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					mail: value,
					product: upperFirstLetter(decodeURI(params.product)),
				}),
			};
			const response = await fetch(apiUrlEndpoint, postData);
			const responseData = await response;
			console.log(responseData); // Gérez la réponse de l'API comme nécessaire
			setValue(""); // Efface la valeur après l'envoi
		} catch (error) {
			console.error("Erreur lors de l'envoi des données à l'API:", error);
			// Gérez les erreurs si nécessaire
		}
	}

	function removeSpacesAndAccents(str: any) {
		// Supprimer les accents
		const withoutAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		// Supprimer les espaces
		const withoutSpaces = withoutAccents.replace(/\s+/g, '');
		return withoutSpaces;
	}
	const listToUse = "list" + removeSpacesAndAccents(decodeURI(params.product))
	let listName: any = "listsleepingpokemonfigurine"
	if (listToUse == "listpokemonsleep") {
		listName = "listpokemonsleep"
	}
	else if (listToUse == "listnappingpokemonfigurineset") {
		listName = "listpokemonnapping"

	}
	else if (listToUse == "listgoofypokemonfigurine") {
		listName = "listpokemongoofy"

	}
	else if (listToUse == "listtotorofigurineset") {
		listName = "listtotoroset"
	}
	else if (listToUse == "listcatbusplush") {
		listName = "listcatbus"
	}
	else if (listToUse == "listwarawaraplush") {
		listName = "listwarawara"
	}
	else {
		listName = "listpokemonsleep"
	}

	return (
		<section className="w-full min-h-screen ">
			<div className="w-full flex justify-center ">
				<div className="md:flex md:w-[90%] lg:w-[90%] xl:w-[75%] mb-10 ">
					<div className="w-full sm:w-[65%] hidden sm:block">

						<Image
							src={siteConfig[listName].imgs[0]} // Première image
							alt={siteConfig[listName].title}
							width={275}
							height={275}
							className="w-full mb-4"
						/>
						{/* Afficher les images restantes deux par deux */}
						{siteConfig[listName].imgs.slice(1).map((img: string, index: number) => (
							index % 2 === 0 && (
								<div key={index / 2} className="flex gap-4 mb-4">
									<Image
										src={img}
										alt={siteConfig[listName].title}
										width={100}
										height={100}
										className="flex-auto"
									/>
									{siteConfig[listName].imgs[index + 2] && (
										<Image
											src={siteConfig[listName].imgs[index + 2]}
											alt={siteConfig[listName].title}
											width={100}
											height={100}
											className="flex-auto"
										/>
									)}
								</div>
							)
						))}
					</div>

					<Carousel />

					<div className=" sm:max-w-[35%] lg:pl-10 mx-2">
						<h2 className="text-[28px] xl:text-[35px] text-[#ecedee] mb-4 lg:mt-4 text-center sm:text-left leading-tight" >{upperFirstLetter(decodeURI(params.product))}</h2>
						<h3 className="mb-1 text-[20px]">{siteConfig[listName].price}</h3>
						<p className="mb-4 text-[12px]"><u>Shipping</u> calculated at checkout</p>
						{/* <div className="mb-4">
							<p className="mb-2 text-sm text-[#A4A4A4]">Type</p>
							<div className="flex justify-between flex-wrap">
								<Button isDisabled color="default" radius="md" className="mb-4">
									Snorlax
								</Button>
								<Button isDisabled color="default" radius="md" className="mb-4">
									BULBASAUR
								</Button>
								<Button isDisabled color="default" radius="md" className="mb-4">
									EEVEE
								</Button>
								<Button isDisabled color="default" radius="md" className="mb-4">
									PIKACHU
								</Button>
								<Button isDisabled color="default" radius="md" className="mb-4">
									KOMALA
								</Button>
								<Button isDisabled color="default" radius="md" className="mb-4">
									JIRACHI
								</Button>
								<Button isDisabled color="default" radius="md">
									Set of 6 Pcs
								</Button>
							</div>
						</div> */}
						<p className="mb-2 text-sm text-[#A4A4A4]">Quantity</p>

						<button className="border-[#fd5e5e] border-1 py-2 px-6 w-full text-[#fd5e5e] mb-3">All Sold Out</button>
						{/* <button className="border-white border-1 py-2 w-full text-[#A4A4A4] mb-4">Add to cart</button> */}
						<p className="text-sm mb-2">Sign up to be notified when new stock arrives.</p>
						<form onSubmit={onSubmit} className="relative">
							<Input type="email" label="Email"
								placeholder="Be the first to know!"
								value={value}
								onValueChange={setValue}
								className="z-10"
								errorMessage=" "

							/>
							<button type="submit"
								className="absolute top-[30%] right-5 z-0
								transition-transform duration-1000 ease-in-out 
								"
								style={{
									transform: `translateX(-15px)`,
								}}
								name='submit'>
								<MoveRight />
							</button>
						</form>
						{/* <Arrow /> */}
						<div className="mb-8"></div>
						<p className="text-center leading-9">
							{siteConfig[listName].description}
						</p>
					</div>
				</div>
			</div>
			<div className="bg-black flex-col text-[#23e223] py-[80px]">
				<h3 className="text-[28px] xl:text-[35px] mb-4 text-center">Frequently asked questions</h3>
				<div className="flex justify-center">
					<Question />
				</div>
			</div>
		</section >
	);
}
