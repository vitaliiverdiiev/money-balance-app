import { getData } from "../../../../actions/todoAction";
import Todos from "../../../../components/todos";

export default async function Page() {
  const data = await getData();
  return <Todos todos={data} />;
}
