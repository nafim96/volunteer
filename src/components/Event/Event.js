import React, { useState } from "react";

const Event = (props) => {
  const { name, _id, imageURL } = props.event;
  const [updateEvent, setUpdateEvent] = useState({});
  console.log('get event',updateEvent);
  const handleDeleteEvent = (id) => {
    fetch(`http://localhost:5000/deleteEvent/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setUpdateEvent(result);
      });
  };
  return (
    <div className="col-md-3">
      <img style={{ height: "300px" }} src={imageURL} alt="" />
      <h4>{name}</h4>
      <p>
        <button onClick={() => handleDeleteEvent(_id)}>Delete Event</button>
      </p>
    </div>
  );
};

export default Event;
