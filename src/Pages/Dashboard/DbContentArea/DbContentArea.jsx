import { Outlet } from "react-router-dom";
import DbNavbar from "../DdNavbar/DbNavbar";

const DbContentArea = ({ openSideBar }) => {
	return (
		<div className="w-full lg:w-[calc(100%-300px)] ml-auto relative">
			<div className="sticky top-0 z-10 bg-white">
				<DbNavbar openSideBar={openSideBar}></DbNavbar>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default DbContentArea;
