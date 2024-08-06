import { Outlet } from "react-router-dom";
import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

interface ILayoutProps {
    
}
 
const Layout:React.FC<ILayoutProps> = ():JSX.Element => {
    return ( 
      <>
        <Header/>
       <div className="content">
        <Outlet/>
       </div>
        <Footer/>
      </>
    );
}
 
export default Layout;