export type Launch = {
    id: string;
    name: string;
    date_utc: string;
    success: boolean | null;
    details: string | null;
}