import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import MovieDialog from "./components/MovieDailog";

function App() {
  return (
    <div className="App">
      <Body />
      <Toaster />
      <MovieDialog />
    </div>
  );
}

export default App;
