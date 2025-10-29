import React from "react";
import { queryOptions } from "@tanstack/react-query";
import { fetchLaunchesById, fetchLaunches } from "./api";

export const launchesKey = {
    all: ["launches"] as const,
    list: () => [...launchesKey.all, "list"] as const,
    details: (id: string) => [...launchesKey.all, "details", id] as const,
}

export const launchesListQuery = queryOptions({
    queryKey: launchesKey.list(),
    queryFn: fetchLaunches,
});

export const launchDetailQuery  = (id: string) => queryOptions({
    queryKey: launchesKey.details(id),
    queryFn: () => fetchLaunchesById(id),
});