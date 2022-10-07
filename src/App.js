import "./App.css";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [useSearch, setSearch] = useState("");

  const handleSearch = async () => {
    await fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setSearch(data.items);
      });
  };

  return (
    <main>
      <section className="container">
        <header>
          <h1>BUSCA USUÁRIO</h1>
        </header>
        <div className="input-container">
          <input
            className="input-text"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            type="text"
            placeholder="Pesquisar"
          />
          <div>
            <button
              className="input-submit"
              onClick={handleSearch}
              type="submit"
            ></button>
          </div>
        </div>
      </section>
      <section>
        <ul>
          {useSearch.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={`Foto de ${user.login}`} />

              {user.login}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
