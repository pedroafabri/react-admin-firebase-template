import { ListGuesser, Resource, ResourceOptions } from "react-admin";
import List from "./List";
import Create from "./Create";
import Edit from './Edit'

const options : ResourceOptions = {
  label: 'Usuários',
}

const resource = () => {
  return <Resource 
    name='users' 
    list={List} 
    create={Create}
    edit={Edit}
    options={options}
  />;
};

export default resource;
