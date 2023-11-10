import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const Form3 = ({ decrimentStep, setFormData }) => {
  const navigate = useRouter();

  const scheme = z.object({
    fullName: z.string().min(5).max(50),
    email: z.string().email(),
    address: z.string().max(50),
    city: z.string(),
    country: z.string(),
    state: z.string(),
    zipcode: z.number(),
  });

  const submitData = (data) => {
    setFormData((prev) => [...prev, data]);
    navigate.push("/dashboard");
  };

  const { register, handleSubmit } = useForm({ resolver: zodResolver(scheme) });

  return (
    <>
      <form
        className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 p-8"
        onSubmit={handleSubmit(submitData)}
      >
        <div className="md:col-span-5">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            {...register("fullName")}
          />
        </div>

        <div className="md:col-span-5">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            placeholder="email@domain.com"
            {...register("email")}
          />
        </div>

        <div className="md:col-span-3">
          <label htmlFor="address">Address / Street</label>
          <input
            type="text"
            name="address"
            id="address"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            {...register("address")}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            {...register("city")}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="country">Country / region</label>
          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
            <input
              name="country"
              id="country"
              placeholder="Country"
              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              {...register("country")}
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="state">State / province</label>
          <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
            <input
              name="state"
              id="state"
              placeholder="State"
              className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
              {...register("state")}
            />
          </div>
        </div>

        <div className="md:col-span-1">
          <label htmlFor="zipcode">Zipcode</label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            {...register("zipcode", { valueAsNumber: true })}
          />
        </div>

        <div className="md:col-span-5 text-right">
          <div className="inline-flex items-end gap-2">
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
              onClick={decrimentStep}
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form3;
