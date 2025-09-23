import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="pt-24"></div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
