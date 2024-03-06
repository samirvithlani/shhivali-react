import React from 'react'
import { useForm } from 'react-hook-form'

export const FormHandling2 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log(errors)
    const submitHandler = (data) => {
        console.log("data...",data)
    }
    const validationSchema = {
        name:{
            required:{
                value:true,
                message:"name is required.."
            }
        },
        age:{
            required:{
                value:true,
                message:"age is required.."
            },
            min:{
                value:18,
                message:"age should be greater than 18"
            },
            max:{
                value:60,
                message:"age should be less than 60"
            }
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
    <div>
        <label htmlFor="name">Name</label>
        {/* <input type="text" {...register("name",{required:{value:true,message:"name is required.."}})}></input> */}
        <input type="text" {...register("name",validationSchema.name)}></input>
        {
            errors.name && <span>{errors.name.message}</span>
        }
    </div>
    <div>
        <label htmlFor="age">Age</label>
        <input type="text" {...register("age",validationSchema.age)}></input>
        {
            errors.age && <span>{errors.age.message}</span>
        }
    </div>
    <div>
        <input type ="submit" value="submit"></input>
    </div>
        </form>
    </div>
  )
}
