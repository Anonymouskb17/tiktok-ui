import Header from "../component/Header/index";
import SideBar from "./SideBar/index";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
