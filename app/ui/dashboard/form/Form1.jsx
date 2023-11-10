import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const Form1 = ({ incrementStep, decrimentStep }) => {

    const scheme = z.object({
        fullName: z.string().min(5).max(50),
        email: z.string().email(),
        address: z.string().max(50),
        city: z.string(),
        country: z.string(),
        state: z.string(),
        zipcode: z.number()
    })

    const submitData = (data) => {
        console.log("Data :", data);
    }

    const { register, handleSubmit } = useForm({ resolver: zodResolver(scheme) })

    return (
        <>
            <form className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 p-8" onSubmit={handleSubmit(submitData)}>
                <div className="md:col-span-5">
                    <label for="full_name">Full Name</label>
                    <input type="text" name="full_name" id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("fullName")} />
                </div>

                <div className="md:col-span-5">
                    <label for="email">Email Address</label>
                    <input type="text" name="email" id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com" {...register("email")} />
                </div>

                <div className="md:col-span-3">
                    <label for="address">Address / Street</label>
                    <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("address")} />
                </div>

                <div className="md:col-span-2">
                    <label for="city">City</label>
                    <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("city")} />
                </div>

                <div className="md:col-span-2">
                    <label for="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" {...register("country")} />
                    </div>
                </div>

                <div className="md:col-span-2">
                    <label for="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" {...register("state")} />
                    </div>
                </div>

                <div className="md:col-span-1">
                    <label for="zipcode">Zipcode</label>
                    <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" {...register("zipcode", { valueAsNumber: true })} />
                </div>

                <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                        <button type='submit' className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                            onClick={incrementStep}>Next</button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default Form1