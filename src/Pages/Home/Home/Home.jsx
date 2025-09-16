import Counter from "../CounterArea/Counter";
import Education from "../Education/Education";
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
			<Education></Education>
		</div>
	);
};

export default Home;
