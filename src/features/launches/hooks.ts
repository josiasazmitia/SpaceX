import { useQuery } from "@tanstack/react-query";
import { launchesListQuery, launchDetailQuery } from "./queries";

export function useLaunches() {
    return useQuery(launchesListQuery);
}

export function useLaunch(id: string) {
    return useQuery(launchDetailQuery(id));
}