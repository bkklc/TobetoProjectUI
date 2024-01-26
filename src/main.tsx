import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { globalStore } from './store/configureStore.ts';
import { AuthProvider } from './contexts/authContexts.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={globalStore}>
    <AuthProvider>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>   
  </Provider>
)
