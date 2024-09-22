import axios from "axios";


export async function generateMetadata() {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/1`
  );

  return {
    title: `${response.data.name} | Todos Page`,
    description: "Todos Page Description",
  }
}

export default async function Todos() {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/1`
  );

  const todosResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/todos`
  );

  const userData = response.data;

  const today = new Date();
  const formattedDate = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  return (
    <div>
      {todosResponse.data.length} Todos fetched by {userData.name} on{" "}
      {formattedDate}{" "}
    </div>
  );
}
