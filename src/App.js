import AppRouter from "./AppRouter/AppRouter";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setWidthPage } from "./store/reducers/UsersReducer";

function App() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
      dispatch(setWidthPage(width));
    };
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [width]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
