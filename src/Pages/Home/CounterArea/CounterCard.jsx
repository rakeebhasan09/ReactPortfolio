const CounterCard = ({ ammount, subTitle }) => {
	return (
		<div className="w-full md:w-[calc(50%-15px)] bg-[#141414] rounded-[20px] py-[30px] px-[7px]">
			<h2 className="text-white text-[48px] font-rajdhani font-black text-center">
				{ammount}
			</h2>
			<p className="text-[#9F9F9F] font-rubik text-center">{subTitle}</p>
		</div>
	);
};

export default CounterCard;
