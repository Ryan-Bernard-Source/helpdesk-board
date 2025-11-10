'use client';

export default function TicketCard({ ticket, queued, onAddToQueue }) {
  return (
    <div className="border rounded p-3 shadow-sm bg-white flex flex-col gap-1">
      <h3 className="font-semibold">{ticket.title}</h3>
      <p className="text-sm text-gray-600">{ticket.description}</p>
      <p className="text-sm">
        <strong>Priority:</strong> {ticket.priority} &nbsp;
        <strong>Status:</strong> {ticket.status}
      </p>
      <p className="text-xs text-gray-500">Updated: {new Date(ticket.updatedAt).toLocaleString()}</p>
      <button
        onClick={onAddToQueue}
        disabled={queued}
        className={`mt-2 px-3 py-1 text-sm rounded ${
          queued
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {queued ? 'In My Queue' : 'Add to My Queue'}
      </button>
    </div>
  );
}
