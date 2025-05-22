import z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import brandLogo from "../assets/brand-logo.svg";
import ErrorMessage from "./ErrorMessage";
import { axiosInstance } from "../config/axios.config";
import useFetchMutation from "../hooks/useFetchMutation";
import { apipaths } from "../config/apiPath";
import { Link, useNavigate } from "react-router-dom";
import type { LoggedInAPIResponse } from "../types/APITypes";
import { loginSchema } from "../schemas/LoginSchema";

type LoginData = z.infer<typeof loginSchema>;

function Login() {
  const navigate = useNavigate();
  const { error, isLoading, mutate } = useFetchMutation<
    LoggedInAPIResponse,
    LoginData
  >({
    fn: (data: LoginData) => axiosInstance.post(apipaths.auth.login(), data),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    await mutate(
      {
        username: data.username,
        password: data.password,
      },
      {
        onSuccess: (data) => {
          if (!data || !data.data.status || error) {
            console.error("Something went wrong");
            return;
          }

          const token = data.data.data.accessToken;
          localStorage.setItem("token", token);
          navigate("/");
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-6">
      <div className="flex items-center gap-3 mb-8">
        <img className="w-12 h-12" src={brandLogo} alt="Brand Logo" />
        <p className="text-3xl font-semibold text-white">Login</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm"
      >
        <div className="flex flex-col mb-4">
          <label
            htmlFor="username"
            className="text-lg font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className="border-2 border-gray-300 rounded-lg p-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <ErrorMessage>{errors.username?.message}</ErrorMessage>

        <div className="flex flex-col mb-6">
          <label
            htmlFor="password"
            className="text-lg font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="border-2 border-gray-300 rounded-lg p-3 mt-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <ErrorMessage>{error && "Wrong Credentials"}</ErrorMessage>
        <button
          disabled={isLoading}
          className="w-full py-3 bg-green-500 text-white font-bold text-lg rounded-lg hover:bg-green-600 transition duration-300"
        >
          {isLoading ? "logging in..." : "Login"}
        </button>
      </form>
      <p className="text-white mt-4 text-sm text-center">
        Create a new account?
        <Link
          to={"/signup"}
          className="font-semibold text-teal-200 cursor-pointer"
        >
          Signup
        </Link>
      </p>
    </div>
  );
}

export default Login;
