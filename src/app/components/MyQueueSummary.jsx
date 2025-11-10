'use client';

export default function MyQueueSummary({ tickets, count, onRemove, onClear }) {
  return (
    <div className="border rounded p-3">
      <h2 className="font-bold mb-2">My Queue ({count})</h2>
      {count === 0 && <p className="text-sm text-gray-500">No tickets selected.</p>}
      {tickets.map((t) => (
        <div key={t.id} className="flex justify-between text-sm mb-1">
          <span>{t.title}</span>
          <button
            onClick={() => onRemove(t.id)}
            className="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
      {count > 0 && (
        <button
          onClick={onClear}
          className="mt-3 w-full bg-red-600 text-white py-1 rounded text-sm hover:bg-red-700"
        >
          Clear Queue
        </button>
      )}
    </div>
  );
}
