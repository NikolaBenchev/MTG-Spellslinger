import { useDispatch, useSelector } from "react-redux";
import { getUsersState } from "./selectors";
import { useEffect } from "react";
import { getUsers } from "./features/users/users.async";
import type { AppDispatch } from "./store/store";
import UserTable from "./components/User/UserTable";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, isLoading, pagination } = useSelector(getUsersState);

  useEffect(() => {
    dispatch(getUsers(""));
  }, [dispatch]);

  return (
    <>
      <h1>Hello World</h1>
      {!isLoading && <UserTable dataSource={list}/>}
    </>
  )
}

export default App
