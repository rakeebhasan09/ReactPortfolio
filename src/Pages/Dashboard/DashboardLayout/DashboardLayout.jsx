import { Helmet } from "react-helmet-async";
import AsideBar from "../AsideBar/AsideBar";
import DbContentArea from "../DbContentArea/DbContentArea";
import { useState } from "react";

const DashboardLayout = () => {
	const [mobileSideBar, setMobileSideBar] = useState(false);
	const openSideBar = () => {
		setMobileSideBar(!mobileSideBar);
	};
	return (
		<>
			<Helmet>
				<title>Rakeeb Hasan || Admin Dashboard</title>
			</Helmet>
			<div className="min-h-screen bg-white flex relative">
				<AsideBar
					mobileSideBar={mobileSideBar}
					openSideBar={openSideBar}
				></AsideBar>
				<DbContentArea openSideBar={openSideBar}></DbContentArea>
			</div>
		</>
	);
};

export default DashboardLayout;
