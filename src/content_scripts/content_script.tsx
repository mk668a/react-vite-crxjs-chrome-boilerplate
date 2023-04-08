import React from "react";
import ReactDOM from "react-dom/client";
import Button from "../components/Button";

function ContentScript() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>ContentScript</h1>
				<Button>button</Button>
			</header>
		</div>
	);
}

const index = document.createElement("div");
index.id = "content-script";
document.body.appendChild(index);

ReactDOM.createRoot(index).render(
	<React.StrictMode>
		<ContentScript />
	</React.StrictMode>
);
