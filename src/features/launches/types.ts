export type Launch = {
    id: string;
    name: string;
    date_utc: string;
    success: boolean | null;
    details: string | null;
    links: {
        patch: {
            small: string | null;
            large: string | null;
        } | null;
        webcast: string | null;
        article: string | null;
        wikipedia: string | null;
    } | null;
}