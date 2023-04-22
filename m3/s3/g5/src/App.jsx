import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playbar from "./components/Playbar";
import IndexMain from "./components/IndexMain";
import Album from "./components/Album";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<IndexMain/>}/>
				<Route path="/album/:id" element={<Album />} />
			</Routes> 
			<Playbar/>
		</BrowserRouter>
	);
}

export default App;
