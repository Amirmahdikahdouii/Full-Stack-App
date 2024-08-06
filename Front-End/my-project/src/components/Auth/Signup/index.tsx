import React from "react";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import "./style.css";

interface ISignupProps {}

const Signup: React.FC<ISignupProps> = (): JSX.Element => {
  const authSchema =
    yup.object().shape({
        phone_number: yup
          .string()
          .matches(/^[0-9]{10}$/, "شماره تلفن باید 10 رقم باشد")
          .required("شماره تلفن الزامی است "),
        password: yup
          .string()
          .min(8,"رمز عبور حداقل باید 8 کلمه باشد ")
          .required("وارد کردن رمز عبور الزامی است "),
          confirmPassword: yup
          .string()
          .oneOf(
            [yup.ref("password")],
            "رمز عبور و تایید رمز عبور باید مطابقت داشته باشند"
          )
          .required("تایید رمز عبور الزامی است")}

      
    )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-slate-100">
        <h2 className="text-2xl font-bold mb-6">ایجاد حساب کاربری </h2>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700"
            >
              شماره تلفن{" "}
            </label>
            <input
              type="text"
              id="phone_number"
              {...register("phone_number")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="mt-2 text-sm text-red-600">
              {errors.phone_number?.message}
            </p>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              رمز عبور{" "}
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="mt-2 text-sm text-red-600">
              {errors.password?.message}
            </p>
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              تایید رمز عبور
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <p className="mt-2 text-sm text-red-600">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ارسال
          </button>
          <p className="mt-4 text-center">
            <Link to="/login" className="text-indigo-600 hover:text-indigo-700">
              حساب کاربری دارید ؟ وارد شوید{" "}
            </Link>
          </p>
          
        </form>
      </div>
    </div>
  );
};

export default Signup;
