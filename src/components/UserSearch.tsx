import { useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

export const UserSearch = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const search = async () => {
    const { data } = await axios.get<User>(`/api/users?query=${query}`);
    setUser(data);
  };

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={search}>Search</button>
      {user && <div>{user.name}</div>}
    </div>
  );
};
