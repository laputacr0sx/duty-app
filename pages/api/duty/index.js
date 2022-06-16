import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 72;
	font-weight: 100;
	color: tomato;
`;

export default function Home() {
	return (
		<div>
			<Title>Hello, World!</Title>
		</div>
	);
}
