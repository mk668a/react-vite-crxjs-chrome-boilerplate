import React from "react";
import ReactDOM from "react-dom/client";
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

ReactDOM.createRoot(index).render(
	<React.StrictMode>
		<Options />
	</React.StrictMode>
);
