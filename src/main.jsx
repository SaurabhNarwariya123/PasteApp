import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./store.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <App />
   <Toaster/>
   </Provider>
  </StrictMode>,
);
