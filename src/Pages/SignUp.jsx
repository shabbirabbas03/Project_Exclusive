import React from "react";
import { SignUpSchema } from "../constant/validationSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(SignUpSchema),
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
          Create an account
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
              type="text"
              placeholder="Type here"
              className={`peer h-10 w-full border-b-2 border-gray-300 text-black bg-transparent placeholder-transparent focus:outline-none focus:border-primary ${
                errors.name && "input-primary"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <div aria-live="polite" className="label">
                <span className="label-text-alt text-primary">
                  {errors.name.message}
                </span>
              </div>
            )}
            <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm">
              Name
            </label>
          </div>
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
          <div className="space-y-4">
            <button
              className="w-full h-14 rounded text-white btn-primary btn border-none font-medium text-base"
              type="submit"
            >
              Create Account
            </button>
            <button className="flex items-center justify-center w-full h-14 border-2 text-center text-base font-semibold rounded-md">
              <svg
                viewBox="0 0 24 24"
                height="25"
                width="25"
                y="0px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z"
                  fill="#F44336"
                ></path>
                <path
                  d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z"
                  fill="#2196F3"
                ></path>
                <path
                  d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z"
                  fill="#FFC107"
                ></path>
                <path
                  d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z"
                  fill="#00B060"
                ></path>
                <path
                  opacity=".1"
                  d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z"
                ></path>
              </svg>
              <span className="ml-2">Sign up with Google</span>
            </button>
            <div className="text-center text-gray-600 py-8">
              Already have an account?
              <a
                className="text-gray-600 hover:underline text-base ms-4"
                href="#"
              >
                Log in
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
