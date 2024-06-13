import { Navbar, Footer} from "./components/index";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
