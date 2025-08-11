import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect";

const HeroBanner = () => {
	return (
		<div>
			<div className="bg-[url('https://i.ibb.co.com/WpHTVz9x/banner-background-one.jpg')] bg-no-repeat bg-cover bg-center lg:pt-[120px]">
				<div className="container">
					<div className="flex flex-col lg:flex-row items-center">
						<div className="w-1/2">
							<div className="content">
								<span className="text-white text-[28px] font-rajdhani font-bold uppercase">
									hello
								</span>
								<h1 className="text-white lg:text-[68px] font-rajdhani font-bold">
									I'm Rakeeb Hasan a
								</h1>

								<div>
									<TypeWriterEffect
										textStyle={{
											fontFamily: "Rajdhani",
											color: "#FF014F",
											fontWeight: 700,
											fontSize: "68px",
										}}
										cursorColor="#3F3D56"
										multiText={[
											"Web Designer.",
											"Front End Developer.",
											"React Js Developer.",
											"MERN Developer.",
											"Freelancer.",
										]}
										multiTextDelay={1000}
										typeSpeed={30}
										multiTextLoop={true}
									/>
								</div>

								<p className="text-[#9F9F9F] mt-[22px] mb-[39px] text-[18px] font-rubik max-w-[620px]">
									A personal portfolio is a collection of your
									work, achievements, and skills that
									highlights your abilities and professional
									growth. It serves as
								</p>
								<Link>
									<button className="group px-[30px] h-14 flex items-center gap-1 text-white text-[16px] bg-brand font-rubik font-medium capitalize rounded-[50px]">
										<GoArrowRight className="text-[20px] hidden group-hover:inline-block transition-all duration-300 transform group-hover:translate-x-0 group-hover:opacity-100" />
										<span>View Portfolio</span>
										<GoArrowRight className="text-[20px] group-hover:hidden transition-all duration-300 transform group-hover:translate-x-2 group-hover:opacity-0" />
									</button>
								</Link>
							</div>
						</div>
						<div className="w-1/2">
							<div className="my-image">
								<img
									className="block ml-auto"
									src="https://i.ibb.co.com/9mzCC32q/banner-user-image-one.png"
									alt="MD RAKEEB HASAN"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
