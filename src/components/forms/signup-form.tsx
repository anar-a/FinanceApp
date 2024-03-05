'use client';

import { ChangeEvent, useState } from "react";

export const SignupForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        budgets: [{ budgetName: '', totalSpent: '', goal: '' }]
    })

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevData) => ({
            ...prevData,
            name: event.target.value
        }));
    }

    const handleBudgetChange = (index: number, field: string, value: string) => {
        setFormData((prevData: any) => {
            const newBudgets = [...prevData.budgets]
            newBudgets[index][field] = value
            return { ...prevData, budgets: newBudgets }
        });
    }

    const handleAddBudget = () => {
        setFormData((prevData: any) => ({
            ...prevData,
            budgets: [...prevData.budgets, { budgetName: '', totalSpent: '', goal: '' }],
        }));
    }

    const handleRemoveBudget = (index: number) => {
        setFormData((prevData) => {
            const newBudgets = [...prevData.budgets];
            newBudgets.splice(index, 1);
            return { ...prevData, budgets: newBudgets };
        });
    }

    const submit = (e: any) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div className="h-screen flex flex-col items-center">
            <h1 className="text-5xl py-10 text-gray-700">Start Saving Now!</h1>
            <form className="flex flex-col items-center" onSubmit={submit}>

                <div className="h-14 w-full inline-flex mb-5 focus">
                    <label className="w-1/6 items-center inline-flex justify-center rounded-l-xl bg-gray-100 border-2 border-gray-300 text-gray-700">Name</label>
                    <input
                        className="w-5/6 text-xl indent-2 rounded-r-xl border-y-2 border-r-2 border-gray-300 hover:bg-gray-100 outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        type="text"
                        name="name"
                        placeholder="Ex: Jack Dawson"
                        value={formData.name}
                        onChange={event => handleNameChange(event)}
                        required
                    />
                </div>

                {formData.budgets.map((input, index) => {
                    return (
                        <div key={index} className="h-14 w-full rounded-lg w-full my-2 flex flex-nowrap border-2 border-gray-300">
                            <input
                                className="items-center inline-flex justify-center indent-2 rounded-l-lg border-r-2"
                                name="budgetName"
                                placeholder="Budget Name"
                                value={input.budgetName}
                                onChange={event => handleBudgetChange(index, 'budgetName', event.target.value)}
                                required
                            />
                            <span className="pl-1 items-center inline-flex text-gray-500 sm:text-sm">$</span>
                            <input
                                className="items-center inline-flex justify-center indent-2 border-r-2"
                                name="totalSpent"
                                placeholder="Total Spent"
                                value={input.totalSpent}
                                onChange={event => handleBudgetChange(index, 'totalSpent', event.target.value)}
                                required
                            />
                            <span className="pl-1 items-center inline-flex text-gray-500 sm:text-sm">$</span>
                            <input
                                className="items-center inline-flex justify-center indent-2 border-r-2"
                                name="goal"
                                placeholder="Goal"
                                value={input.goal}
                                onChange={event => handleBudgetChange(index, 'goal', event.target.value)}
                                required
                            />
                            <button className="p-1 bg-red-400 rounded-r-md text-gray-800" type="button" onClick={() => handleRemoveBudget(index)}>Remove</button>
                        </div>
                    )
                })}

                <div className="w-full flex justify-end">
                    <button className="bg-blue-400 p-2 mr-80 rounded-lg text-slate-100" type="button" onClick={handleAddBudget}>Add Budget</button>
                    <button className="bg-blue-400 p-2 rounded-lg text-slate-100">Continue</button>
                </div>
            </form>
        </div>


    );

}