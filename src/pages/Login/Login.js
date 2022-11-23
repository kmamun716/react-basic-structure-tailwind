import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InputForm from "../../components/shared/InputForm";
import { login } from "../../redux/actions/authAction";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  let navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (auth.isLogin) {
      navigate(from, { replace: true });
    }
  }, [auth, navigate, from]);
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
          <InputForm
            type="password"
            placeholder="Type Your Password"
            register={register}
            name="password"
          />
        </div>
        <input className="btn btn-accent my-2" type="submit" value="Login" />
      </form>
      <p>Not Have any Account? <Link to='/register'>Register Here</Link></p>
    </div>
  );
};

export default Login;
