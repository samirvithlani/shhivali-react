import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormHandling1 = () => {
    const [style, setstyle] = useState("black")
    //useForm() hook
    //register - to register input -- object
    //handleSubmit - to handle form submission -- function
    //errors - to display errors -- object
    //watch - to watch input value -- function
    //reset - to reset form -- function
    const {register,handleSubmit} = useForm()
    const submitHandler = (data) => {

        console.log(data)
    }
    const colorHandler = (e) => {
        console.log(e.target.value)
        setstyle(e.target.value)
    }
  return (
    <div>
        <h1 style={{color:style}}>FORM</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name")}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")}></input>
            </div>
            <div>
                <label htmlFor="gender">Gender</label> <br />
                MALE : <input type="radio" value="male" name ="gender" {...register("gender")}></input>
                <br />
                FEMALE : <input type="radio" value="female" name ="gender" {...register("gender")}></input>
            </div>
            <div>
                <label htmlFor="skills">Skills</label>
                REACT : <input type="checkbox" value="react" name="skills" {...register("skills")}></input><br />
                ANGULAR : <input type="checkbox" value="angular" name="skills" {...register("skills")}></input><br />
                VUE : <input type="checkbox" value="vue" name="skills" {...register("skills")}></input>
                Node : <input type="checkbox" value="node" name="skills" {...register("skills")}></input>
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <select {...register("country")}>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <input type="color" {...register("color")} onChange={(e)=>{colorHandler(e)}}></input>
            </div>
            <div>
                <input type="submit" value="Submit"></input>
            </div>
        </form>
    </div>
  )
}
