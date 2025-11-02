'use client';

import { Admin, Resource } from 'react-admin';

import dataProvider from './dataProvider';
import authProvider from './authProvider';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import { RoomList, RoomEdit, RoomCreate } from './resources/Rooms';
import { TenantList, TenantEdit, TenantCreate } from './resources/Tenants';
import { PaymentList, PaymentEdit, PaymentCreate } from './resources/Payments';
import { AnnouncementList, AnnouncementEdit, AnnouncementCreate } from './resources/Announcements';
import { FoodMenuList, FoodMenuEdit, FoodMenuCreate } from './resources/FoodMenu';

const AdminApp = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    loginPage={LoginPage}
  >
    <Resource name="rooms" list={RoomList} edit={RoomEdit} create={RoomCreate} />
    <Resource name="tenants" list={TenantList} edit={TenantEdit} create={TenantCreate} />
    <Resource name="payments" list={PaymentList} edit={PaymentEdit} create={PaymentCreate} />
    <Resource name="announcements" list={AnnouncementList} edit={AnnouncementEdit} create={AnnouncementCreate} />
    <Resource name="food-menu" list={FoodMenuList} edit={FoodMenuEdit} create={FoodMenuCreate} />
  </Admin>
);

export default AdminApp;
