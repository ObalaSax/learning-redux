//Store - Like interfaces
//Actions- has a type and payload(any data like price or amount. Can be defined in anyway)
//Reducer - takes an action then depending on the type of the actionit updates  the store indirectly

import Counter from "./Counter";

function Redux() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default Redux;
