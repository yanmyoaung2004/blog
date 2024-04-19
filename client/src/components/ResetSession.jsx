import { Link, Outlet } from "react-router-dom";
import useResetSessionHook from "../hook/useResetSessionHook";

export default function ResetSession() {
  const { access, error } = useResetSessionHook();

  return access === null ? (
    <div className="min-h-72 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <h1 className="text-3xl font-semibold text-center my-7">
          &quot;Your session has expired. Please reset it to continue accessing
          our services.&quot;
        </h1>
        <span className="text-gray-500 text-md dark:text-white">
          <Link
            to={"/forgot-password"}
            className="hover:underline text-blue-500 font-semibold "
          >
            Click here
          </Link>{" "}
          to reset password again!
        </span>
      </div>
    </div>
  ) : access ? (
    <Outlet />
  ) : (
    <div>Error: {error}</div>
  );
}
