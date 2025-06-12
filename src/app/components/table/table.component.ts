import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  callData = [
    {
      empId: 'DM225884',
      infoId: '05AAAMD30293040R',
      dealerName: 'Ritik Beniwal',
      additionalInfo: 'Lead',
      issueCategory: 'KYC',
      issueStatus: 'Unresolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Rescheduled',
      callDate: '20 Apr 2025',
      callDetailsTime: '01:12 PM',
      callDetailsDuration: '04:5 min'
    },
    {
      empId: 'DM225885',
      infoId: '05AAAMD30293041R',
      dealerName: 'Manpreet Singh',
      additionalInfo: 'Opportunity',
      issueCategory: 'e-Mandate',
      issueStatus: 'Resolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Scheduled',
      callDate: '20 Apr 2025',
      callDetailsTime: '02:30 PM',
      callDetailsDuration: '10:12 min'
    },
    {
      empId: 'DM225886',
      infoId: '05AAAMD30293042R',
      dealerName: 'Avika Sharma',
      additionalInfo: 'NACH',
      issueCategory: 'e-Mandate',
      issueStatus: 'Pending',
      comments: 'Lorem Ipsum',
      callStatus: 'Ended',
      callDate: '20 Apr 2025',
      callDetailsTime: '11:45 AM',
      callDetailsDuration: '10:12 min'
    },
    {
      empId: 'DM225887',
      infoId: '05AAAMD30293043R',
      dealerName: 'Sourabh Kumar',
      additionalInfo: 'Contact ID',
      issueCategory: 'e-Mandate',
      issueStatus: 'Resolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Ended',
      callDate: '20 Apr 2025',
      callDetailsTime: '03:10 PM',
      callDetailsDuration: '10:12 min'
    },
    {
      empId: 'DM225888',
      infoId: '05AAAMD30293044R',
      dealerName: 'Hrithik Runelt',
      additionalInfo: 'Payment ID',
      issueCategory: 'e-Mandate',
      issueStatus: 'Pending',
      comments: 'Lorem Ipsum',
      callStatus: 'Ended',
      callDate: '20 Apr 2025',
      callDetailsTime: '10:05 AM',
      callDetailsDuration: '10:12 min'
    },
    {
      empId: 'DM225889',
      infoId: '05AAAMD30293045R',
      dealerName: 'Naman Jain',
      additionalInfo: 'Lead',
      issueCategory: 'e-Mandate',
      issueStatus: 'Unresolved',
      comments: 'Lorem Ipsum',
      callStatus: 'Cancelled',
      callDate: '20 Apr 2025',
      callDetailsTime: '04:20 PM',
      callDetailsDuration: '04:2 min'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  // Get initials from dealer name
  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  // Get avatar background color based on name
  getAvatarColor(name: string): string {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-red-500',
      'bg-yellow-500',
      'bg-teal-500'
    ];
    const index = name.length % colors.length;
    return colors[index];
  }

  // Get badge class for additional info
  getInfoBadgeClass(info: string): string {
    const badgeClasses: { [key: string]: string } = {
      'Lead': 'bg-blue-100 text-blue-800',
      'Opportunity': 'bg-green-100 text-green-800',
      'NACH': 'bg-purple-100 text-purple-800',
      'Contact ID': 'bg-indigo-100 text-indigo-800',
      'Payment ID': 'bg-pink-100 text-pink-800',
      'Follow-up': 'bg-yellow-100 text-yellow-800',
      'Complaint': 'bg-red-100 text-red-800',
      'New Lead': 'bg-teal-100 text-teal-800',
      'Enquiry': 'bg-gray-100 text-gray-800'
    };
    return badgeClasses[info] || 'bg-gray-100 text-gray-800';
  }

  // Get badge class for issue status
  getStatusBadgeClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'Resolved': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Unresolved': 'bg-red-100 text-red-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Closed': 'bg-gray-100 text-gray-800'
    };
    return statusClasses[status] || 'bg-gray-100 text-gray-800';
  }

  // Get badge class for call status
  getCallStatusBadgeClass(status: string): string {
    const callStatusClasses: { [key: string]: string } = {
      'Completed': 'bg-green-100 text-green-800',
      'Scheduled': 'bg-blue-100 text-blue-800',
      'Rescheduled': 'bg-orange-100 text-orange-800',
      'Ended': 'bg-gray-100 text-gray-800',
      'Cancelled': 'bg-red-100 text-red-800',
      'Missed': 'bg-red-100 text-red-800',
      'Failed': 'bg-red-100 text-red-800'
    };
    return callStatusClasses[status] || 'bg-gray-100 text-gray-800';
  }
}