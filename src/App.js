import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Carts from './Components/Carts/Carts';
import Features from './Components/Features/Features';
import Shoes from './Components/Shoes/Shoes';
import History from './Components/History/History';
import { productsAndCartLoader } from './loader/productsAndCartLoader';


function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element: <Main></Main>,
      children : [
        {
          path : '/',
          loader: () => fetch('products.json') ,
          element : <Carts></Carts>
        },
        {
          path : 'order',
          loader: productsAndCartLoader ,
          element : <History></History>
        },
        {
          path : 'home',
          loader: () => fetch('products.json') ,
          element : <Carts></Carts>
        },
        {
          path : 'features',
          element : <Features></Features>
        },
        
        {
          path : 'shoes',
          element : <Shoes></Shoes>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
