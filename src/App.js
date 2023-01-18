import { BrowserRouter  as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Forgotpassword from "./pages/Forgotpassword";
import Header from "./Components/Header";



function App() {
  return (
    <>
      <Router>
        <Header>
          
        </Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Offers" element={<Offers/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
