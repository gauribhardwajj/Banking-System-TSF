import Head from "next/head";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  return (
    <div className="bg-home bg-cover bg-center h-screen overflow-hidden text-white">
      <Head>
        <title>TechBank | India</title>
        <link rel="icon" href="/1logo.png" />
      </Head>
  
      <div className="flex flex-col h-full justify-between">
        {/* Navbar Container */}
        <div className="flex justify-between items-center p-5">
          <h1 className="text-xl md:text-xl text-white">
            TechBank India Ltd.
          </h1>
          <ul className="flex gap-5">
            <li
              onClick={() => router.push("/createUser")}
              className="cursor-pointer text-sm md:text-xl text-white hover:text-gray-300 transition"
            >
              Create User
            </li>
            <li
              onClick={() => router.push("/users")}
              className="cursor-pointer text-sm md:text-xl text-white hover:text-gray-300 transition hidden sm:block"
            >
              Users
            </li>
            <li
              onClick={() => router.push("/transferMoney")}
              className="cursor-pointer text-sm md:text-xl text-white hover:text-gray-300 transition"
            >
              Transfer Money
            </li>
            <li
              onClick={() => router.push("/")}
              className="cursor-pointer text-sm md:text-xl text-white hover:text-gray-300 transition hidden sm:block"
            >
              Transaction History
            </li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="text-center mb-5">
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white">
              Digital Banking Payment Services
            </h1>
            <p className="text-sm md:text-lg text-white mt-3">
              Safe and secure money transfer is now, just a click away!
            </p>
          </div>
          <button
            onClick={() => router.push("/createUser")}
            className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-4 px-14 rounded-full transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
  
  
}

export default Home;
