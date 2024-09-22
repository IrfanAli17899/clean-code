import axios from "axios";

export default async function Home() {
  // [ISSUE]
  // Hard Coded Base URL / Config Envs
  // Not Centralized Library Initialization
  // Duplicated API call logic in every component and Not Centralized API calls
  // Duplicated date formatting logic in every component
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/1`
  );

  const userData = response.data;

  const today = new Date();
  const formattedDate = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  return (
    <div>
      User {userData.name} Data Fetched on {formattedDate}{" "}
    </div>
  );
}
