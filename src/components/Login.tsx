import z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import brandLogo from "../assets/brand-logo.svg";
import ErrorMessage from "./ErrorMessage";

const loginSchema = z.object({
  username: z.string().min(3, "Username should contain at least 3 Characters"),
  password: z
    .string()
    .min(6, "Password length should be at least 6 Characters"),
});

type LoginData = z.infer<typeof loginSchema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginData> = (data) => console.log(data);

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

        <button className="w-full py-3 bg-green-500 text-white font-bold text-lg rounded-lg hover:bg-green-600 transition duration-300">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
