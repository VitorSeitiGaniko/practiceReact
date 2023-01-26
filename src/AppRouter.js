import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./Router/Footer";
import Haeder from "./Router/Haeder";
import Home from "./Router/Home";
import NotFound from "./Router/NotFound";
import Sobre from "./Router/Sobre";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Haeder />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="sobre" element={<Sobre />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default AppRouter;
