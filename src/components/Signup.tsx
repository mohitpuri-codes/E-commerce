import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import z from "zod";
import ErrorMessage from "./ErrorMessage";
import brandLogo from "../assets/brand-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import useFetchMutation from "../hooks/useFetchMutation";
import { type SignUpAPIResponse } from "../types/APITypes";
import { axiosInstance } from "../config/axios.config";
import { apipaths } from "../config/apiPath";
import { signupSchema } from "../schemas/SignupSchema";

//

type SignUpData = z.infer<typeof signupSchema>;
// {
//   "status": false,
//   "message": "Username must be unique",
//   "data": null
// }

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signupSchema),
  });
  // hit the backend
  const {
    error: errorReponse,
    isLoading,
    mutate,
  } = useFetchMutation<SignUpAPIResponse, SignUpData>({
    fn: (data: SignUpData) =>
      axiosInstance.post(apipaths.auth.signup(), {
        email: data.email,
        password: data.password,
        displayName: data.displayName,
        mobileNumber: data.mobileNumber,
        username: data.username,
      }),
  });
  const onSubmit: SubmitHandler<SignUpData> = async (data) => {
    await mutate(
      {
        displayName: data.displayName,
        username: data.username,
        password: data.password,
        email: data.email,
        mobileNumber: data.mobileNumber,
      },
      {
        onSuccess: (data) => {
          if (!data || !data.data.status || errorReponse) {
            console.log(errorReponse);
            return;
          }

          navigate("/login");

          console.log(data.data.message);
        },
      }
    );
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-6">
      <div className="flex items-center gap-3 mb-8">
        <img className="w-16 h-16" src={brandLogo} alt="Brand Logo" />
        <p className="text-3xl font-semibold text-white">Signup</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 max-w-md w-full rounded-lg shadow-xl space-y-6"
      >
        <div className="flex flex-col ">
          <label htmlFor="username" className="text-sm text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className="border border-gray-300 rounded-lg p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="email" className="text-sm text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="border border-gray-300 rounded-lg p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="password" className="text-sm text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="border border-gray-300 rounded-lg p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="displayName" className="text-sm text-gray-700">
            What Should we call you?
          </label>
          <input
            type="text"
            id="displayName"
            {...register("displayName")}
            className="border border-gray-300 rounded-lg p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <ErrorMessage>{errors.displayName?.message}</ErrorMessage>
        </div>

        <div className="flex flex-col ">
          <label htmlFor="mobileNumber" className="text-sm text-gray-700">
            Phone number:
          </label>
          <input
            type="tel"
            id="mobileNumber"
            {...register("mobileNumber")}
            className="border border-gray-300 rounded-lg p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <ErrorMessage>{errors.mobileNumber?.message}</ErrorMessage>
        </div>

        {errorReponse?.response?.data.message || "Something went wrong"}

        <button
          className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "->" : "Create account"}
        </button>
      </form>

      <p className="text-white mt-4 text-sm text-center">
        Already have an account?
        <Link
          to={"/login"}
          className="font-semibold text-teal-200 cursor-pointer"
        >
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
