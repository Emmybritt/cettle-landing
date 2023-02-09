/* eslint-disable @next/next/no-img-element */
import React from "react";

const FourthCardSection = () => {
	return (
		<div className="bg-[#000000] h-[40rem] lg:h-[30rem] z-[100%] px-[2rem] md:px-[7rem] pb-[3rem] md:pb-[0rem] relative">
			<h3 className="text-white flex md:flex-row flex-col w-[80%] font-semibold pt-[6rem] pb-[2rem] md:items-center">
				Join the waitlist
			</h3>
			<div className="flex lg:flex-row flex-col space-x-3">
				<div className="lg:w-[50%] justify-between">
					<h3 className="text-3xl text-white">
						Join the revolution and start making a real impact on the music industry today!
					</h3>
					<div>
						<div className="flex items-center space-x-6 mt-5">
							<img src="appStore2.png" alt="" />
							<img src="googleplay2.png" alt="" />
						</div>
					</div>
				</div>
				<div className="h-[30rem] pt-[3rem] lg:pt-0 overflow-hidden">
					<img src="group.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default FourthCardSection;
