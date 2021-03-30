import React, { useEffect, useState } from "react";
import Event from "../Event/Event";

const Home = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="row">
      {event.map((items) => (
        <Event key={items._id} event={items}></Event>
      ))}
    </div>
  );
};

export default Home;
