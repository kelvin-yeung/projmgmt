import SubscriptionCard from "../components/subscription-card";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="relative">
          <h1 className="text-9xl font-bold text-center text-white">
            Proj
          </h1>
          <div className="flex justify-center gap-4">
          <SubscriptionCard title="TEST" desc="" fee={0} features=""></SubscriptionCard>
          </div>
        </div>
      </div>
    </>
  );
}
