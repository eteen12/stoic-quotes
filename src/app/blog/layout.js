import NavBar from "@/components/layout/navBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
