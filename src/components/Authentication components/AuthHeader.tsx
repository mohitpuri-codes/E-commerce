import brandLogo from "../../assets/brand-logo.svg";

function AuthHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <img className="w-16 h-16" src={brandLogo} alt="Brand Logo" />
      <p className="text-3xl font-semibold text-white">{label}</p>
    </div>
  );
}

export default AuthHeader;
