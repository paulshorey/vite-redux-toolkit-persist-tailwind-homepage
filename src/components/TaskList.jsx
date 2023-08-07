import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/slices/todo';

const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  function deleteTask(id) {
    dispatch(deleteTodo(id));
  }
  return (
    <div className="" data-component="TaskList">
      <div className="">
        <h3>Your tasks:</h3>
        <ul className="">
          {tasks.map((task) => (
            <li className="task" key={task.id}>
              {task.text}
              <button className="" onClick={() => deleteTask(task.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
