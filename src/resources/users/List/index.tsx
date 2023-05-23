import { Datagrid, EmailField, List, TextField } from "react-admin";

const CustomList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="userType" />
      </Datagrid>
    </List>
  );
};

export default CustomList;
