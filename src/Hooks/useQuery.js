import { useQuery } from "react-query";

const useQueryHook = () => {
  const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if(!res.ok) {
        throw new Error('Something went wrong!')
      }
      return res.json()
  };

  const { isLoading, data, isError } = useQuery("getUsersList", getUsers);
  
  return {
    isLoading,
    data,
    isError
  };
};

export default useQueryHook;
