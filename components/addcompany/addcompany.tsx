"use client";
import { AppContext } from '@/app/layout';
import PocketBase from 'pocketbase';
import { useContext } from 'react';
import { Controller, useForm } from "react-hook-form";

type AddCoFormType = {
  name: string;
  location: string;
  employeenum: number;
}
const pb = new PocketBase('https://talk-distance.pockethost.io');

export const AddCompany = () => {
  const { showAddUser, setShowAddUser } = useContext(AppContext);
  const { handleSubmit, control: addFormControl } = useForm<AddCoFormType>({defaultValues: {
    name: "",
    location: "",
    employeenum: 0 
  }});
  const submitAddForm =async (data: AddCoFormType) => {
    const record = await pb.collection('companies').create(data);
    console.log(record);
    
  };




  return (
    <div className="fixed inset-0 items-center justify-center">
      <div className=" w-full h-full bg-gray-900 opacity-95 flex items-center justify-center">
        <div className="bg-white w-1/2 md:max-w-md mx-auto rounded shadow-lg overflow-y-auto z-50 opacity-100  bg-opacity-100">
          <form className="py-4 text-left px-6" onSubmit={handleSubmit(submitAddForm)}>
            <h2 className="text-2xl font-semibold mb-4">Add Company</h2>
            <div className="mb-4">
              <label htmlFor="modal-title" className="block  text-sm font-bold mb-2">
                CompanyName
              </label>
              <Controller
                name="name"
                control={addFormControl}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter username"
                  />

                )}

              />
            </div>
            <div className="mb-4">
              <label htmlFor="modal-description" className="block  text-sm font-bold mb-2">
                Location
              </label>
              <Controller
                name="location"
                control={addFormControl}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter username"
                  />

                )}

              />
            </div>
            <div className="mb-4">
              <label htmlFor="modal-description" className="block  text-sm font-bold mb-2">
              Employee Number
              </label>
              <Controller
                name="employeenum"
                control={addFormControl}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter username"
                  />
                )}
              />
            </div>
          
            <div className="text-right">
              <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">
                Add
              </button>
              <button  onClick={()=>{setShowAddUser(false)}} className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline-gray">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



