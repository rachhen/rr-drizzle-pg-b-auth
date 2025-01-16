import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { client } from "~/lib/auth-client";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { data } = client.useSession();
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2>Home</h2>
      <nav>
        <ul className="flex flex-row gap-4">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      {data?.session && (
        <>
          <p>Logged in as {data?.user.name}</p>
          <Button onPress={() => client.signOut()}>Logout</Button>
        </>
      )}
    </div>
  );
}
