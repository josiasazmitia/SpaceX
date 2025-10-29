import React from "react";

type Props = { value: string; onChange: (v: string) => void; placeholder?: string };

export default function SearchBar({ value, onChange, placeholder = "Search…" }: Props) {
  return (
    <input
      className="w-full rounded-md border px-3 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}