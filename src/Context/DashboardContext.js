import { createContext, useState } from "react";

export const DashBoardContext = createContext(null);

export const DashboardContextProvider = ({ children }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [dashboardData, setDashboardData] = useState([
    {
      id: 1,
      heading: "Account Balance",
      value: "$20,000",
    },
    {
      id: 2,
      heading: "Pending",
      value: "$2,000",
    },
    {
      id: 3,
      heading: "Processed",
      value: "$5,000",
    },
    {
      id: 4,
      heading: "Net Worth",
      value: "$50,000",
    },
    {
      id: 5,
      heading: "Investments",
      value: "$10,000",
    },
    {
      id: 6,
      heading: "Cash",
      value: "$40,000",
    },
  ]);

  const values = {
    isEditable,
    setIsEditable,
    dashboardData,
    setDashboardData,
  };

  return (
    <DashBoardContext.Provider value={values}>
      {children}
    </DashBoardContext.Provider>
  );
};
