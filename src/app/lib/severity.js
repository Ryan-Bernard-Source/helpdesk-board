export function nextStatus(status) {
  const flow = ['Open', 'In Progress', 'On Hold', 'Resolved'];
  const i = flow.indexOf(status);
  return flow[Math.min(i + 1, flow.length - 1)];
}

export function escalatePriority(priority) {
  const levels = ['Low', 'Medium', 'High', 'Critical'];
  const i = levels.indexOf(priority);
  return levels[Math.min(i + 1, levels.length - 1)];
}
