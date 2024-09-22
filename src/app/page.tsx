import { getUser } from "@/apis/users-api";
import { formattedDate } from "@/utils/date-util";

export async function generateMetadata() {
  const userResponse = await getUser("1");

  return {
    title: `${userResponse.success ? userResponse.data?.name : 'Awesome App'} | Home Page`,
    description: "Home Page Description",
  }
}

export default async function Home() {
  const userResponse = await getUser("1");
  const date = formattedDate();

  return (
    <div>
      User {userResponse.data?.name} Data Fetched on {date}{" "}
    </div>
  );
}
