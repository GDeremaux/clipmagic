import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import logout from "@/actions/logout";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <form action={async () => {
      "use server";

      await logout();
    }}>
      <Button variant="destructive" type="submit">Sign out</Button>
      <p>{JSON.stringify(session)}</p>
    </form>
  )
};

export default SettingsPage;