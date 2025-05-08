import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      <Header />
      <main>
        {children}
      </main>
      <TabBar />
    </div>
  );
}
