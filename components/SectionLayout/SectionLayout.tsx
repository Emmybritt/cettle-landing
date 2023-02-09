import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header";

const SectionLayout: FC<any> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className="">{children}</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default SectionLayout;
