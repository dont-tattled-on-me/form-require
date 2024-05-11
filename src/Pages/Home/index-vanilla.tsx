export const HomePage = () => {
  return (
    <div className="w-full min-h-screen pt-4">
      <form
        id="form"
        className="min-w-[18rem] max-w-[30rem] bg-whitesmoke mx-auto rounded-lg mt-6"
      >
        <div
          id="form-container"
          className="p-4 flex flex-col items-center gap-2"
        >
          <input
            className="w-full text-center border-solid border-[transparent] p-4 ring-0 outline-none focus:outline-none border-jet focus:border-living-coral border-2 rounded-2xl"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <input
            className="w-full text-center border-solid border-[transparent] p-4 ring-0 outline-none focus:outline-none border-jet focus:border-living-coral border-2 rounded-2xl"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-4 text-whitesmoke bg-living-coral rounded-b-lg hover:opacity-60"
        >
          Login
        </button>
      </form>
    </div>
  );
};
