import { useState, useRef, useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import useFetch from "../../hooks/useFetch";
import useToast from "../../hooks/useToast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: { error: false, message: "" },
    password: { error: false, message: "" },
  });

  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthenticationContext);

  const { data: users } = useFetch("http://localhost:8000/users");
  const { showToast } = useToast();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const checkEmailUser = (emailToCheck) => {
    return users.some((user) => user.email === emailToCheck);
  };

  const checkPasswordUser = (passwordToCheck) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === passwordToCheck) {
        return true;
      }
    }
    return false;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let isValidForm = true;

    if (email.length === 0) {
      emailRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          error: true,
          message: "Complete este campo para continuar",
        },
      }));
      isValidForm = false;
    } else if (!checkEmailUser(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          error: true,
          message: "",
        },
        password: {
          error: true,
          message: "",
        },
      }));
      isValidForm = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          error: false,
          message: "",
        },
      }));
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: {
          error: true,
          message: "Complete este campo para continuar",
        },
      }));
      isValidForm = false;
    } else if (!checkPasswordUser(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: {
          error: true,
          message: "",
        },
        password: {
          error: true,
          message: "",
        },
      }));
      isValidForm = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: {
          error: false,
          message: "",
        },
      }));
    }

    if (isValidForm) {
      showToast("Ingresaste correctamente!", true);
      handleLogin(email);
      navigate("/home");
    } else {
      showToast("Email o contraseña incorrectos", false);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitHandler}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email.error ? "border-red-500" : ""
              }`}
              ref={emailRef}
              id="email"
              onChange={changeEmailHandler}
              value={email}
              type="email"
              placeholder="Ingresa Email"
            />
            {errors.email.error && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Constraseña
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password.error ? "border-red-500" : ""
              }`}
              ref={passwordRef}
              id="password"
              value={password}
              type="password"
              onChange={changePasswordHandler}
              placeholder="************"
            />
            {errors.password.error && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 cursor-pointer"
                required
              />
            </div>
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-600 ">
              Remember me
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800"
              href="/register"
            >
              Sing Up
            </a>
          </div>
        </form>
        <p className="text-center text-gray-300 text-xs">
          &copy;2020 Dani Corp. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Login;
