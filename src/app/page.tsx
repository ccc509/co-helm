"use client";

import { SnackbarProvider } from "notistack";
import { Routes } from "./Routes";

export default function Home() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Routes />
    </SnackbarProvider>
  );
}
