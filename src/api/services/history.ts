import { Prediction } from "@/utils/types";
import { API_URLS, baseUrl } from "./constants";

export const getHistory = async (): Promise<Prediction[]> => {
  const headers = new Headers();

  const requestOptions = {
    method: "GET",
    headers,
  };

  const response = await fetch(`${baseUrl}${API_URLS.HISTORY}`, requestOptions);

  if (response.status !== 200) {
    throw new Error("Unable to get history");
  }

  const result = await response.json();
  return result.predictions;
};
