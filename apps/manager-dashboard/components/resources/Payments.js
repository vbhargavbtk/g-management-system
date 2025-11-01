import { List, Datagrid, TextField, NumberField, DateField, ReferenceField, Edit, SimpleForm, NumberInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';

export const PaymentList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="tenantId" reference="tenants">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="amount" />
      <DateField source="date" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export const PaymentEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="tenantId" reference="tenants">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="amount" />
      <DateInput source="date" />
      <SelectInput source="status" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'completed', name: 'Completed' },
        { id: 'failed', name: 'Failed' },
      ]} />
    </SimpleForm>
  </Edit>
);

export const PaymentCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="tenantId" reference="tenants">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="amount" />
      <DateInput source="date" />
      <SelectInput source="status" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'completed', name: 'Completed' },
        { id: 'failed', name: 'Failed' },
      ]} />
    </SimpleForm>
  </Create>
);
