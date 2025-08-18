import Counter from "../CounterArea/Counter";
import HeroBanner from "../HeroBanner/HeroBanner";
import LatestServices from "../LatestServices/LatestServices";
import Services from "../ServiceArea/Services";
import SkillsArea from "../SkillsArea/SkillsArea";

const Home = () => {
	return (
		<div>
			<HeroBanner></HeroBanner>
			<Services></Services>
			<Counter></Counter>
			<SkillsArea></SkillsArea>
			<LatestServices></LatestServices>
		</div>
	);
};

export default Home;
