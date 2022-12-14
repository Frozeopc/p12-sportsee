import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserBoard from "./pages/UserBoard";
import Error from "./pages/Error";





function App() {
  return (
    <div className="App">
            <Router>
               
                <Routes>
                   <Route exact path="/" element={<Home />} /> 
                    <Route path="/user/:userId" element={<UserBoard />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </Router>
        </div>
  );
}

export default App;
