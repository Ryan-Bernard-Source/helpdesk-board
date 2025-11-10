'use client';

export default function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search tickets..."
      className="border p-2 rounded flex-1 min-w-[200px]"
    />
  );
}
