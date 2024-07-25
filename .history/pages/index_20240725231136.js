import Head from "next/head";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  return (
    <div className="bg-home bg-cover bg-center h-screen overflow-hidden text-white">
      <Head>
        <title>The Saprks Banking System</title>
        <link rel="icon" href="/1logo.png" />
      </Head>

      <div className="max-w-7xl p-2 md:p-5 flex flex-col md:flex-row justify-center md:justify-between items-center m-auto my-auto h-full">
        <div className="">
          <h1 class="text-2xl text-center md:text-left md:text-8xl font-black w-96 leading-tight text-white">
            <span class="bg-gradient-to-r text-transparent bg-clip-text from-purple-600 via-rose-600 to-pink-700">
              The Sparks Banking
            </span>
          </h1>
        </div>
        <ul className="list-disc flex flex-col items-start gap-y-2">
          <li
            onClick={() => router.push("/createUser")}
            className="link text-sm md:text-xl text-white hover:underline hover:text-gray-200"
          >
            Create User
          </li>
          <li
            onClick={() => router.push("/users")}
            className="link text-sm md:text-xl text-white hover:underline hover:text-gray-200"
          >
            Users
          </li>
          <li
            onClick={() => router.push("/transferMoney")}
            className="link text-sm md:text-xl text-white hover:underline hover:text-gray-200"
          >
            Transfer Money
          </li>
          <li
            onClick={() => router.push("/")}
            className="link text-sm md:text-xl text-white hover:underline hover:text-gray-200"
          >
            Transaction History
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
