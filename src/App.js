import { useContext } from "react";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";
import { AppContext, useGlobalContext } from "./context/context";



const App = () => {

  const data = useGlobalContext();
  return (
    <div>

      <h1>{ data }</h1>
      <Search />
      <Stories />
      <Pagination />
    </div>
  )
};

export default App;