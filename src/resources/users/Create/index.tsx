import { enumToSelectInput } from "@/helpers";
import { UserType } from "@/types";
import { Create, SelectInput, SimpleForm, TextInput, required, email } from "react-admin";

const CreateUser = () => {
 
  return(
    <Create redirect='list'>
      <SimpleForm>
        <TextInput source="name" validate={[required()]}/>
        <TextInput source="email" validate={[required(), email()]} />
        <SelectInput source="userType" validate={[required()]} choices={enumToSelectInput(UserType)}/>
      </SimpleForm>
    </Create>
  )
}

export default CreateUser;