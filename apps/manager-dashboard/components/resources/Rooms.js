import { List, Datagrid, TextField, NumberField, Edit, SimpleForm, TextInput, NumberInput, Create } from 'react-admin';

export const RoomList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="roomNumber" />
      <NumberField source="capacity" />
      <NumberField source="rent" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const RoomEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="roomNumber" />
      <NumberInput source="capacity" />
      <NumberInput source="rent" />
      <TextInput source="status" />
    </SimpleForm>
  </Edit>
);

export const RoomCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="roomNumber" />
      <NumberInput source="capacity" />
      <NumberInput source="rent" />
      <TextInput source="status" />
    </SimpleForm>
  </Create>
);
