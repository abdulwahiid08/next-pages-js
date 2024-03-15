import { Children } from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

const MasterApp = (props) => {
  const { children } = props;
  const { pathname } = useRouter();
  const disableNavbar = ["/auth/login", "/auth/register"]; // Disable route jika mengakses route tsb

  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <div className="px-10">{children}</div>
    </main>
  );
};

export default MasterApp;
