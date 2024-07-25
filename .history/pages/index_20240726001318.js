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
  
      <div className="flex flex-col h-full justify-center items-center">
        {/* Digital Banking Payment Container */}
        <div className="mb-10">
          <h1 className="text-xl text-center md:text-5xl font-black leading-tight text-white">
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-600 via-rose-600 to-pink-700">
              Digital Banking Payment
            </span>
          </h1>
        </div>
  
        {/* Navbar Container */}
        <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-5">
          <ul className="flex flex-col md:flex-row items-center gap-5">
            <li
              onClick={() => router.push("/createUser")}
              className="link text-sm md:text-xl text-gray-700 hover:text-white hover:bg-gray-50 p-2 rounded transition"
            >
              Create User
            </li>
            <li
              onClick={() => router.push("/users")}
              className="link text-sm md:text-xl text-gray-700 hover:text-white hover:bg-gray-50 p-2 rounded transition"
            >
              Users
            </li>
            <li
              onClick={() => router.push("/transferMoney")}
              className="link text-sm md:text-xl text-gray-700 hover:text-white hover:bg-gray-50 p-2 rounded transition"
            >
              Transfer Money
            </li>
            <li
              onClick={() => router.push("/")}
              className="link text-sm md:text-xl text-gray-700 hover:text-white hover:bg-gray-50 p-2 rounded transition"
            >
              Transaction History
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  
}

export default Home;
