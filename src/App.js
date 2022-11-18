import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <RouterProvider router={Router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
