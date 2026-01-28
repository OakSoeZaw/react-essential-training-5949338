import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const [firstAnimal, second, third] = ["giraffe", "zebra", "bear"];
console.log(firstAnimal)

createRoot(document.getElementById("root")).render(<App />);
