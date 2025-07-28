import React,{ useState } from "react";
import './Project.css';

export default function SearchProduct({ onFilter }) {

    const [searchItem, setSearchItem] = useState("");
    const [category, setCategory] = useState("all");
    
    const handleSearchChange = (e) => {
        setSearchItem(e.target.value);
    };
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter({searchItem, category});  
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Search Products</h2>
            <div className="search-header">

                <input type="text" value={searchItem} onChange={handleSearchChange} placeholder="Search by name"/>

                <select value={category} onChange={handleCategoryChange} placeholder="Select Category">
                    <option value="all">All</option>
                    <option value="shoes">Shoes</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                    <option value="furniture">Furniture</option>
                </select>
            </div>
            
            <button type="submit">Filter</button>
            <hr></hr>
        </form>
    );
}

// Product List
export function ProductList({ filtered }) {
  
  if (filtered.length === 0) {
    return <p>No products found.</p>;
  }

  const filteredProducts = filtered.map((product) => (
        <li key={product.id}>
          <strong>{product.name}</strong> - {product.category} - R{product.price}
        </li>
      ));

  return (
    <ul>
      {filteredProducts}
    </ul>
  );
}

