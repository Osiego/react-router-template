import type { RouterState } from "@remix-run/router";
import { Welcome } from "../welcome/welcome";
import { Page } from "../app/home/index.tsx";

export function meta({}: { state: RouterState }) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
   
  ];
}

export default function Home() {
  return(
  <div>
  <Welcome />
  <Page />
</div>
);
}
