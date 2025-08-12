import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("servicesData.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div className="xxl:py-[120px]">
			<div className="container">
				<div className="grid grid-cols-4 gap-x-[30px]">
					{services.map((service) => (
						<ServiceCard key={service._id}></ServiceCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
