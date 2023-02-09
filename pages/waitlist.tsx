import React from "react";
import FourthCardSection from "../components/FourthCardSection/FourthCardSection";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import WaitlistComponent from "../components/WaitlistComponent/WaitlistComponent";

const WaitList = () => {
	return (
		<SectionLayout>
			<WaitlistComponent />
			<FourthCardSection />
		</SectionLayout>
	);
};

export default WaitList;
