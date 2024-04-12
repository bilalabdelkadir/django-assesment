import App from '../App';
import { createBrowserRouter } from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default Router;
