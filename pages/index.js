import styled from 'styled-components';
import Image from 'next/image';

import { MTR_LOGO } from '../constants/url';

export const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	border: solid snow;
	border-radius: 15px;
`;

export const Title = styled.h1`
	font-size: 72;
	font-weight: 100;
	color: tomato;
`;

export default function Home() {
	return (
		<Container>
			<Title>Veilics&apos; DUTY PAGE</Title>
			<Image src={MTR_LOGO} alt='MTR LOGO' width={300} height={300} />
			<button type='button'>Press Me</button>
		</Container>
	);
}
