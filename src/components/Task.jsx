import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todo';

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewTask() {
    const task = inputRef.current.value.trim();
    if (task !== '') {
      dispatch(addTodo(task));
      inputRef.current.value = '';
    }
  }

  return (
    <div className="" data-component="Task">
      <div className="">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className=""
        />
        <button onClick={addNewTask}>Add task</button>
      </div>
    </div>
  );
};

export default Task;
