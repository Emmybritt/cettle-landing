/* eslint-disable @next/next/no-img-element */
import { agentInterest, artistInterest, labelInterest, listenersInterest, userTypes } from "@/datas/data";
import { Checkbox, Select, TextInput } from "@mantine/core";
import React, { useState } from "react";

const WaitlistComponent = () => {
	const [userType, setUserType] = useState<string | null>(null);
	return (
		<div className="sm:flex flex-col lg:flex-row sm:justify-between w-full pb-[3rem]">
			<div className="lg:w-[50%] px-[1rem] sm:px-[2rem] md:px-[4rem] sm:my-auto pt-[4rem] w-[100%]">
				<h3
					data-aos="fade-left"
					data-aos-anchor="#example-anchor"
					data-aos-offset="500"
					data-aos-duration="500"
					className="xxs:text-[4rem] text-[3rem] leading-[2.5rem] md:leading-[3rem] font-semibold mb-6 xxs:flex flex-wrap">
					<span>Be the first to know</span>
					<div className="flex flex-col sm:items-center md:flex-row md:space-x-3 sm:mt-6">
						<span className="sm:-mt-4">when</span>
						<div className="relative mt-4">
							<img src="relaunch.png" alt="" />
							<span className="absolute top-2 sm:top-0 text-white text-[3rem] pl-[2rem] p-[0.3rem]">
								We launch
							</span>
						</div>
					</div>
				</h3>
				<div>
					<p className="">
						Make a real impact on the music industry, get rewarded for your time and attention for listening to
						and reviewing new and unreleased music.
					</p>
				</div>
			</div>
			<div className="lg:w-[50%] relative md:pr-[5rem] mt-[6rem] px-[2rem]" data-aos="fade-up">
				<h3 className="font-bold text-4xl mb-4">Join our waitlist</h3>
				<div className="grid md:grid-cols-2 grid-cols-1 gap-4">
					<TextInput label="First Name" withAsterisk />
					<TextInput label="Last Name" withAsterisk />
					<TextInput label="Email" withAsterisk />
					<TextInput label="Phone Number" withAsterisk />
					<Select
						label="User Type"
						defaultValue={"Listener"}
						data={userTypes}
						value={userType}
						onChange={setUserType}
					/>
				</div>
				<div className="mt-6">
					<h3 className="text-[16px] font-semibold">What’s most important to you?</h3>
					{userType === "Listener" ? (
						<div className="space-y-2 mt-6">
							{listenersInterest.map((interest: string, _index: number) => (
								<div key={_index} className="flex items-center justify-between">
									<span className="text-[16px]">{interest}</span>
									<Checkbox />
								</div>
							))}
						</div>
					) : userType === "Agency" ? (
						<div className="space-y-2 mt-6">
							{agentInterest.map((interest: string, _index: number) => (
								<div key={_index} className="flex items-center justify-between">
									<span className="text-[16px]">{interest}</span>
									<Checkbox />
								</div>
							))}
						</div>
					) : userType === "Artist" ? (
						<div className="space-y-2 mt-6">
							{artistInterest.map((interest: string, _index: number) => (
								<div key={_index} className="flex items-center justify-between">
									<span className="text-[16px]">{interest}</span>
									<Checkbox />
								</div>
							))}
						</div>
					) : (
						<div className="space-y-2 mt-6">
							{labelInterest.map((interest: string, _index: number) => (
								<div key={_index} className="flex items-center justify-between">
									<span className="text-[16px]">{interest}</span>
									<Checkbox />
								</div>
							))}
						</div>
					)}
				</div>
				<button className="bg-[#000000] rounded-full text-white w-[207px] h-[56.12px] mt-6">Submit</button>
			</div>
		</div>
	);
};

export default WaitlistComponent;
