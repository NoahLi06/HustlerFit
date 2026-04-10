import type { LocationCount } from "./types";

const API_BASE =
  "https://goboardapi.azurewebsites.net/api/FacilityCount/GetCountsByAccount";

/** Same key as the official Connect2 widget embed URL */
export const DEFAULT_ACCOUNT_KEY =
  "7938fc89-a15c-492d-9566-12c961bc1f27";

export async function fetchLocationCounts(
  accountApiKey: string = DEFAULT_ACCOUNT_KEY
): Promise<LocationCount[]> {
  const url = `${API_BASE}?AccountAPIKey=${encodeURIComponent(accountApiKey)}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Facility count request failed (${res.status})`);
  }
  return res.json() as Promise<LocationCount[]>;
}

export function occupancyPercent(loc: LocationCount): number {
  if (loc.TotalCapacity <= 0) return 0;
  const raw = (loc.LastCount / loc.TotalCapacity) * 100;
  return Math.min(100, Math.max(0, Math.round(raw)));
}
