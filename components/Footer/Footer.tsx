/* eslint-disable @next/next/no-img-element */
import { companies, privacies, products } from "@/datas/data";
import React, { FC } from "react";

const Footer: FC = () => {
	return (
		<div className="h-[20rem] space-y-[5rem] mx-auto md:w-[90%] md:px-[4rem] pt-[6rem] md:pl-0 pl-8 bg-white relative z-[100%]">
			<div className="flex lg:flex-row flex-col w-[100%] space-y-[4rem] lg:space-y-0 items-center justify-center">
				<div className="w-full space-y-4">
					<img src="logo.png" className="mb-7" alt="" />
					<p className="md:text-[18px] text-xl mb-6 md:w-[25rem] font-NotoSans">
						The ultimate destination for music lovers and industry insiders!
					</p>
					<p className="mb-1 text-lg">Coming soon:</p>
					<div className="flex items-center space-x-4 ">
						<img src="appstore.png" alt="" />
						<img src="playstore.png" alt="" />
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 w-full">
					<div className="col-span space-y-3">
						<h3 className="text-[#278C7E] font-semibold mb-2">Products</h3>
						{products.map((product: string, _i) => {
							return <p key={_i}>{product}</p>;
						})}
					</div>
					<div className="col-span space-y-3">
						<h3 className="text-[#278C7E] font-semibold mb-2">Company</h3>

						{companies.map((company: string, _i) => {
							return <p key={_i}>{company}</p>;
						})}
					</div>
					<div className="col-span-2 relative md:col-span-1 w-full">
						<div className="space-y-3">
							<h3 className="text-[#278C7E] font-semibold mb-2 md:mt-0 mt-[3rem]">Privacy</h3>
							{privacies.map((privacy: string, _i) => {
								return <p key={_i}>{privacy}</p>;
							})}
						</div>

						<div className="flex  justify-center md:justify-start absolute bottom-0 items-end space-x-3 md:mt-6">
							<img className="h-8 w-8" src="facebok.png" alt="facebook" />
							<img className="h-8 w-8" src="twitter.png" alt="twitter" />
							<img className="h-8 w-8" src="instagram.png" alt="instagram" />
						</div>
					</div>
				</div>
			</div>
			<p className="mt-4 pb-[4rem] md:text-left text-center">©{new Date().getFullYear()} All rights reserved</p>
		</div>
	);
};

export default Footer;
