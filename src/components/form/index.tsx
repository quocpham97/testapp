import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
  verifyCode: number;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/4">
      <input
        className="border-solid border-2 border-gray-500 rounded-md mb-3 p-2"
        {...register("email", {
          required: true,
          pattern: /[A-ZA-z]|\d|\.|\-|\@|\_|\+/,
        })}
      />
      {errors.email?.type === "required" && "First name is required"}

      <input
        className="border-solid border-2 border-gray-500 rounded-md mb-3 p-2"
        {...register("password", { pattern: /^[A-Za-z]+$/i })}
      />
      <input
        className="border-solid border-2 border-gray-500 rounded-md mb-3 p-2"
        type="number"
        {...register("verifyCode", { min: 0, max: 1000000 })}
      />
      <input
        className="border-solid border-2 border-gray-500 rounded-md mb-3 bg-gray-500 text-white p-2"
        type="submit"
      />
    </form>
  );
}
