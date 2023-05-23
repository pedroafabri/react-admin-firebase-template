import { Admin, CustomRoutes } from "react-admin";
import Theme from "@/theme";
import LoginPage from "@/pages/login";
import AuthProvider from "@/providers/AuthProvider";
import DataProvider from "@/providers/DataProvider";
import Resources from "@/resources";
import Layout from "@/components/layout";
import { ChangePasswordPage } from "./pages";
import { Route } from "react-router-dom";

const App = () => (
  <Admin
    layout={Layout}
    theme={Theme}
    loginPage={LoginPage}
    authProvider={AuthProvider}
    dataProvider={DataProvider}
  >
    {Object.values(Resources).map((resource) => resource())}
    <CustomRoutes>
      <Route path="/change-password" element={<ChangePasswordPage />} />
    </CustomRoutes>
  </Admin>
);

export default App;
