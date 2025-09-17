import Counter from "../CounterArea/Counter";
import Education from "../Education/Education";
import Experiences from "../Experiencs/Experiences";
import HeroBanner from "../HeroBanner/HeroBanner";
import LatestServices from "../LatestServices/LatestServices";
import Services from "../ServiceArea/Services";
import SkillsArea from "../SkillsArea/SkillsArea";
import Technology from "../Technology/Technology";

const Home = () => {
	return (
		<div>
			<HeroBanner></HeroBanner>
			<Services></Services>
			<Counter></Counter>
			<SkillsArea></SkillsArea>
			<LatestServices></LatestServices>
			<Education></Education>
			<Experiences></Experiences>
			<Technology></Technology>
		</div>
	);
};

export default Home;
