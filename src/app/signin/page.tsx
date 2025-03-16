export default function SignIn() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        {/* Need to add HTML form's onSubmit or equivalent */}
        <form className="flex h-[600px] w-[450px] flex-col justify-center border-4 border-gray-400 p-8 text-center">
          <h1 className="text-4xl font-bold">Login</h1>
          <fieldset className="my-8">
            <input
              type="email"
              id="username"
              placeholder="Username"
              name="username"
              className="mb-4 h-12 w-full rounded-lg border-2 border-black p-2"
              required
            />
            <label htmlFor="username"></label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              className="mb-2 h-12 w-full rounded-lg border-2 border-black p-2"
              required
            />
            <label htmlFor="password"></label>
            <div className="mb-6 text-left text-sm">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe"> Remember Me</label>
            </div>
            <button
              type="submit"
              className="h-10 w-full rounded-lg border-2 border-black bg-[#0066cc] text-white"
            >
              Login
            </button>
          </fieldset>
          <fieldset className="mb-12 border-2 border-gray-400">
            <legend className="px-2 font-medium">Need Help?</legend>
            <div className="mb-3 mt-1 flex flex-col text-[#0066cc] underline">
              {/* Need to replace hrefs with appropriate routes */}
              <a href="https://www.google.ca/">Change My Password</a>
              <a href="https://www.google.com/">Create New User</a>
            </div>
          </fieldset>
          <p className="text-[10px]">
            Property of Kelvin Yeung
            {/* Licensed Materials - Property of MTO and others - 1992, 2012 */}
            <br />
            Build Version: 1 (March 15, 2025)
            {/* Build Version: 407 (July 17th, 2020) */}
            <br />
            Release: 0.1
            {/* Release: 18.7 */}
          </p>
        </form>
      </div>
    </>
  );
}
