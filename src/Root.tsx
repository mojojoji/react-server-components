import { PropsWithChildren } from "react";

export function Root(props: PropsWithChildren) {
  return (
    <html>
      <head>
        <title>React server components</title>
      </head>
      <body>
        <div id="root">{props.children}</div>
      </body>
    </html>
  );
}
