import { firebaseConfig } from "@/firebaseConfig";
import { FirebaseDataProvider, RAFirebaseOptions } from "react-admin-firebase";
import { CreateParams } from "react-admin";
import { createAuthUser } from "./functions/authUser";
import createCoupons from "./functions/createCoupons";

const options: RAFirebaseOptions = {
  lazyLoading: {
    enabled: true,
  },
};

const dataProvider = FirebaseDataProvider(firebaseConfig, options);

const create = dataProvider.create;
const update = dataProvider.update;

dataProvider.create = async (resource, params: CreateParams) => {
  if (resource === "users") {
    const user = await createAuthUser(params);
    params.data.id = user.uid;
  }
  if (resource === "coupons") return createCoupons(params, resource, create);
  return create(resource, params);
};

dataProvider.update = async (resource, params) => {
  if (resource === "coupons") return createCoupons(params, resource, update);

  return update(resource, params);
};
export default dataProvider;
