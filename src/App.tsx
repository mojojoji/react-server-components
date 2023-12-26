import { Suspense } from "react";
import { Counter } from "./Counter";
import { ServerComponent } from "./ServerComponent";

export function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <a href="#">Test link</a>
      <Counter />
      <Suspense fallback={<div>Loading</div>}>
        <ServerComponent />
      </Suspense>
    </div>
  );
}
