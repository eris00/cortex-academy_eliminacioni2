import logo from './logo.svg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import { ProductProvider } from "./Context";
import ProductList from './Component/ProductList';
import AddProduct from './Component/AddProduct/AddProduct';
import EditProduct from './Component/EditProduct/EditProduct';
import ProductDetails from './Component/ProductDetails';
import Header from './Layout/Header';

function App() {

  return (
    <> 
      <BrowserRouter>
        <ProductProvider>

          {/* <Link to="/product/add">Add Product</Link> */}
          <Header />

          <Routes>
              <Route  path={"/"} element={<ProductList />} />
              <Route  path={"/product/add"} element={<AddProduct />} />
              <Route  path={"/product/:id"} element={<ProductDetails />} />
              <Route  path={"/product/edit/:id"} element={<EditProduct />} />
          </Routes>

        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
