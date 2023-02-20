/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styles from "./SecondCard.module.css";

const SecondCardSection = () => {
	return (
		<div className="bg-[#FFD051] h-[45rem] sm:h-[100vh] relative">
			<div className="mx-auto w-[80%] md:w-[60%] pt-[6rem] flex items-center flex-col justify-center">
				<h3 className="text-[#41403C] font-RedHatText text-3xl md:text-5xl text-center font-extrabold font-[Red Hat Text]">
					<p className={styles.textStrokeBorder}>The ultimate destination for music lovers and industry insiders!</p>
				</h3>
				<p className="md:w-[40rem] text-sm text-center font-DMSans px-[2rem] md:px-0 py-6">
					With our app, you will have access to exclusive new and unreleased music, and be able to earn money for each
					review you write. Share your honest opinions and help shape the future of the music industry.
				</p>
				<button className="bg-[#FFFFFF] px-6 py-3 rounded-full">
					<Link href="waitlist" className="text-sm font-normal font-Raleway">
						Join Waitlist
					</Link>
				</button>
				<div className="mt-10 mx-auto absolute sm:bottom-[10rem] bottom-6 md:bottom-10 h-[10rem] md:h-[18rem]">
					<img src="firstimg.png" alt="Splash screen" className="bottom-0" />
				</div>
			</div>
		</div>
	);
};

export default SecondCardSection;
