import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form2 = ({ incrementStep, decrimentStep, setFormData }) => {
  const scheme = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.number(),
    message: z.string(),
  });

  const submitData = (data) => {
    setFormData((prev) => [...prev, data]);
    incrementStep();
  };

  const { register, handleSubmit } = useForm({ resolver: zodResolver(scheme) });

  return (
    <div className="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
      <form className="space-y-4 text-sm" onSubmit={handleSubmit(submitData)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm border bg-gray-50"
            placeholder="Name"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm border bg-gray-50"
              placeholder="Email address"
              type="email"
              id="email"
              {...register("email")}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm border bg-gray-50"
              placeholder="Phone Number"
              type="tel"
              id="phone"
              {...register("phone", { valueAsNumber: true })}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="w-full rounded-lg border-gray-200 p-3 text-sm border bg-gray-50"
            placeholder="Message"
            rows="8"
            id="message"
            {...register("message")}
          ></textarea>
        </div>

        <div className="m-2 flex items-center gap-2 float-right">
          <button
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
            onClick={decrimentStep}
          >
            Previous
          </button>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
