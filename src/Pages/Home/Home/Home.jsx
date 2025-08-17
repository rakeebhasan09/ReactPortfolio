import Counter from "../CounterArea/Counter";
import HeroBanner from "../HeroBanner/HeroBanner";
import Services from "../ServiceArea/Services";
import SkillsArea from "../SkillsArea/SkillsArea";

const Home = () => {
	return (
		<div>
			<HeroBanner></HeroBanner>
			<Services></Services>
			<Counter></Counter>
			<SkillsArea></SkillsArea>
		</div>
	);
};

export default Home;
