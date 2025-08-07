import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
	return (
		<div className="font-rajdhani">
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default MainLayout;
