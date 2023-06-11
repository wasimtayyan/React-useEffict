import "./styles.css";
export default function ShoppingList({photo}) {
    
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>Cute Dogs 🐶</h3>

      {Array.from(photo).map((el, index) => (
        <img key={index} src={el} alt="dog" className="mb-3"/>
      ))}
    </div>
  );
}
