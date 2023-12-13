/* eslint-disable @next/next/no-img-element */
import { SUBMIT_FORM } from "@/apollo/queries/submit-form";
import { agentInterest, artistInterest, labelInterest, listenersInterest, userTypes } from "@/datas/data";
import { useMutation } from "@apollo/client";
import { Checkbox, Select, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { toast } from "react-toastify";

export interface Form {
	firstName?: string;
	lastName?: string;
	email?: string;
	phoneNumber?: string;
	userType?: string;
	userPreference?: string[];
}

export type ErrorType = Omit<Form, "userPreference">;

const WaitlistComponent = () => {
	const [userType, setUserType] = useState<string>("");
	const [form, setForm] = useState<Form>({});
	const [errorMsg, setErrormsg] = useState<ErrorType>({});
	const [CreateCrestalUser, { loading }] = useMutation(SUBMIT_FORM);

	function handleChange(name: string, value: string) {
		if (!value) {
			setErrormsg((prev) => ({
				...prev,
				[name]: `${name} is required.`,
			}));
			return;
		} else {
			setErrormsg((prev) => ({
				...prev,
				[name]: "",
			}));
		}
		if (name === "userPreference") {
			setForm((prev) => ({
				...prev,
				userPreference: [...(prev?.userPreference ?? []), value],
			}));

			return;
		}
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function handleSubmitForm() {
		console.log(form);
		try {
			if (!form.email) {
				return toast("Email is required", { type: "error" });
			}
			if (!form.firstName) {
				return toast("First name is required", { type: "error" });
			}

			if (!form.lastName) {
				return toast("Last name is required", { type: "error" });
			}
			if (!form.phoneNumber) {
				return toast("phone number is required", { type: "error" });
			}

			if (!form.userType) {
				return toast("user type is required", { type: "error" });
			}
			if (!form.userPreference || form.userPreference.length <= 0) {
				return toast("Please select atleast one thing important to you", { type: "error" });
			}
			const { data, errors } = await CreateCrestalUser({
				variables: {
					createCrestalUser: {
						email: form?.email,
						first_name: form?.firstName,
						last_name: form?.lastName,
						phone_number: form?.phoneNumber,
						user_type: form?.userType.toLocaleLowerCase(),
						userPreference: form.userPreference,
					},
				},
			});
			toast("You have been successfully added to our waiting list", { type: "success" });
		} catch (error: any) {
			toast(error?.message, { type: "error" });
		}
	}
	return (
		<div className="sm:flex flex-col lg:flex-row sm:justify-between w-full pb-[3rem]">
			<div className="lg:w-[50%] px-[1rem] sm:px-[2rem] md:px-[4rem] sm:my-auto pt-[4rem] w-[100%]">
				<h3
					data-aos="fade-left"
					data-aos-anchor="#example-anchor"
					data-aos-offset="500"
					data-aos-duration="500"
					className="xxs:text-[4rem] md:text-[57px] text-[3rem] leading-[2.8rem] md:leading-[3rem] font-bold mb-6 xxs:flex flex-wrap">
					<span>Be the first to know</span>
					<div className="flex flex-col sm:items-center md:flex-row md:space-x-3 sm:mt-6">
						<span className="sm:-mt-4">when</span>
						<div className="relative mt-4 md:mt-0">
							<img src="relaunch.png" alt="" />
							<span className="absolute font-bold top-2 sm:top-0 text-white text-[3rem] pl-[2rem] p-[0.3rem]">
								we launch
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
					<div>
						<TextInput
							label="First Name"
							withAsterisk
							onChange={(e) => handleChange("firstName", e.target.value)}
						/>
						{errorMsg.firstName && <p className="text-xs text-red-500 capitalize">{errorMsg.firstName}</p>}
					</div>

					<div>
						<TextInput
							label="Last Name"
							withAsterisk
							onChange={(e) => handleChange("lastName", e.target.value)}
						/>
						{errorMsg.lastName && <p className="text-xs text-red-500 capitalize">{errorMsg.lastName}</p>}
					</div>

					<div>
						<TextInput label="Email" withAsterisk onChange={(e) => handleChange("email", e.target.value)} />
						{errorMsg.email && <p className="text-xs text-red-500 capitalize">{errorMsg.email}</p>}
					</div>

					<div>
						<TextInput
							label="Phone Number"
							withAsterisk
							onChange={(e) => handleChange("phoneNumber", e.target.value)}
						/>

						{errorMsg.phoneNumber && <p className="text-xs text-red-500 capitalize">{errorMsg.phoneNumber}</p>}
					</div>
					<div>
						<Select
							label="User Type"
							defaultValue="listener"
							data={userTypes}
							value={userType}
							onChange={(e) => {
								setUserType(e ?? "");
								handleChange("userType", e ?? userType);
							}}
						/>
						{errorMsg.userType && <p className="text-xs text-red-500 capitalize">{errorMsg.userType}</p>}
					</div>
				</div>
				<div className="mt-6">
					<h3 className="text-[16px] font-semibold">What’s most important to you?</h3>
					{userType && (
						<>
							{userType === "Listener" ? (
								<div className="space-y-4 mt-6">
									{listenersInterest.map((interest: string, _index: number) => (
										<div key={_index} className="flex items-center justify-between">
											<span className="text-[16px]">{interest}</span>
											<Checkbox
												onChange={(e) =>
													handleChange("userPreference", interest)
												}
											/>
										</div>
									))}
								</div>
							) : userType === "Agency" ? (
								<div className="space-y-4 mt-6">
									{agentInterest.map((interest: string, _index: number) => (
										<div key={_index} className="flex items-center justify-between">
											<span className="text-[16px]">{interest}</span>
											<Checkbox
												onChange={(e) =>
													handleChange("userPreference", interest)
												}
											/>
										</div>
									))}
								</div>
							) : userType === "Artist" ? (
								<div className="space-y-4 mt-6">
									{artistInterest.map((interest: string, _index: number) => (
										<div key={_index} className="flex items-center justify-between">
											<span className="text-[16px]">{interest}</span>
											<Checkbox
												onChange={(e) =>
													handleChange("userPreference", interest)
												}
											/>
										</div>
									))}
								</div>
							) : (
								<div className="space-y-4 mt-6">
									{labelInterest.map((interest: string, _index: number) => (
										<div key={_index} className="flex items-center justify-between">
											<span className="text-[16px]">{interest}</span>
											<Checkbox
												onChange={(e) =>
													handleChange("userPreference", interest)
												}
											/>
										</div>
									))}
								</div>
							)}
						</>
					)}
				</div>
				<button className="bg-[#000000] rounded-full text-white w-[207px] h-[56.12px] mt-6" onClick={handleSubmitForm}>
					{loading ? "Submitting..." : "Submit"}
				</button>
			</div>
		</div>
	);
};

export default WaitlistComponent;
