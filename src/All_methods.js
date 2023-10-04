// //get request using .then 
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const App = () => {
// const [products, setProducts] = useState([]);
// useEffect(() => {
// //get all products details with GET method
// axios
// .get("https://dummyjson.com/products")
// .then((response) => setProducts(response.data.products));
// }, []);
// return (
// <>
// {products.map((product, index) => {
// return (
// <h3 key={index}>
// {product.title} - ${product.price}
// </h3>
// );
// })}
// </>
// );
// };
// export default App;
// ---------------------------------------------------------------------------
// //post request using .then 


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const App = () => {
// const [products, setProducts] = useState([]);
// useEffect(() => {
// //Add new product with POST method
// const product = { title: "Apple 13", price: 799, ... }
// axios
// .post("https://dummyjson.com/products/add", product)
// .then((response) => alert("Product added Successfully!!"););
// }, []);
// return (
// <>
// {products.map((product, index) => {
// return (
// <h3 key={index}>
// {product.title} - ${product.price}
// </h3>
// );
// })}
// </>
// );
// };
// export default App;

//---------------------------------------------------------------------

// //put request


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const App = () => {
// const [products, setProducts] = useState([]);
// useEffect(() => {
// //update the product details with PUT method
// const product = { title: "Apple 13", price: 899, ... }
// axios
// .put("https://dummyjson.com/products/1", product)
// .then((response) => alert("Product Details Updated Successfully!!"););
// }, []);
// return (
// <>
// {products.map((product, index) => {
// return (
// <h3 key={index}>
// {product.title} - ${product.price}
// </h3>
// );
// })}
// </>
// );
// };
// export default App;
//-----------------------------------------------------------------------

// //Delete request

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const App = () => {
// const [products, setProducts] = useState([]);
// useEffect(() => {
// //delete the product-1 with DELETE method
// axios
// .delete("https://dummyjson.com/products/1")
// .then((response) => alert("Product Deleted Successfully!!"););
// }, []);
// return (
// <>
// {products.map((product, index) => {
// return (
// <h3 key={index}>
// {product.title} - ${product.price}
// </h3>
// );
// })}
// </>
// );
// };
// export default App;