import React from "react";
import { AccountSchema } from "../constant/validationSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Account = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(AccountSchema),
  });

  const submit = (values) => {
    console.log(values);
    reset();
  };
  return (
    <div className="flex flex-wrap justify-evenly items-start">
      <div>
        <h1 className="text-base font-medium py-3">Manage My Account</h1>
        <div className="ms-8 text-gray-400">
          <p>My Profile</p>
          <p>Address Book</p>
          <p>My Payment Options</p>
        </div>
        <h1 className="text-base font-medium py-3">My Orders</h1>
        <div className="ms-8  text-gray-400">
          <p>My Returns</p>
          <p>My Cancellations</p>
        </div>
        <h1 className="text-base font-medium py-3">My WishList</h1>
      </div>
      <div>
        <h1 className="text-primary text-xl font-medium py-2">
          Edit Your Profile
        </h1>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <div className="row flex justify-between items-center gap-12">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                placeholder="Your name"
                className={`input input-bordered border-slate-100 rounded bg-gray-100 md:w-80 md:h-12 ${
                  errors.firstname && "input-error"
                }`}
                {...register("firstname")}
              />
              {errors.firstname && (
                <div className="label">
                  <span className="label-text-alt text-primary">
                    {errors.firstname.message}
                  </span>
                </div>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">last Name</span>
              </div>
              <input
                type="text"
                placeholder="Your name"
                className={`input input-bordered border-slate-100 rounded bg-gray-100 md:w-80 md:h-12 ${
                  errors.lastname && "input-error"
                }`}
                {...register("lastname")}
              />
              {errors.lastname && (
                <div className="label">
                  <span className="label-text-alt text-primary">
                    {errors.lastname.message}
                  </span>
                </div>
              )}
            </label>
          </div>
          <div className="row flex justify-between items-center gap-12">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="Your email"
                className={`input input-bordered border-slate-100 rounded bg-gray-100 md:w-80 md:h-12 ${
                  errors.email && "input-error"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <div className="label">
                  <span className="label-text-alt text-primary">
                    {errors.email.message}
                  </span>
                </div>
              )}
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <input
                type="Kingston, 5236, United State"
                placeholder="Your address"
                className={`input input-bordered border-slate-100 rounded bg-gray-100 md:w-80 md:h-12 ${
                  errors.address && "input-error"
                }`}
                {...register("address")}
              />
              {errors.address && (
                <div className="label">
                  <span className="label-text-alt text-primary">
                    {errors.address.message}
                  </span>
                </div>
              )}
            </label>
          </div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Current Passwod</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 md:w-full md:h-12 ${
                errors.currentpassword && "input-error"
              }`}
              {...register("currentpassword")}
            />
            {errors.currentpassword && (
              <div className="label">
                <span className="label-text-alt text-primary">
                  {errors.currentpassword.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">New Password</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 md:w-full md:h-12 ${
                errors.newpassword && "input-error"
              }`}
              {...register("newpassword")}
            />
            {errors.newpassword && (
              <div className="label">
                <span className="label-text-alt text-primary">
                  {errors.newpassword.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Confirm New Password</span>
            </div>
            <input
              type="password"
              placeholder="Password"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 md:w-full md:h-12 ${
                errors.confirmpassword && "input-error"
              }`}
              {...register("confirmpassword")}
            />
            {errors.confirmpassword && (
              <div className="label">
                <span className="label-text-alt text-primary">
                  {errors.confirmpassword.message}
                </span>
              </div>
            )}
          </label>
          <div className="space-x-8">
            <button type="reset" className="btn btn-ghost text-base">
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary text-white text-base font-medium px-10 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
