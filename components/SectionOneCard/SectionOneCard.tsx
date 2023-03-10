/* eslint-disable @next/next/no-img-element */
import AOS from "aos";
import React, { FC, useEffect } from "react";
import SouthIcon from "@mui/icons-material/South";
import Link from "next/link";

const SectionOneCard: FC = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<div className="flex flex-col relative lg:flex-row justify-between md:h-[100vh] overflow-hidden w-full px-[2rem] md:px-0 md:py-0 py-[2rem]">
			<div className="lg:w-[50%] md:px-[4rem] my-auto">
				<h3
					data-aos="fade-right"
					className="md:text-[4.5rem] hidden text-[3rem] leading-[3rem] font-semibold mb-6 lg:flex flex-wrap">
					Get paid to listen
					<div className="flex flex-wrap space-x-3 mt-6">
						<span className="">to</span>
						<div className="relative">
							<img src="bg.png" alt="" />
							<span className="absolute top-0">new music</span>
						</div>
					</div>
				</h3>
				<div className="block lg:hidden" data-aos="fade-right">
					<h3 className="text-[3rem] leading-[3rem] font-extrabold">Get paid to listen to</h3>
					<div className="flex space-x-3 md:mt-6 mb-4">
						<div className="relative">
							<img src="bg.png" alt="" />
							<span className="absolute -top-2 text-[3rem] font-bold pl-4">new music</span>
						</div>
					</div>
				</div>
				<p data-aos="flip-down" className="font-DMSans">
					Make a real impact on the music industry, get rewarded for your time and attention for listening to and
					reviewing new and unreleased music.{" "}
				</p>
				<div className="flex items-center space-x-8 mt-8">
					<Link href="/waitlist">
						<img src="playstore.png" alt="" />
					</Link>
					<Link href="/waitlist">
						<img src="appstore.png" alt="" />
					</Link>
				</div>
			</div>
			<div className="lg:w-[50%] overflow-hidden relative">
				<img
					data-aos="zoom-in-left"
					data-aos-duration="1000"
					className="md:absolute w-[1000%]"
					src="music-illustration.png"
					alt="music-illustration"
				/>
			</div>
		</div>
	);
};

export default SectionOneCard;
