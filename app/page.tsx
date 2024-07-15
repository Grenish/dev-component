import Image from "next/image";
import TestPage from "./pages/TestPage";
import HomePage from "./pages/Home";
import GetStarted from "./pages/GetStarted";

export default function Home() {
  return (
    <>
      <HomePage />
      <GetStarted />
    </>
  );
}
