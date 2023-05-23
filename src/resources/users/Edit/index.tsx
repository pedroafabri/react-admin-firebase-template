import { enumToSelectInput } from "@/helpers";
import { UserType } from "@/types";
import { Edit, SelectInput, SimpleForm, TextInput, required, email } from "react-admin";

const EditUser = () => {
  return(
    <Edit redirect='list'>
      <SimpleForm>
        <TextInput label="ID" source="id" disabled/>
        <TextInput source="name" validate={[required()]}/>
        <TextInput source="email" validate={[required(), email()]} />
        <SelectInput source="userType" validate={[required()]} choices={enumToSelectInput(UserType)}/>
      </SimpleForm>
    </Edit>
  )
}

export default EditUser;