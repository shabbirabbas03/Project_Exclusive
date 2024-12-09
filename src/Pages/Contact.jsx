import React from "react";
import { ContactSchema } from "../constant/validationSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  const submit = (values) => {
    console.log(values);
    reset();
  };
  return (
    <div className="py-10 space-y-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="space-y-10">
          <div className="flex rounded-lg flex-col">
            <div className="flex items-center py-4">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <img src="Contact/icons-phone.svg" alt="icons-phone" />
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Call To Us
              </h2>
            </div>
            <p className="leading-relaxed text-base py-4">
              We are available 24/7, 7 days a week.
            </p>
            <p className="">Phone: +8801611112222</p>
          </div>
          <hr className="w-[270px]" />
          <div className="flex rounded-lg h-full flex-col">
            <div className="flex items-center py-4">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <img src="Contact/icons-mail.svg" alt="icons-mail" />
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Write To Us
              </h2>
            </div>
            <p className="leading-relaxed text-base py-4">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="">Emails: customer@exclusive.com</p>
            <p className="">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="space-y-6 col-span-1 md:col-span-1 lg:col-span-2">
          <form onSubmit={handleSubmit(submit)}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full h-12 ${
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
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full h-12 ${
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
                  <span className="label-text">Phone Number</span>
                </div>
                <input
                  pattern="+91-[0-9]{4}[0-9]{2}[0-9]{4}"
                  type="tel"
                  placeholder="Your Number"
                  className={`input input-bordered border-slate-100 rounded bg-gray-100 w-full h-12 ${
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
            </div>
            <label className="form-control py-8">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                type="text"
                placeholder="Type here"
                className={`input input-bordered border-slate-100 rounded bg-gray-100 py-2 w-full h-52 ${
                  errors.message ? "input-error" : ""
                }`}
                aria-invalid={!!errors.message}
                {...register("message")}
              />
              {errors.message && (
                <div className="label">
                  <span className="label-text-alt text-primary">
                    {errors.message.message}
                  </span>
                </div>
              )}
            </label>
            <button
              type="submit"
              className="btn btn-primary text-white text-base font-medium px-10 rounded mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
