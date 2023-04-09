import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Description, Error } from ".";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Description />} />

				<Route path="/error" element={<Error />} />
				<Route path="*" element={<Navigate to="/error" />} />
			</Routes>
		</div>
	);
}

export default App;
