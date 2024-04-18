import { useDispatch } from 'react-redux';
import { addTodosAction, deleteTodo, updateTodo } from '../../action';
import style from './blockButton.module.css';

export const BlockBtn = () => {
	const dispatch = useDispatch();

	const onAddTodo = () => {
		dispatch(addTodosAction());
	};

	const onUpdateTodo = () => {
		dispatch(updateTodo());
	};

	const onDeleteTodo = () => {
		dispatch(deleteTodo());
	};
	return (
		<div className={style.blockButton}>
			<button onClick={onAddTodo}>Добавить новый список</button>
			<button onClick={onUpdateTodo}>Обновить список</button>
			<button onClick={onDeleteTodo}>Удалить список</button>
		</div>
	);
};
