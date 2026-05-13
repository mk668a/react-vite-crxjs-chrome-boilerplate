import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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

createRoot(index).render(
	<StrictMode>
		<ContentScript />
	</StrictMode>
);
