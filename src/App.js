import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BierDetail from "./Components/BierDetail/BierDetail";

import BierAuswahl from "./Pages/BierAuswahl";
import Home from "./Pages/Home";
import BierRandom from "./Pages/BierRandom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/biere" element={<BierAuswahl />} />
					<Route path="/biere/:id" element={<BierDetail />} />
					<Route path="/random" element={<BierRandom />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
