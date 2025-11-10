'use client';

import { useEffect, useState } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import { nextStatus, escalatePriority } from '../lib/severity';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState('All');
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});

  // Fetch tickets from API
  useEffect(() => {
    fetch('/api/tickets')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setTickets)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // Simulate live updates
  useEffect(() => {
    if (!tickets.length) return;
    const interval = setInterval(() => {
      setTickets((prev) => {
        const list = [...prev];
        const i = Math.floor(Math.random() * list.length);
        const t = { ...list[i] };
        if (Math.random() < 0.5) t.status = nextStatus(t.status);
        else t.priority = escalatePriority(t.priority);
        t.updatedAt = new Date().toISOString();
        list[i] = t;
        return list;
      });
    }, 6000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, [tickets.length]);

  // Filter and search
  const visible = tickets.filter((t) => {
    const matchStatus = status === 'All' || t.status === status;
    const matchPriority = priority === 'All' || t.priority === priority;
    const q = search.toLowerCase();
    const matchSearch =
      !q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
    return matchStatus && matchPriority && matchSearch;
  });
  // Queue logic
  const add = (id) => setQueue((q) => (q[id] ? q : { ...q, [id]: true }));
  const remove = (id) => {
    const next = { ...queue };
    delete next[id];
    setQueue(next);
  };
  const clear = () => setQueue({});
  const queued = tickets.filter((t) => queue[t.id]);
// Render
    return (
    <div className="flex flex-col gap-6">
    <section>
    <div className="flex flex-wrap gap-2 mb-3 p-2 border rounded">
    <StatusFilter value={status} onChange={setStatus} />
    <PriorityFilter value={priority} onChange={setPriority} />
    <SearchBox value={search} onChange={setSearch} />
    </div>
    <StatusMessage
    loading={loading}
    error={error}
    isEmpty={!loading && !error && visible.length === 0}
    />
    {!loading && !error && visible.length > 0 && (
    <TicketList tickets={visible} queue={queue} onAddToQueue={add} />
    )}
    </section>
    <div className="mt-6 p-4 border-t border-gray-300 bg-gray-50 rounded-lg shadow-sm text-black">
        <MyQueueSummary
            tickets={queued}
            count={queued.length}
            onRemove={remove}
            onClear={clear}
                    />
      </div>
    </div>
  );
}
