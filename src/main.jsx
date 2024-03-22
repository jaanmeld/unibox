import ReactDOM from 'react-dom/client'
import AppRouter from '../AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import '../style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </>
)
