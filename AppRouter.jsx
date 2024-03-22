import { useRoutes } from 'react-router-dom'
import App from './App'
import Emails from './pages/Emails/Emails.jsx'


function AppRouter(){
  return useRoutes([
    {
      element: <App />,
      path: '/',
    },
    {
      element: <Emails />,
      path: '/flow'
    },
  ]);
}

export default AppRouter