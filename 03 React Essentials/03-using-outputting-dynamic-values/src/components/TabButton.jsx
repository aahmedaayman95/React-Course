export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TabButton is rendering");
  function handleClick() {
    console.log("Function is called", { children });
  }
  return (
    <button className={isSelected ? "active" : ""} onClick={onSelect}>
      {children}
    </button>
  );
}
