import { Link } from "react-router-dom";

interface AuthRedirectorProps {
  message: string;
  path: string;
  label: string;
}

function AuthRedirector({ label, message, path }: AuthRedirectorProps) {
  return (
    <p className="text-white mt-4 text-sm text-center">
      {message}
      <Link to={path} className="font-semibold text-teal-200 cursor-pointer">
        {label}
      </Link>
    </p>
  );
}

export default AuthRedirector;
