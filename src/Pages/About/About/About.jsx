import Counter from "../../Home/CounterArea/Counter";
import Education from "../../Home/Education/Education";
import SkillsArea from "../../Home/SkillsArea/SkillsArea";
import AboutBanner from "../AboutBanner/AboutBanner";

const About = () => {
	return (
		<main>
			<AboutBanner></AboutBanner>
			<section className="pt-10 md:pt-[70px] lg:pt-[100px] xl:pt-[120px]">
				<Counter></Counter>
			</section>
			<Education></Education>
			<section id="about-page-skills">
				<SkillsArea></SkillsArea>
			</section>
		</main>
	);
};

export default About;
