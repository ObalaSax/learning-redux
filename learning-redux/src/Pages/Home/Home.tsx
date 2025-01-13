import CartInput from "../../Components/CartInput";
import CartList from "../../Components/CartList";
import { useGetAllProductsQuery } from "../../Features/DataApi";

function Home() {
  const { data: myProducts, isLoading } = useGetAllProductsQuery();
  console.log(myProducts);

  if (isLoading) {
    return (
      <div className="home-loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="home">
      <div className="home-container">
        <h1>Home Page</h1>
        <CartInput />
        <CartList />
      </div>
    </div>
  );
}

export default Home;
