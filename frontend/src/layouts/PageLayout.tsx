import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";
import { Outlet } from "react-router";

const PageLayout = () => {
  // const { isDark } = useTheme();

  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <BottomNavBar />
      {/* <Toaster toastOptions={{ className: "text-sm" }} /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default PageLayout;
