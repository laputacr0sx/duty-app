import useInput from '../Hook/Input';
import styled from 'styled-components';
import { dutyArray } from '../constants/dutyArray';

const CheckDuty = () => {
	const [dutyName, dutyNameInput] = useInput({ type: 'text' });

	const searchHandler = () => {
		const requiredDuty = dutyName.match(/[A-Z]\d{5}/g);

		if (!!requiredDuty) {
			const result = dutyArray.filter(
				(duty) => duty.dutyNumber === requiredDuty[0]
			);
		}
	};

	return (
		<>
			<div>
				{dutyNameInput}
				<button onClick={searchHandler}>Search</button>
			</div>
		</>
	);
};

export default CheckDuty;
