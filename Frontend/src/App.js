
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import AllRoutes from "./components/Routes/AllRoutes";

function App() {

  
  return (
    <div>
      <BrowserRouter>
        <AllRoutes></AllRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
