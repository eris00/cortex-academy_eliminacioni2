import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import { ProductProvider } from "./Context";
import Main from './Component/Main';
import AddProductForm from './Component/AddProductForm';
import EditProductForm from './Component/EditProductForm';
import ItemDetails from './Component/ItemDetails';

function App() {

  return (
    <> 
      <BrowserRouter>
        <ProductProvider>

          <Link to="/product/add">Add Product</Link>

          <Routes>
              <Route  path={"/"} element={<Main />} />
              <Route  path={"/product/add"} element={<AddProductForm />} />
              <Route  path={"/product/:id"} element={<ItemDetails />} />
              <Route  path={"/product/edit/:id"} element={<EditProductForm />} />
          </Routes>

        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
