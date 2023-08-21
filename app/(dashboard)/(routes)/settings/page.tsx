import { Settings } from "lucide-react";

import { Heading } from "@/components/heading";
import { checkSubscription } from "@/lib/subscription";
import { SubscriptionButton } from "@/components/subscriotion-button";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className=" flex justify-center items-center h-[80vh]">
      <div className=" border border-gray-700 rounded-md p-8 flex flex-col justify-between h-full ">
        <Heading
          title="Settings"
          description="Manage account settings."
          icon={Settings}
          iconColor="text-gray-700"
          bgColor="bg-gray-700/10"
        />
        <div className="px-4 lg:px-8 space-y-4">
          <div className="text-muted-foreground text-sm">
            {isPro
              ? "You are currently on a Pro plan."
              : "You are currently on a free plan."}
          </div>
          <SubscriptionButton isPro={isPro} />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
