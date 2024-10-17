import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-t from-primary/10 to-background">
      <Header />
      <div className="flex p-4 gap-4 grow justify-stretch bg-background">
        <div>
          <Navigation />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
