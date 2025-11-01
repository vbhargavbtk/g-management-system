import { List, Datagrid, TextField, EmailField, NumberField, DateField, Edit, SimpleForm, TextInput, NumberInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';

export const TenantList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <ReferenceInput source="roomId" reference="rooms">
        <SelectInput optionText="roomNumber" />
      </ReferenceInput>
      <NumberField source="rent" />
      <DateField source="joiningDate" />
    </Datagrid>
  </List>
);

export const TenantEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <ReferenceInput source="roomId" reference="rooms">
        <SelectInput optionText="roomNumber" />
      </ReferenceInput>
      <NumberInput source="rent" />
      <DateInput source="joiningDate" />
    </SimpleForm>
  </Edit>
);

export const TenantCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <ReferenceInput source="roomId" reference="rooms">
        <SelectInput optionText="roomNumber" />
      </ReferenceInput>
      <NumberInput source="rent" />
      <DateInput source="joiningDate" />
    </SimpleForm>
  </Create>
);
