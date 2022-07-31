import React from "react";
import { TailwindProvider } from "tailwind-rn/dist";
import Home from "./views/Home";
import utilities from "../tailwind.json";
import { NativeRouter, Route, Routes } from "react-router-native";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NativeRouter>
    </TailwindProvider>
  );
}
