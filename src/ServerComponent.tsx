export async function ServerComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div> Server Component</div>;
}
