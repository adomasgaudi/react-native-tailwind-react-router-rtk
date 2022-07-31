import React from "react";
import { TailwindProvider } from "tailwind-rn/dist";
import Home from "./views/Home";
import utilities from "../tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Home />
    </TailwindProvider>
  );
}
