import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header, HomeContainer, CreateContainer, Footer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/Reducer";

function App() {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <div className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<HomeContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
