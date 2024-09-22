import { getTodos } from "@/apis/todos-api";
import { getUser } from "@/apis/users-api";
import { formattedDate } from "@/utils/date-util";


export async function generateMetadata() {
  const userResponse = await getUser("1");

  return {
    title: `${userResponse.success ? userResponse.data?.name : 'Awesome App'} | Todo Page`,
    description: "Todo Page Description",
  }
}

export default async function Todos() {
  const [userResponse, todosResponse] = await Promise.all([getUser("1"), getTodos()]);
  const date = formattedDate();
  
  return (
    <div>
      {todosResponse.data?.length} Todos fetched by {userResponse.data?.name} on{" "}
      {date}{" "}
    </div>
  );
}
