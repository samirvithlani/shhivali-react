import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const UserUpdate = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: async () => {
      const user = await axios.get(
        `https://node5.onrender.com/user/user/${id}`
      );
      console.log(user.data);
      return {
        name: user.data.data.name,
        age: user.data.data.age,
        email: user.data.data.email,
        isActive: user.data.data.isActive,
      };
    },
  });
  const submitHandler = async (data) => {
    console.log(data);
    //put..
  };

  return (
    <div>
      <h1>USER UPDATE</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" {...register("age")}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")}></input>
        </div>
        <div>
          ACTIVE :{" "}
          <input
            type="radio"
            name="status"
            value="true"
            {...register("isActive")}
          ></input>{" "}
          <br />
          NOT ACTIVE :{" "}
          <input
            type="radio"
            name="status"
            value="false"
            {...register("isActive")}
          ></input>{" "}
          <br />
        </div>
        <div>
          <input type="submit" value="Add User"></input>
        </div>
      </form>
    </div>
  );
};
