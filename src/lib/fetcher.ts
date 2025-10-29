export class HttpError extends Error {
    status: number;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export async function getJSON<T>(url: string, init?: RequestInit): Promise<T> {
    const response = await fetch(url, init);
    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new HttpError(response.status, text || response.statusText);
    }
    return response.json() as Promise<T>;
}