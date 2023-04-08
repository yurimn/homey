import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Release, Description, Error } from ".";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Description />} />
				<Route path="/description" element={<Description />} />
				<Route path="/release" element={<Release />} />
				<Route path="/error" element={<Error />} />
				<Route path="*" element={<Navigate to="/error" />} />
			</Routes>
		</div>
	);
}

export default App;

