import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "./components/Button";

function Options() {
	console.log(`this is options page`);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Title</h1>
				<Button>button</Button>
			</header>
		</div>
	);
}

const index = document.createElement("div");
index.id = "options";
document.body.appendChild(index);

createRoot(index).render(
	<StrictMode>
		<Options />
	</StrictMode>
);
