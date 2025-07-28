import React,{ useState } from 'react'
import './App.css'
import SearchProduct, { ProductList } from './Project.jsx';


const products = [
  { id: 1, name: "Blue T-Shirt", category: "clothing", price: 150, inStock: true },
  { id: 2, name: "Jeans", category: "clothing", price: 300, inStock: false },
  { id: 3, name: "Red Sneakers", category: "shoes", price: 500, inStock: true },
  { id: 4, name: "Wireless Mouse", category: "accessories", price: 250, inStock: true },
  { id: 5, name: "Office Chair", category: "furniture", price: 1200, inStock: false },  
];

export default function App() {
  // State hooks will be added here 

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilter = ({searchItem, category}) => {
    const lowerSearch = searchItem.toLowerCase();
    const lowerCategory = category.toLowerCase();

    const filtered = products.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(lowerSearch, lowerCategory);
      const matchesCategory = category === "all" || product.category === category;
      return matchesName && matchesCategory;
    });

    setFilteredProducts(filtered);
  };

  
  return ( 
    <div className="App">

      <h1>Product Catalog</h1> 
      <SearchProduct onFilter={handleFilter}/>
      <ProductList filtered={filteredProducts} />

    </div> 
  );
}

