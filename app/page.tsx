import Image from "next/image";
import TestPage from "./pages/TestPage";
import HomePage from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Navbar from "./pages/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <GetStarted />
    </>
  );
}
