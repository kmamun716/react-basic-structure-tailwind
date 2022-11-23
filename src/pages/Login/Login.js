import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import InputForm from "../../components/shared/InputForm";
import { login } from "../../redux/actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl underline">Login Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Type Your Password"
            className="input input-bordered w-full max-w-xs"
            {...register("password", { required: true })}
          />
        </div>
        <input className="btn btn-accent my-2" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
