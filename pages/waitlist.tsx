import Head from "next/head";
import React from "react";
import FourthCardSection from "../components/FourthCardSection/FourthCardSection";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import WaitlistComponent from "../components/WaitlistComponent/WaitlistComponent";

const WaitList = () => {
	return (
		<>
			<Head>
				<title>Crestal</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<SectionLayout>
				<WaitlistComponent />
				<FourthCardSection />
			</SectionLayout>
		</>
	);
};

export default WaitList;
