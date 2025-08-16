import Counter from "../CounterArea/Counter";
import HeroBanner from "../HeroBanner/HeroBanner";
import Services from "../ServiceArea/Services";

const Home = () => {
	return (
		<div>
			<HeroBanner></HeroBanner>
			<Services></Services>
			<Counter></Counter>
		</div>
	);
};

export default Home;
