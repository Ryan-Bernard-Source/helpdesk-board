## Helpdesk Ticket Board

This project implements a Helpdesk Ticket Board built with Next.js (App Router) and Tailwind CSS using JavaScript + JSX only.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features:
- Loads ticket data dynamically from /api/tickets
- Displays 12–16 sample tickets with mixed priorities and statuses
- Simulated live updates every 6–10 seconds (random ticket change)
- Filter tickets by status and priority
- Search tickets by title or description (case-insensitive)
- Add tickets to My Queue
- Remove tickets individually or clear all
- Shows loading, error, and empty states
- Responsive layout styled with Tailwind CSS

