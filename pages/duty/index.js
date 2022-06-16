import styled from 'styled-components';
import CheckDuty from '../../components/CheckDuty';

export const Container = styled.div`
	background-color: tomato;
	height: 100vh;
`;

export const Card = styled.div`
	background-color: #ccc;
`;

export const Title = styled.h1`
	color: greenyellow;
	font-weight: 500;
	font-size: 2rem;
	display: flex;
	flex: 1;
`;

const Home = () => {
	return (
		<Container>
			<Title>This is the DUTY Home Page</Title>

			<Card>
				<CheckDuty />
			</Card>
		</Container>
	);
};

export default Home;
