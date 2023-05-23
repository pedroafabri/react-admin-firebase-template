import { Layout as RALayout, LayoutProps } from 'react-admin';
import AppBar from './app-bar';


const Layout = (props: LayoutProps) => <RALayout {...props} appBar={AppBar} />;

export default Layout;