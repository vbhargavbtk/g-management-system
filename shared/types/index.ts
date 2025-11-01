export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  roomId: string;
  rent: number;
  joiningDate: string;
}

export interface Room {
  id: string;
  roomNumber: string;
  capacity: number;
  rent: number;
  status: 'available' | 'occupied' | 'maintenance';
}

export interface Payment {
  id: string;
  tenantId: string;
  amount: number;
  date: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface Complaint {
  id: string;
  tenantId: string;
  description: string;
  category: 'maintenance' | 'food' | 'cleanliness' | 'other';
  status: 'open' | 'in-progress' | 'resolved';
  createdAt: string;
}
