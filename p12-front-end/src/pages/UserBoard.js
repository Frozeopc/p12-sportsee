import React from "react";
import { BrowserRouter, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import Dashboard from "../Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import "./css/userboard.css";



const queryClient = new QueryClient(); 

function UserBoard() {
    const{userId}=useParams();
  return (
    <QueryClientProvider client={queryClient}>
      
        <div className="app">
          <NavBar />
          <div className="app--content">
            <SideBar />
            <Dashboard userId={userId} />
          </div>
        </div>
      
    </QueryClientProvider>
  );
}

export default UserBoard;