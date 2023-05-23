import { capitalizeFirstLetter } from ".";

const enumToSelectInput = (o: any) => 
  Object.keys(o).map(k => ({id: k.toLowerCase(), name: capitalizeFirstLetter(k)}))

export default enumToSelectInput;