import { API_URLS, baseUrl } from "./constants";

export const uploadFiles = async (files: File[]) => {
  const headers = new Headers();
  headers.append("Content-Type", "multipart/form-data");

  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(files),
  };

  const response = await fetch(`${baseUrl}${API_URLS.FILES}`, requestOptions);

  if (response.status !== 201) {
    throw new Error("Unable to upload file");
  }
};
