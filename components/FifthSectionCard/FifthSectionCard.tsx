/* eslint-disable @next/next/no-img-element */
import React from "react";

const FifthSectionCard = () => {
	return (
		<div className="bg-[#8EA4F4] h-[50rem] md:h-[100vh] relative z-[100%] pt-[9rem] overflow-hidden">
			<div className="md:w-[40rem] text-center md:mx-auto font-RedHatText">
				<h3 className="md:text-[6rem] text-[4rem] sm:text-[5rem] text-[#41403C] md:leading-3 leading-[4rem] font-extrabold">
					connect with
				</h3>
				<h3 className="sm:text-[5rem] text-[4rem] text-[#FFFFFF] font-extrabold leading-[4rem] md:leading-[7rem]">
					artists & fans
				</h3>
			</div>
			<div className="md:w-[30rem] text-center mx-auto px-[2rem] pt-[1.5rem]">
				<p className="font-DMSans">
					Our app connects you with your favorite artists and other mutual fans, so you can stay up-to-date on new
					releases, events, and other exciting news.
				</p>
			</div>
			<div className="md:w-[30rem] text-center mx-auto">
				<div className="mt-10 relative">
					<img src="thirdimg.png" alt="Splash screen" className="z-0" />
				</div>
			</div>
		</div>
	);
};

export default FifthSectionCard;
