import { uploadFiles } from "@/api/services/files";
import { uploadGuideline } from "@/api/services/guideline";
import { URLS } from "@/utils/urls";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import FileUpload from "react-material-file-upload";
import { useNavigate } from "react-router-dom";

export const Upload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [guideline, setGuideline] = useState<string>("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      enqueueSnackbar("Guideline uploading", {
        variant: "info",
      });
      await uploadGuideline(guideline);
      enqueueSnackbar("Guideline uploaded successfully", {
        variant: "success",
      });
      setUploaded(true);
      navigate(URLS.HISTORY);
    } catch (error) {
      enqueueSnackbar("Unable to upload guideline", {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    const upload = async () => {
      try {
        enqueueSnackbar("Uploading", {
          variant: "info",
        });
        await uploadFiles(files);
        enqueueSnackbar("Uploaded successfully", {
          variant: "success",
        });
        setUploaded(true);
      } catch (error) {
        enqueueSnackbar("Unable to upload", {
          variant: "error",
        });
      }
    };

    if (files.length) {
      upload();
    }
  }, [files]);

  return (
    <Box
      pt={8}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!uploaded && <FileUpload value={files} onChange={setFiles} />}
      {uploaded && (
        <Stack spacing={2}>
          <Typography variant="h5">File uploaded</Typography>
          <TextField
            multiline
            placeholder="Guideline"
            rows={10}
            value={guideline}
            onChange={(e) => setGuideline(e.target.value)}
          />
        </Stack>
      )}
      <Box pt={4}>
        <Button
          onClick={submit}
          variant="contained"
          disabled={!uploaded || !guideline.length}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
