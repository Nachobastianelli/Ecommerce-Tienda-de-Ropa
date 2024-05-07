const Register = () => {
  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Create a password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="************"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="************"
            />
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
              I accept the{" "}
              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-indigo-500"
                href="#"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="flex bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline justify-center items-center"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <p className="flex text-sm font-light text-gray-500 dark:text-gray-400 items-center justify-center">
            Already have an account?{" "}
            <a
              href="#"
              className="flex font-medium text-primary-600 hover:underline dark:text-primary-500 items-center justify-center"
            >
              Login here
            </a>
          </p>
        </form>
        <p className="flex text-center items-center justify-center text-gray-300 text-xs ">
          &copy;2020 Dani Corp. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Register;
