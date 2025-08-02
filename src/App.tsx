import { useSelector } from "react-redux";
import { getUsersState } from "./selectors";

function App() {
  const { list, isLoading ,pagination } = useSelector(getUsersState);

  console.log(list, isLoading, pagination);
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
