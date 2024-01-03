import { Image } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/spacex_logo.png";
import { LaunchesList } from "./pages/LaunchesList";
import { LaunchDetail } from "./pages/LaunchDetail";
import { RocketDetails } from "./pages/RocketDetails";

export function App() {
  return (
    <>
      <Image src={logo} width={400} m={4} />
      <Routes>
        <Route path="/" element={<LaunchesList />} />
        <Route path="/launch/:launchId" element={<LaunchDetail />} />
        <Route path="/rockets/:rocketId" element={<RocketDetails />}/>
      </Routes>
    </>
  );
}