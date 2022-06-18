// import { LogoutIcon, UserCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <div className={`h-20 border-b-2 shadow-md z-50`}>
      <div className="w-screen px-5 md:px-0 md:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex items-center justify-between h-full">
        <div>
          <h1
            onClick={() => router.push(`/`)}
            className="hidden md:inline-block font-Dongle text-4xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative hover:cursor-pointer"
          >
            <span className="relative text-white font-bold">
              The Sparks Bank
            </span>
          </h1>
        </div>
        <ul className="flex items-center space-x-4 sm:space-x-7">
          <li
            onClick={() => router.push("/")}
            className={`link text-slate-800 text-sm sm:text-base ${
              router.pathname === "/" && "active"
            }`}
          >
            Home
          </li>
          <li
            onClick={() => router.push("/users")}
            className={`link text-slate-800 text-sm sm:text-base ${
              router.pathname === "/users" && "active"
            }`}
          >
            users
          </li>
          <li
            onClick={() => router.push(`/transferMoney`)}
            className={`link text-slate-800 ${
              router.pathname === "/transferMoney" && "active"
            }`}
          >
            Transfer Money
          </li>
          <li
            onClick={() => router.push(`/createUser`)}
            className={`link text-slate-800 ${
              router.pathname === "/createUser" && "active"
            }`}
          >
            Create User
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
