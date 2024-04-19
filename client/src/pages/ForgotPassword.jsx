import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPasswordFailure,
  forgotPasswordSuccess,
  forgotPasswordStart,
} from "../redux/user/userSlice";

export default function Signin() {
  const [email, setEmail] = useState();
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [showEmailSent, setShowEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      return dispatch(forgotPasswordFailure("Please fill all the fields"));
    }

    try {
      dispatch(forgotPasswordStart());
      const res = await fetch("/api/user/forgotpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(forgotPasswordFailure(data.message));
      }
      if (res.ok) {
        dispatch(forgotPasswordSuccess(data));
        setShowEmailSent(true);
      }
    } catch (error) {
      dispatch(forgotPasswordFailure(error.message));
    }
  };

  return (
    <div className="min-h-72 mt-20">
      {!showEmailSent ? (
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          {/* left side */}
          <div className="flex-1">
            <Link to={"/"} className=" font-  bold dark:text-white text-4xl">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                YMA
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5">
              You can recovery your account by follwing the procss...
            </p>
          </div>
          {/* right side */}
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Your email" />
                <TextInput
                  type="email"
                  placeholder="Email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button
                gradientDuoTone={"purpleToPink"}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size={"sm"} />{" "}
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
            {errorMessage && (
              <Alert className="mt-5" color={"failure"}>
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto p-3 text-center">
          <div>
            <h1 className="text-3xl font-semibold text-center mb-7">
              Password Reset Email: Action Required
            </h1>
            <div className="text-lg  text-gray-500 flex flex-col gap-6">
              <p>
                We have just sent you an email containing a link to reset your
                password. Please check your inbox (and possibly your spam
                folder) for the message. Click on the link provided within the
                email to initiate the password reset process. If you encounter
                any issues or need further assistance, do not hesitate to reach
                out to our support team. We are here to help!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
