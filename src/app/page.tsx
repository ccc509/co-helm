"use client";

import { URLS } from "@/utils/urls";
import { Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      pt={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack spacing={2}>
        <Button variant="contained" onClick={() => router.push(URLS.UPLOAD)}>
          Upload
        </Button>
        <Button variant="contained" onClick={() => router.push(URLS.HISTORY)}>
          Check History
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
