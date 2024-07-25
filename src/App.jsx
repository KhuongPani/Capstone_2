// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";
// import Banner from "./components/Banner/Banner";
// import Product from "./components/Product/Product";
// import ProductDetail from "./components/ProductDetail/ProductDetail";

// function App() {
//   return (
//     <Router>
//       <div className='app'>
//         <Header />
//         <Navbar />
//         <Banner />
//         <Switch>
//           <Route exact path="/" component={Product} />
//           <Route path="/product/:id" component={ProductDetail} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Product from './components/Product/Product';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <Router>
        <Header path="/" element={<Header />} />
        <Navbar />
        <Banner />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

