import React from 'react';
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("testForm"));

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="Your name" {...register("testForm")} />

      <input defaultValue="Your email" {...register("fieldRequired", { required: true})} />

      {errors.fieldRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

export default ReactForm;