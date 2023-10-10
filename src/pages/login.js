import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";

const Login = () => {
  return (
    <div className="w-11/12 flex justify-center items-center h-screen">
      <button
        className="btn"
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
          })
        }
      >
        Login with google
      </button>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
