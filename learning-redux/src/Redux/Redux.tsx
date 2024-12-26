import { useState } from "react";
import { useGetAllProductsQuery } from "./productApi";

function Redux() {
  const [price, setPrice] = useState<ProductsData[]>([]);
  const { data: myData = null, isLoading } = useGetAllProductsQuery();
  console.log(myData);

  //Checking the Loading State
  if (isLoading) {
    return <h1>Loading Products...</h1>;
  }

  if (!myData) return null;
  return (
    <div>
      <h1>Redux</h1>
      <ol>
        {/*Ignore what VS Code is saying. What is happening is we are going into the products which has an array of products*/}
        {myData.products.map((prod) => (
          <li key={prod.id}>
            <h5>{prod.title}</h5> -<h6>{prod.price}</h6>
            <button>Add</button>
            <p>{price}</p>
            <button>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Redux;
