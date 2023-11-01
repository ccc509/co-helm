import { API_URLS, baseUrl } from "./constants";

export const uploadGuideline = async (guideline: string) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify({ text: guideline }),
  };

  const response = await fetch(
    `${baseUrl}${API_URLS.GUIDELINE}`,
    requestOptions
  );

  if (response.status !== 201) {
    throw new Error("Unable to upload guideline");
  }
};
