/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<div className="flex items-center py-6 lg:space-x-4 px-2 md:px-[4rem] w-full justify-between">
			<Link href="/" className="">
				<img src="logo.png" alt="logo" />
			</Link>
			<button className="bg-[#000000] rounded-full text-white w-[180px] md:w-[207px] md:h-[56.12px] h-[50px]">
				<Link href="waitlist">Join Waitlist</Link>
			</button>
		</div>
	);
};

export default Header;
