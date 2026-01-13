import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";


export default function App() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <main>
        {/* In Next.js, we just place the component. 
            No <Routes> or <Route> needed! */}
        <Home />
      </main>

    </div>
  );
}