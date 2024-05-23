// This route automatically redirects to the default dashboard route

"use server";

import { redirect } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const DashboardIndexPage = () => {
  redirect(DEFAULT_LOGIN_REDIRECT);
};

export default DashboardIndexPage;