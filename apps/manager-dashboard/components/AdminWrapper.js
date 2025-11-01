'use client';

import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('./AdminApp'), { ssr: false });

const AdminWrapper = () => {
  return <AdminApp />;
};

export default AdminWrapper;
