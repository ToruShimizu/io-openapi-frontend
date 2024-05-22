import styles from "./page.module.css";
import { AppsFooApi } from "@torushimizu/io-openapi-client";

export default async function Home() {
  const client = new AppsFooApi();
  const users = await client.getUsers();

  return (
    <main className={styles.main}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
