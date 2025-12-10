import { createRoot } from "react-dom/client";
import { ExampleCombobox } from "./components/combobox";
import "./tailwind.css";

const root = createRoot(document.getElementById("root")!);

root.render(<ExampleCombobox />);
