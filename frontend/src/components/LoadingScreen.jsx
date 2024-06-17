import { ImSpinner6 } from "react-icons/im";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center inset-0 bg-slate-50">
      <ImSpinner6 className="text-7xl text-emerald-500 spinner" />
    </div>
  );
};

export default LoadingScreen;
