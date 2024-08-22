import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, setError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setError(null);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await login(username, password);

    if (result) {
      navigate('/books', { replace: true });
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-start pt-3">
      <h2 className="text-2xl">LogIn</h2>
      <form
        className="flex flex-col gap-3 w-3/6 p-3 rounded shadow-md border border-gray-200 mx-auto"
        onSubmit={handleLogin}
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-emerald-500 text-white py-3 px-5 rounded self-center" type="submit">
          LogIn
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
