/* eslint-disable @next/next/no-img-element */
import React from "react";

const ThirdCard = () => {
	return (
		<div className="sm:h-[100vh] py-[3.5rem] pt-[7rem] h-[45rem] md:px-0 px-[1rem] flex flex-col items-center bg-[#F0997A] z-[100%] relative">
			<div className="w-[100%]">
				<div className="font-RedHatText">
					<h3 className="md:text-8xl tracking-wider text-[3.5rem] sm:text-[5rem] leading-[5rem] md:w-[60%] md:ml-[10rem] font-extrabold text-[#41403C]">
						win big with
					</h3>
					<div className="flex flex-col md:flex-row justify-around">
						<div className="mt-3 md:w-[30%] lg:ml-[10rem] mx-auto">
							<h3 className="md:text-[6rem] tracking-wider text-[3.5rem] sm:text-[5rem] font-extrabold text-[#FFFFFF] leading-[0.5rem]">
								exclusive
							</h3>
							<h3 className="md:text-[6rem] tracking-wider text-[3.5rem] sm:text-[5rem] font-extrabold text-[#FFFFFF]">
								rewards
							</h3>
							<p className="text-[20px] font-DMSans">
								In addition to earning money, you will also have the chance to win tickets to
								concerts, merchandise, and other exciting perks from your favorite artists.
							</p>
						</div>
						<div className="mt-10 absolute md:bottom-0 -bottom-[18rem] sm:-bottom-[12rem] md:relative md:mr-[7rem]">
							<img src="secondimg.png" className="" alt="Search Page" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdCard;
