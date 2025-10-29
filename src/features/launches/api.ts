import { getJSON } from "../../lib/fetcher";
import type { Launch } from "./types";

export async function fetchLaunches(): Promise<Launch[]> {
  return getJSON<Launch[]>("https://api.spacexdata.com/v4/launches");
}

export async function fetchLaunchesById(id: string): Promise<Launch> {
  return getJSON<Launch>(`https://api.spacexdata.com/v4/launches/${id}`);
}