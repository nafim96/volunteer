import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";


const AddEvent = () => {
    const [imageURL, setImageURL]= useState(null)
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    const eventData={
        name: data.name,
        imageURL: imageURL
    }
    const url= `http://localhost:5000/addEvent`
    console.log(eventData);
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(eventData)
    })
    .then(res=>{
        console.log('get data from body', res);
    })
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "75aa18a6f52d1018d1e5891f666c7af5");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue="Event Upload" ref={register} />
        <br />
        <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvent;
