// https://dogsapi.origamid.dev/json/api/user

import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [dados, setDdos] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    async function fetchAPI(url) {
      try {
        setLoading(true);
        const api = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            username,
            password,
          }),
        });
        const json = await api.json();
        setDdos(json);
      } catch (erro) {
        console.log(error);
        setError('Ocorreu um erro');
      } finally {
        setLoading(false);
      }
    }
    fetchAPI('https://dogsapi.origamid.dev/json/api/userasd');
  }

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
        className="border"
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        className="border"
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        className="border"
      />
      <button className="bg-zinc-200 px-3 py-1 rounded">Enviar</button>
    </form>
  );
};

export default UserPost;
