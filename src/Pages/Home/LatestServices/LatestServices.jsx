import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import LatestServiceCard from "./LatestServiceCard";

const LatestServices = () => {
	const [portfolioDatas, setPortfolioDara] = useState([]);
	useEffect(() => {
		fetch("portfolioData.json")
			.then((res) => res.json())
			.then((data) => {
				setPortfolioDara(data);
			});
	}, []);
	return (
		<div className="container">
			<SectionTitle
				areaTitle={"Latest Service"}
				title={"Inspiring The World One Project"}
				subTitle={`Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational`}
			></SectionTitle>
			<div>
				<div className="w-1/2">
					<div className="portfolio-data">
						{portfolioDatas.map((portfolioData, idx) => (
							<LatestServiceCard
								key={portfolioData._id}
								idx={idx}
							></LatestServiceCard>
						))}
					</div>
				</div>
				<div className="w-1/2"></div>
			</div>
		</div>
	);
};

export default LatestServices;
