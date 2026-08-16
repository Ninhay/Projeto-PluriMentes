import useWeightedScroll from "@/hooks/useWeightedScroll";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  useWeightedScroll();

  return <AppRoutes />;
}

export default App;
