import { useDispatch, useSelector } from 'react-redux';
import { Loading, getTodos } from '../../selectors';
import style from './taskBlock.module.css';

export const TaskBlock = () => {
	const todo = useSelector(getTodos);
	const loading = useSelector(Loading);

	const dispatch = useDispatch();

	const poisc = (value) => {
		dispatch({ type: 'POISC', payload: value });
	};
	return (
		<div className={style.block}>
			<h3 className={style.zagalovok}>Todo list</h3>
			<input onChange={({ target: { value } }) => poisc(value)} type="text" className={style.poisc} placeholder="Поиск..." />
			{loading ? (
				<div className={style.loader}></div>
			) : (
				Object.entries(todo).map(([id, { title }]) => (
					<div className={style.todos} key={id}>
						{title}
					</div>
				))
			)}
		</div>
	);
};
