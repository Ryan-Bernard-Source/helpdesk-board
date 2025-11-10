export async function GET() {
  const tickets = [
    {
      id: 't-1000',
      title: 'Cannot connect to Wifi',
      description: 'User reports laptop Wi-Fi connectivity errors.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T00:02:00Z'
    },
    {
      id: 't-1002',
      title: 'File Server connection reset',
      description: 'User reports errors connecting to file server.',
      priority: 'High',
      status: 'Resolved',
      assignee: 'Unassigned',
      updatedAt: '2025-10-01T11:30:00Z'
    },
    {
      id: 't-1003',
      title: 'Teams Echo',
      description: 'Echo appears when talking during meetings.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'James',
      updatedAt: '2025-10-01T12:27:00Z'
    },
    {
      id: 't-1004',
      title: 'Account Locked',
      description: 'User locked out of account after password reset.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Dmitri',
      updatedAt: '2025-08-01T13:29:00Z'
    },
    {
      id: 't-1005',
      title: 'Access Permissions Denied',
      description: 'User reports permission error when accessing file share.',
      priority: 'Medium',
      status: 'Resolved',
      assignee: 'Alice',
      updatedAt: '2025-10-01T12:24:00Z'
    },
    {
      id: 't-1006',
      title: 'New Hire Laptop Setup',
      description: 'Provision device, SSO, VPN, and MDM enrollment.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Riley',
      updatedAt: '2025-10-01T15:10:00Z'
    },
    {
      id: 't-1007',
      title: 'OneDrive Sync Conflict',
      description: 'User reports errors syncing OneDrive.',
      priority: 'Medium',
      status: 'Resolved',
      assignee: 'Maria',
      updatedAt: '2025-10-05T03:00:00Z'
    },
    {
      id: 't-1008',
      title: 'Slack SSO Failure',
      description: 'SAML assertion invalid for a subset of users.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Thomas',
      updatedAt: '2025-02-01T07:00:00Z'
    },
    {
      id: 't-1009',
      title: 'MacOS FileVault Recovery',
      description: 'User lost FV key and requested a reset.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Casey',
      updatedAt: '2025-10-03T02:00:00Z'
    },
    {
      id: 't-1010',
      title: 'Printer Offline on 3rd Floor',
      description: 'MFP shows offline, not visible to office users.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-01T14:00:00Z'
    },
    {
      id: 't-1011',
      title: 'Shared Drive Permissions',
      description: 'Accounting cannot access Q3 & Q4 Earnings folder.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'Unassigned',
      updatedAt: '2025-10-01T00:00:00Z'
    },
    {
      id: 't-1012',
      title: 'Access Request',
      description: 'Contracting team needs limited project access.',
      priority: 'Low',
      status: 'On Hold',
      assignee: 'Thomas',
      updatedAt: '2025-10-01T03:00:00Z'
    }
  ];

  return Response.json(tickets);
}
