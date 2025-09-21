import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About/About";
import Project from "./Pages/Project/Project/Project";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Contact from "./Pages/Contact/Contact/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "about",
				element: <About></About>,
			},
			{
				path: "projects",
				element: <Project></Project>,
			},
			{
				path: "contact",
				element: <Contact></Contact>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</HelmetProvider>
	</StrictMode>
);
