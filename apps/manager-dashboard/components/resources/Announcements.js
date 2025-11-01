import { List, Datagrid, TextField, DateField, Edit, SimpleForm, TextInput, DateInput, Create } from 'react-admin';

export const AnnouncementList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <DateField source="date" />
    </Datagrid>
  </List>
);

export const AnnouncementEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" multiline />
      <DateInput source="date" />
    </SimpleForm>
  </Edit>
);

export const AnnouncementCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" multiline />
      <DateInput source="date" />
    </SimpleForm>
  </Create>
);
