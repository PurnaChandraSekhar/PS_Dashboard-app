import { useContext } from "react";
import { DashBoardContext } from "../../../Context/DashboardContext";
import { TextArea } from "../../Atoms";

import "./Card.css";

const Card = () => {
  const { dashboardData, isEditable } = useContext(DashBoardContext);
  return (
    <section className="card-container">
      {dashboardData != null &&
        dashboardData.map((item) => (
          <div className="card" key={item.id}>
            {isEditable ? <TextArea data={item} /> : <h3 className="card-heading">{item.heading}</h3>}
            <hr className="card-hr" />
            <main>{item.value}</main>
          </div>
        ))}
    </section>
  );
};

export default Card;
