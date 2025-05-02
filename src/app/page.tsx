// Import components
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Notification from "@/components/Notification";
import MenuGrid from "@/components/MenuGrid";
import GameSection from "@/components/GameSection";
import WinnerInfo from "@/components/WinnerInfo";
import IncomeRanking from "@/components/IncomeRanking";

import TabBar from "@/components/TabBar";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f6f1f1]">
      {/* Main content */}
      <Header />
      <Banner />
      <Notification />

      <main>
        <MenuGrid />
        <GameSection />
        <WinnerInfo />
        <IncomeRanking />
      </main>

      {/* Tab Bar */}
      <TabBar />
    </div>
  );
}
