import React from 'react'

const Form2 = ({ incrementStep, decrimentStep }) => {
    
    return (
        <div className="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
            <form className="space-y-4">
                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm border bg-gray-50"
                        placeholder="Name"
                        type="text"
                        id="name"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm border bg-gray-50"
                            placeholder="Email address"
                            type="email"
                            id="email"
                        />
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="phone">Phone</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm border bg-gray-50"
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                        <input
                            className="peer sr-only"
                            id="option1"
                            type="radio"
                            tabIndex="-1"
                            name="option"
                        />

                        <label
                            htmlFor="option1"
                            className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600  hover:border-orange-400 peer-checked:border-orange-400 peer-checked:bg-orange-400 peer-checked:text-white"
                            tabIndex="0"
                        >
                            <span className="text-sm"> Option 1 </span>
                        </label>
                    </div>

                    <div>
                        <input
                            className="peer sr-only"
                            id="option2"
                            type="radio"
                            tabIndex="-1"
                            name="option"
                        />

                        <label
                            htmlFor="option2"
                            className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600  hover:border-orange-400 peer-checked:border-orange-400 peer-checked:bg-orange-400 peer-checked:text-white"
                            tabIndex="0"
                        >
                            <span className="text-sm"> Option 2 </span>
                        </label>
                    </div>

                    <div>
                        <input
                            className="peer sr-only"
                            id="option3"
                            type="radio"
                            tabIndex="-1"
                            name="option"
                        />

                        <label
                            htmlFor="option3"
                            className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-orange-400 peer-checked:border-orange-400 peer-checked:bg-orange-400 peer-checked:text-white"
                            tabIndex="0"
                        >
                            <span className="text-sm"> Option 3 </span>
                        </label>
                    </div>
                </div>

                <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm border bg-gray-50"
                        placeholder="Message"
                        rows="8"
                        id="message"
                    ></textarea>
                </div>

                <div className="m-2 flex items-center gap-2 float-right">
                    <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                        onClick={decrimentStep}>Previous</button>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                        onClick={incrementStep}>Next</button>
                </div>
            </form>
        </div>
    )
}

export default Form2