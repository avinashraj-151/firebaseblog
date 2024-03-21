import { useState } from "react";
import Modal from "../../utils/Modal";
import { MdOutlineClose } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
const Auth = () => {
  const [createUser, setcreateUser] = useState(false);
  return (
    <Modal>
      <section className="z-50 bg-white top-0 bottom-0 left-0 md:left-40 fixed right-0 md:right-40 overflow-auto shadow-2xl">
        {/*  */}
        <div>
          <button className="top-8 right-8 absolute text-2xl rounded-full hover:opacity-50">
            <MdOutlineClose />
          </button>
        </div>
        {/* welcome back */}
        <div className="flex flex-col justify-center items-center gap-12">
          <>
            <h2 className="text-3xl pt-20">
              {createUser ? "Join Codiowhizz" : "Welcome back."}
            </h2>
            <div className="flex flex-col gap-2 w-fit mx-auto">
              <Button
                icon={<FcGoogle className="w-7 h-7" />}
                text={`${createUser ? "Sign up" : "Sign in"} with Google`}
              ></Button>
              <Button
                icon={<MdFacebook className="w-7 h-7 text-blue-500" />}
                text={`${createUser ? "Sign up" : "Sign in"} with Facebook`}
              ></Button>
              <Button
                icon={<MdOutlineMail className="w-7 h-7" />}
                text={`${createUser ? "Sign up" : "Sign in"} with Email`}
              ></Button>
            </div>
            <div>
              <p>
                {createUser
                  ? `Already have an account?`
                  : `Don't have an account?`}
                <span
                  className="text-green-600 ml-1 cursor-pointer hover:text-green-900 font-bold"
                  onClick={() => {
                    setcreateUser(!createUser);
                  }}
                >
                  {createUser ? `Sign in` : `Create One`}
                </span>
              </p>
            </div>
            <div>
              <p className="text-center mx-auto text-sm md:w-[30rem] mb-[3rem]">
                {`Click “${
                  createUser ? "Sign up" : "Sign in"
                }” to agree to codiowhizz’s Terms of Service and
                acknowledge that codiowhizz’s Privacy Policy applies to you.`}
              </p>
            </div>
          </>
        </div>
      </section>
    </Modal>
  );
};

export default Auth;

const Button = ({ icon, text, click }) => {
  return (
    <button className="flex items-center gap-10 sm:w-80 border border-black px-3 py-2 rounded-full">
      {icon} {text} {click}
    </button>
  );
};
