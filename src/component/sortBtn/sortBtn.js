import { useDispatch } from 'react-redux';
import style from './sortBtn.module.css';

export const SotrBtn = () => {
	const dispatch = useDispatch();

	const sort = () => {
		dispatch({ type: 'SORT' });
	};
	return (
		<div className={style.sortButton}>
			<button onClick={sort}>Отсортировать</button>
		</div>
	);
};
