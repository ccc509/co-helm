import { URLS } from "@/utils/urls";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

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
        <Button variant="contained" onClick={() => navigate(URLS.UPLOAD)}>
          Upload
        </Button>
        <Button variant="contained" onClick={() => navigate(URLS.HISTORY)}>
          Check History
        </Button>
      </Stack>
    </Box>
  );
};
