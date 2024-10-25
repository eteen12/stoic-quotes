import NavBar from "@/components/layout/navBar";
import "../globals.css";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
