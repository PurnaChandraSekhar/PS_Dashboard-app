import useQueryHook from "../../../Hooks/useQuery";
import './Team.css'

const Team = () => {
  const { isLoading, data, isError } = useQueryHook()
 
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>Something went wrong</h2>
  }

  return (
    <div className="list-container">
      {data?.map((item) => (
        <h2 className="list-item" key={item.id} >{item.name}</h2>
      ))}
    </div>
  )
};

export default Team;
