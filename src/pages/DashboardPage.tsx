import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatsCards from '@/components/dashboard/StatsCards';
import RevenueChart from '@/components/dashboard/RevenueChart';
import RecentActivity from '@/components/dashboard/RecentActivity';
import TopProjects from '@/components/dashboard/TopProjects';
import TeamMembers from '@/components/dashboard/TeamMembers';
import QuickActions from '@/components/dashboard/QuickActions';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Good morning, Alex 👋</h1>
            <p className="dashboard-subtitle">Here's what's happening with your projects today.</p>
          </div>
          <QuickActions />
        </div>
        <StatsCards />
        <div className="dashboard-grid">
          <RevenueChart />
          <RecentActivity />
        </div>
        <div className="dashboard-grid dashboard-grid--3col">
          <TopProjects />
          <TeamMembers />
        </div>
      </div>
    </DashboardLayout>
  );
}
