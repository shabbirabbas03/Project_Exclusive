import React from "react";
import { LoginSchema } from "../constant/validationSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const submit = (values) => {
    console.log(values);
    reset();
  };
  return (
    <div className="flex justify-between items-center bg-white py-10 flex-wrap">
      <div>
        <img src="Account/signup.svg" alt="signup" />
      </div>
      <div className="w-[395px] h-full mx-auto overflow-hidden space-y-8">
        <h2 className="text-start text-4xl font-medium text-black tracking-wide">
          Log in to Exclusive
        </h2>
        <p className="text-start text-black text-base">
          Enter your details below
        </p>
        <form
          onSubmit={handleSubmit(submit)}
          method="POST"
          action="#"
          className="space-y-5"
        >
          <div className="relative">
            <input
              placeholder="eduu@gamil.com"
              className={`peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-primary ${
                errors.email && "input-primary"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <div aria-live="polite" className="label">
                <span className="label-text-alt text-primary">
                  {errors.email.message}
                </span>
              </div>
            )}
            <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">
              Email or Phone Number
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="********"
              className={`peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-primary ${
                errors.password && "input-primary"
              }`}
              {...register("password")}
            />
            {errors.password && (
              <div aria-live="polite" className="label">
                <span className="label-text-alt text-primary">
                  {errors.password.message}
                </span>
              </div>
            )}
            <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">
              Password
            </label>
          </div>
          <div className="flex justify-between items-center py-6">
            <button
              type="submit"
              className="btn btn-primary text-white px-10 py-3 rounded"
            >
              Log in
            </button>
            <h1 className="text-primary text-base link-hover">
              Forget Password?
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
