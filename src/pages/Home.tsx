import { FC } from "react";
import Navbar from "../components/Navbar";

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sara</h1>
        <p className="text-lg text-gray-400">
          Explore our amazing features built for you.
        </p>
      </main>
    </div>
  );
};

export default Home;
