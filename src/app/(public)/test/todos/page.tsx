import { getData, Todos } from "~/src/modules/todos";

export default async function Page() {
  const data = await getData();
  return <Todos todos={data} />;
}
