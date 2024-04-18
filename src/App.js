import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BlockBtn, SotrBtn, TaskBlock } from './component';
import { getTodos } from './action';
import './App.css';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos());
	}, [dispatch]);

	return (
		<>
			<SotrBtn />
			<TaskBlock />

			<BlockBtn />
		</>
	);
};
