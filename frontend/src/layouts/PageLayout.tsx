import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div className="dark:bg-neutral-950 dark:text-white">
      <Header />

      <main className="min-h-screendark:bg-neutral-950 dark:text-white">
        <Outlet />
      </main>

      <BottomNavBar />
    </div>
  );
};

export default PageLayout;
