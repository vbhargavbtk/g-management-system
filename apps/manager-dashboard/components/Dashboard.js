import { Card, CardContent, CardHeader } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Rent Collected',
      data: [65000, 59000, 80000, 81000, 56000, 55000, 40000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the Dashboard" />
    <CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Card style={{ flex: 1, margin: '0 10px' }}>
          <CardHeader title="Total Tenants" />
          <CardContent>100</CardContent>
        </Card>
        <Card style={{ flex: 1, margin: '0 10px' }}>
          <CardHeader title="Rent Pending" />
          <CardContent>10</CardContent>
        </Card>
        <Card style={{ flex: 1, margin: '0 10px' }}>
          <CardHeader title="Open Complaints" />
          <CardContent>5</CardContent>
        </Card>
      </div>
      <div style={{ marginTop: 20 }}>
        <Bar data={chartData} />
      </div>
    </CardContent>
  </Card>
);

export default Dashboard;
