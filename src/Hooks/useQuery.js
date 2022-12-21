import { useQuery } from "react-query";

const useQueryHook = () => {

  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  };

  const { isLoading, data } = useQuery("getUsersList", getUsers);
  
  return {
    isLoading,
    data
  };
};

export default useQueryHook;
