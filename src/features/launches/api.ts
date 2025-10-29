import { getJSON } from "../../lib/fetcher";
import type { Launch } from "./types";

export function getLaunches() {
  return getJSON<Launch[]>("https://api.spacexdata.com/v4/launches");
}