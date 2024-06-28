"use server";

import { auth } from "@/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const CreditsInfo = async () => {
  const session = await auth() as any;
  const creditAmount = session.user.credits;
  const plan = session.user.plan;

  return (
    <Card>
      <CardContent className="flex flex-col gap-y-2 text-sm p-4">
        <div className="flex flex-row justify-between">
          <span className="opacity-50">Credits:</span>
          <span>{creditAmount}</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="opacity-50">Current plan:</span>
          <span>{plan || "Free"}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default CreditsInfo;