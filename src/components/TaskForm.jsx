import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todo';

const TaskForm = () => {
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
    <div>
      <h1 className="">Todo:</h1>
      <div
        className="flex flex-row justify-between pt-2 pb-3"
        data-component="Task"
      >
        <input
          className="flex-grow px-2"
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
        />
        <button className="py-1 px-2" onClick={addNewTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
