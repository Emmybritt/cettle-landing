/* eslint-disable @next/next/no-img-element */
import { companies, privacies, products } from "@/datas/data";
import React, { FC } from "react";

const Footer: FC = () => {
	return (
		<div className="h-[20rem] px-[2rem] md:px-[4rem] pt-[6rem] bg-white relative z-[100%]">
			<div className="flex lg:flex-row flex-col w-[100%] space-y-[4rem] lg:space-y-0 items-center justify-center">
				<div className="w-full">
					<img src="logo.png" className="mb-7" alt="" />
					<p className="md:text-2xl text-xl mb-6 md:w-[30rem]">
						The ultimate destination for music lovers and industry insiders!
					</p>
					<p className="mb-1 text-lg">Coming soon:</p>
					<div className="flex items-center space-x-4 ">
						<img src="appstore.png" alt="" />
						<img src="playstore.png" alt="" />
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 w-full">
					<div className="col-span">
						<h3 className="text-[#278C7E] font-semibold mb-2">Products</h3>
						{products.map((product: string, _i) => {
							return <p key={_i}>{product}</p>;
						})}
					</div>
					<div className="col-span">
						<h3 className="text-[#278C7E] font-semibold mb-2">Company</h3>

						{companies.map((company: string, _i) => {
							return <p key={_i}>{company}</p>;
						})}
					</div>
					<div className="col-span-2 md:col-span-1 w-full">
						<h3 className="text-[#278C7E] font-semibold mb-2 md:mt-0 mt-[3rem]">Privacy</h3>
						{privacies.map((privacy: string, _i) => {
							return <p key={_i}>{privacy}</p>;
						})}
						<div className="flex justify-center md:justify-start items-center space-x-3 mt-[3rem] md:mt-6">
							<img src="facebok.png" alt="facebook" />
							<img src="twitter.png" alt="twitter" />
							<img src="instagram.png" alt="instagram" />
						</div>
					</div>
				</div>
			</div>
			<p className="mt-4 pb-[4rem] text-center">©{new Date().getFullYear()} All rights reserved</p>
		</div>
	);
};

export default Footer;
