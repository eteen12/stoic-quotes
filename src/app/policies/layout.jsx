import NavBar from "@/components/layout/navBar";
import "../globals.css";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="max-w-[1700px]">{children}</div>
    </div>
  );
}
