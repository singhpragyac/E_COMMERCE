import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider} from './Context/auth';

createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </AuthProvider>
  </>
)
