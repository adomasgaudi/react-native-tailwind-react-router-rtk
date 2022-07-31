import React from "react";
import { TailwindProvider } from "tailwind-rn/dist";
import Home from "./views/Home";
import utilities from "../tailwind.json";
import { NativeRouter, Route, Routes } from "react-router-native";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <ApiProvider api={apiSlice}>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </NativeRouter>
      </ApiProvider>
    </TailwindProvider>
  );
}
