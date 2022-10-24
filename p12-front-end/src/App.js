import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";



const queryClient = new QueryClient(); 

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <div className="app--content">
            <SideBar />
            <Dashboard />
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
