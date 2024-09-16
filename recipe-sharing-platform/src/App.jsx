import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div className="bg-emerald-100 w-screen h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="form" element={<AddRecipeForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
