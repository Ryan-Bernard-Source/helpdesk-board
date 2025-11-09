export async function GET(){
    const tickets = [
        {'id':'t-1000', 'title': 'Cannot connect to Wifi', 'description': 'User reports laptop Wifi connectivity errors.', 'priority':'Low', 'status': 'Open', 'assignee':'Unassigned','updatedAt':'2025-10-31T00:02'}
        ,{'id':'t-1002', 'title': 'File Server connection reset', 'description': 'User reports errors connecting to file server.', 'priority':'High', 'status': 'Resolved', 'assignee':'Unassigned','updatedAt':'2025-10-01:30T11'}
        ,{'id':'t-1003', 'title': 'Teams Echo', 'description': 'Echo appears when talking during meetings', 'priority':'Medium', 'status': 'In Progress', 'assignee':'James','updatedAt':'2025-10-01:27T12'}
        ,{'id':'t-1004', 'title': 'Account Locked', 'description': 'User locked out of account after password reset', 'priority':'High', 'status': 'In Progress', 'assignee':'Dmitri','updatedAt':'2025-08-01:29T13'}
        ,{'id':'t-1005', 'title': 'Access Permissions denied to file storage', 'description': 'User reports permission error when accessing file share', 'priority':'Medium', 'status': 'Closed', 'assignee':'Alice','updatedAt':'2025-10-01:24T12'}
        ,{'id':'t-1006', 'title': 'New Hire laptop setup', 'description': 'Provision device, SSO, VPN, and MDM enrollment', 'priority':'Low', 'status': 'Resolved', 'assignee':'Riley','updatedAt':'2025-10-01:15'}
        ,{'id':'t-1007', 'title': 'OneDrive Sync Conflict', 'description': 'User reports errors syncing OneDrive.', 'priority':'Medium', 'status': 'Resolved', 'assignee':'Maria','updatedAt':'2025-10-05:03'}
        ,{'id':'t-1008', 'title': 'Slack SSO Failure', 'description':'SAML assertion invalid for subset of users.', 'priority':'High', 'status': 'In Progress', 'assignee':'Thomas','updatedAt':'2025-02-01:07'}
        ,{'id':'t-1009', 'title': 'MacOS FileVault Recovery', 'description': 'User reports losing FV key requesting a reset.', 'priority':'Medium', 'status': 'Open', 'assignee':'Casey','updatedAt':'2025-10-03:02'}
        ,{'id':'t-1010', 'title': 'Printer offline on 3rd floor.', 'description': 'MFP shows offline, printer not visible to office users.', 'priority':'High', 'status': 'Open', 'assignee':'Unassigned','updatedAt':'2025-10-01:14'}
        ,{'id':'t-1011', 'title': 'Shared drive permissions', 'description': 'Accounting cannot access last years Q3 & Q4 Earnings folder', 'priority':'High', 'status': 'On Hold', 'assignee':'Unassigned','updatedAt':'2025-10-01:00'}
        ,{'id':'t-1012', 'title': 'Access Request', 'description': 'Contracting Team needs limited project access.', 'priority':'Low', 'status': 'On Hold', 'assignee':'Thomas','updatedAt':'2025-10-01:03'}

    ];
    return Response.json(tickets);
}