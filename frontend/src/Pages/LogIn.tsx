import LogInInput from "../Components/LogInInput";
import Quote from "../Components/Quote";

const LogIn = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-16">
          <LogInInput />
        </div>
        <div className="hidden lg:block bg-gray-800 p-8 lg:p-16">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
