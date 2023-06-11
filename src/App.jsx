import { useEffect, useState } from "react";
import ShoppingList from "./DogsList";
import Form from "./Form";
import "./styles.css";

export default function App() {
  // Use useEffect to fetch the dogs here
  const [imagesUrl, setImagesUrl] = useState("");
  const [num, setNum] = useState(1);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then((res) => res.json())
      .then((data) => setImagesUrl(data.message));

    console.log("run");
  }, [num]);
  
  function sendTheNumUp(num) {
    setNum(num);
  }
  return (
    <div className="card">
      <Form sendTheNumUp = {sendTheNumUp} />
      <ShoppingList photo ={imagesUrl} />
    </div>
  );
}
