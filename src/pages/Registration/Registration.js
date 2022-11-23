import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InputForm from "../../components/shared/InputForm";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl underline">Register Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <InputForm
            type="text"
            placeholder="Enter Your Name"
            register={register}
            name="name"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <InputForm
            type="email"
            placeholder="Enter Your Email"
            register={register}
            name="email"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Gender</span>
          </label>
          <select className="select select-bordered w-full max-w-xs" {...register("gender")}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Mobile</span>
          </label>
          <InputForm
            type="number"
            placeholder="Enter Your Mobile Number"
            register={register}
            name="mobile"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <InputForm
            type="password"
            placeholder="Type Your Password"
            register={register}
            name="password"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <InputForm
            type="password"
            placeholder="Type Your Password Again"
            register={register}
            name="confirmPassword"
          />
        </div>
        <input className="btn btn-accent my-2" type="submit" value="Register" />
      </form>
      <p>Already Have an Account? <Link to='/login'>Login Here</Link></p>
    </div>
  );
};

export default Registration;
