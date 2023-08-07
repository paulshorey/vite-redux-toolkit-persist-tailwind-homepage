import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { toggleDarkMode } from './redux/state/ui';
import { fetch_ip_info } from './redux/state/user';
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
      <header className="px-6 py-3 uui-subtle">
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
      <div className="m-6 p-6 drop-shadow-lg uui-card">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
