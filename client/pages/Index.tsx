import { PortalHeader } from "@/components/esim-portal/PortalHeader";
import { HeroSection } from "@/components/esim-portal/HeroSection";
import { ResellerInfo } from "@/components/esim-portal/ResellerInfo";
import { ApprovalCard } from "@/components/esim-portal/ApprovalCard";
import { ReferralCode } from "@/components/esim-portal/ReferralCode";
import { FeaturesGrid } from "@/components/esim-portal/FeaturesGrid";
import { PortalFooter } from "@/components/esim-portal/PortalFooter";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background gradient with subtle grid effect */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800" />

      {/* Decorative gradient blobs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full -mr-32 -mt-32 blur-3xl -z-10" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-600/20 to-cyan-500/20 rounded-full -ml-32 -mb-32 blur-3xl -z-10" />

      <PortalHeader />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-4xl">
          <HeroSection />

          <ResellerInfo name="M Fahad" ranking="87th" type="Affiliate" />

          <ApprovalCard />

          <ReferralCode code="TE77769" />

          <FeaturesGrid />

          <PortalFooter />
        </div>
      </main>
    </div>
  );
}
