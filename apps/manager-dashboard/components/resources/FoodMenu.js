import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create, SelectInput } from 'react-admin';

export const FoodMenuList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="day" />
      <TextField source="breakfast" />
      <TextField source="lunch" />
      <TextField source="dinner" />
    </Datagrid>
  </List>
);

const days = [
  { id: 'Monday', name: 'Monday' },
  { id: 'Tuesday', name: 'Tuesday' },
  { id: 'Wednesday', name: 'Wednesday' },
  { id: 'Thursday', name: 'Thursday' },
  { id: 'Friday', name: 'Friday' },
  { id: 'Saturday', name: 'Saturday' },
  { id: 'Sunday', name: 'Sunday' },
];

export const FoodMenuEdit = () => (
  <Edit>
    <SimpleForm>
      <SelectInput source="day" choices={days} />
      <TextInput source="breakfast" />
      <TextInput source="lunch" />
      <TextInput source="dinner" />
    </SimpleForm>
  </Edit>
);

export const FoodMenuCreate = () => (
  <Create>
    <SimpleForm>
      <SelectInput source="day" choices={days} />
      <TextInput source="breakfast" />
      <TextInput source="lunch" />
      <TextInput source="dinner" />
    </SimpleForm>
  </Create>
);
