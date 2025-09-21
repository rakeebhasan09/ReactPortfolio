import { Helmet } from "react-helmet-async";
import ContactBanner from "../ContactBanner/ContactBanner";
import ContactInfo from "../ContactInfo/ContactInfo";

const Contact = () => {
	return (
		<main>
			<Helmet>
				<title>Rakeeb Hasan || Contact</title>
			</Helmet>
			<section>
				<ContactBanner></ContactBanner>
			</section>
			<section className="py-10 md:py-20 lg:py-[100px]">
				<ContactInfo></ContactInfo>
			</section>
		</main>
	);
};

export default Contact;
