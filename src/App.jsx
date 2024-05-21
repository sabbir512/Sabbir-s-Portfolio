import { Navbar, Footer} from "./components/index";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
