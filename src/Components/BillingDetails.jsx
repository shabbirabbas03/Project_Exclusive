import React from "react";
import { BillingDetailsSchema } from "../constant/validationSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const BillingDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(BillingDetailsSchema),
  });

  const submit = (values) => {
    console.log(values);
    reset();
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-black text-4xl tracking-wide font-medium py-2">
          Billing Details
        </h1>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <label className="form-control">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full md:w-[470px] md:h-12 ${
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
              <span className="label-text">Company Name</span>
            </div>
            <input
              type="text"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full md:w-[470px] md:h-12 ${
                errors.name && "input-error"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <div className="label">
                <span className="label-text-alt text-primary">
                  {errors.name.message}
                </span>
              </div>
            )}
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Street Address</span>
            </div>
            <input
              type="text"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full md:w-[470px] md:h-12 ${
                errors.name && "input-error"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <div className="label">
                <span className="label-text-alt text-primary">
                  {errors.name.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Apartment,floor,etc (optional)</span>
            </div>
            <input
              type="text"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full md:w-[470px] md:h-12 ${
                errors.name && "input-error"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <div className="label">
                <span className="label-text-alt text-primary">
                  {errors.name.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Town/City</span>
            </div>
            <input
              type="text"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full md:w-[470px] md:h-12 ${
                errors.namepassword && "input-error"
              }`}
              {...register("name")}
            />
            {errors.namepassword && (
              <div className="label">
                <span className="label-text-alt text-primary">
                  {errors.name.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Phone Number</span>
            </div>
            <input
              pattern="+91-[0-9]{4}[0-9]{2}[0-9]{4}"
              type="tel"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full md:w-[470px] md:h-12 ${
                errors.number && "input-error"
              }`}
              {...register("number")}
            />
            {errors.number && (
              <div className="label">
                <span className="label-text-alt text-primary">
                  {errors.number.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email Address</span>
            </div>
            <input
              type="email"
              className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full md:w-[470px] md:h-12 ${
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
        </form>
      </div>
    </div>
  );
};

export default BillingDetails;
