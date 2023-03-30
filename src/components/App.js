import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Home_items from "../pages/Home_items";
import "../translate/i18n";
import Aksesuary from "../pages/Aksesuary";
import Goods from "../pages/Goods";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route path="home" element={<Home />} />
					<Route path="/home-items" element={<Home_items />} />
					<Route path="/accessories" element={<Aksesuary />} />
					<Route path="/goods" element={<Goods />} />
					<Route path="/cart" element={<Cart />} />
					<Route
						path="*"
						element={
							<div style={{ textAlign: "center" }}>
								<img
									style={{ width: "1000px" }}
									src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg"
									alt=""
								/>
							</div>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
};
export default App;
