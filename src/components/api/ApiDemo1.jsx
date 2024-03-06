import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {
    console.log(data);
    // const userObj = {
    //     name: data.name,
    //     age: data.age,
    //     email: data.email,
    //     isActive: data.isActive === "true" ? true : false
    // }

    const userObj = Object.assign(data, {
      isActive: data.isActive === "true" ? true : false,
    });
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    console.log(res.data);
    console.log(res.status);
    if (res.status === 201) {
      // alert("User Added Successfully")
      toast.success("User Added succesfully...!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      // alert("Something went wrong")
    }
  };

  // const addData = async () => {
  //     const userObj = {
  //         name: "Rahul",
  //         age: 25,
  //         email: "rahul@gmail.com",
  //         isActive: true
  //     }

  // }
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>API DEMO 1</h1>

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
