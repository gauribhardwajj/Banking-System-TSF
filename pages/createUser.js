import { useRouter } from "next/router";
import { useState } from "react";
import { createuser } from "../utils/request";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentBalance, setCurrentBalance] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const createUser = async (e) => {
    e.preventDefault();
    if (loading) return;

    const payload = {
      name,
      email,
      currentBalance,
    };
    setLoading(true);
    const user = await createuser(payload);

    if (user.hasError) {
      setErrorMessage(user.errorMessage);
    } else {
      setErrorMessage("");
      setName("");
      setEmail("");
      setCurrentBalance(null);
      router.replace("/");
    }
    setLoading(false);
  };

  return (
    <div className="grid place-items-center h-screen">
      <form
        onSubmit={createUser}
        className="mx-5 flex flex-col space-y-5 rounded-md bg-white p-11 shadow-md md:w-1/2 xl:w-1/3 2xl:w-1/4"
      >
        <h1 className="text-2xl text-center">Create user</h1>
        {errorMessage && (
          <p className="mb-5 text-center text-sm font-semibold capitalize text-red-500">
            {errorMessage}
          </p>
        )}
        <div className="w-full">
          <label htmlFor="accnum" className="label">
            name:
          </label>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="w-full">
          <label htmlFor="accnum" className="label">
            Email:
          </label>
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id=""
          />
        </div>

        <div className="w-full">
          <label htmlFor="accnum" className="label">
            Current Balance:
          </label>
          <input
            className="input"
            value={currentBalance}
            onChange={(e) => setCurrentBalance(Number(e.target.value))}
            type="number"
            name=""
            id=""
          />
        </div>

        <button
          className="rounded-md bg-black p-2 px-3 font-semibold uppercase text-slate-100 transition-all hover:bg-white hover:text-slate-900 hover:ring-2 hover:ring-black cursor-pointer text-center"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
