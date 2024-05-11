import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const HomePage = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const ButtonEvent = () => {
    if (
      username != undefined &&
      username != "" &&
      password != undefined &&
      password != ""
    ) {
      withReactContent(Swal).fire({
        icon: "success",
        title: "Success!",
        text: `${username} Logged In successfully`,
      });
    } else {
      withReactContent(Swal).fire({
        icon: "error",
        title: "Error!",
        text: `Some field is still missing please go back and check..`,
      });
    }
  };

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
            onChange={(e) => setUsername(String(e.target.value))}
          />
          <input
            className="w-full text-center border-solid border-[transparent] p-4 ring-0 outline-none focus:outline-none border-jet focus:border-living-coral border-2 rounded-2xl"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(String(e.target.value))}
          />
        </div>

        <button
          type="button"
          className="w-full p-4 text-whitesmoke bg-living-coral rounded-b-lg hover:opacity-60"
          onClick={(e) => {
            e.preventDefault;
            ButtonEvent();
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
