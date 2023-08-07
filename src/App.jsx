import Task from './components/Task';
import TaskList from './components/TaskList';
import { toggleDarkMode } from './redux/slices/ui';
import { fetch_ip_info } from './redux/slices/user';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const { ui, user } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetch_ip_info());
    if (ui.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  return (
    <div className="" data-component="App">
      <header className="px-6 py-3 text-zinc-400 dark:text-slate-500">
        {/* user state */}
        <div className="flex justify-between">
          <span>
            {user.ip || 'IP unknown'}&emsp;{' '}
            {user.ip_location || 'Location unknown'}
            &emsp;
            {user.ip_isp || 'ISP unknown'}&emsp;
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              dispatch(toggleDarkMode());
            }}
          >
            {ui.darkMode ? '🌚' : '🌞'}
          </span>
        </div>
      </header>

      {/* todo state */}
      <div className="rounded m-6 p-6 drop-shadow-lg bg-zinc-300 dark:bg-slate-600">
        <h1 className="">ToDo App</h1>
        <Task />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
