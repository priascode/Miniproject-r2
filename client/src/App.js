import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Featured from "./components/Main/Featured";
import Arrival from "./components/Main/Arrival";
import Home from "./components/Main/Home";
import Reviews from "./components/Main/Reviews";


function App() {
	const user = localStorage.getItem("token");

	return (
	
		
		<Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/books" element={<Featured />} />
			<Route path="/add" element={<Arrival />} />
			<Route path="/chats" element={<Reviews />} />
		</Routes>
	);
}

export default App;
