import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
	return (
		<>
			<Helmet>
				<title>Rakeeb Hasan || Admin Dashboard</title>
			</Helmet>
			<div className="min-h-screen bg-white">
				Hello From Dashboard Layout
			</div>
		</>
	);
};

export default DashboardLayout;
