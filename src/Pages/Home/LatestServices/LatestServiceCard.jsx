const LatestServiceCard = ({ idx }) => {
	return <div>{idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`}</div>;
};

export default LatestServiceCard;
