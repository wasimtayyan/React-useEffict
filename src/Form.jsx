import "./styles.css";

// import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ sendTheNumUp }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => sendTheNumUp(data.number);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label>Insert number of cute dogs</label>
        <input {...register("number")} type="text" className="form-control" />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          WOOF!
        </button>
      </div>
    </form>
  );
}
