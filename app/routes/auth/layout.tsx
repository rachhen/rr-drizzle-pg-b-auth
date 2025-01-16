import { Outlet, redirect } from "react-router";

import { auth } from "~/lib/auth.server";
import type { Route } from "./+types/layout";

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await auth.api.getSession({ headers: request.headers });

  if (session) {
    throw redirect("/");
  }
};

function AuthLayout() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
