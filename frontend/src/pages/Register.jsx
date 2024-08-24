import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const { register, error, setError } = useAuth();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [confirmPassword, setConfirmPassword] = useState(null);
  const [validMatch, setValidMatch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setError(null);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    const result = await register(username, confirmPassword);
    if (result) {
      navigate('/books');
    }
  };

  useEffect(() => {
    const match = password === confirmPassword;

    if (password && confirmPassword && !match) {
      console.log('passwords do not match');
      setError('passwords do not match');
      setValidMatch(match);
    }
    if (password && confirmPassword && match) {
      setValidMatch(match);
      setError(null);
    }
  }, [password, confirmPassword]);

  return (
    <div className="flex flex-col gap-3 items-center justify-start pt-3">
      <h2 className="text-2xl">Register</h2>
      <form
        className="flex flex-col gap-3 w-3/6 p-3 rounded shadow-md border border-gray-200 mx-auto"
        onSubmit={handleRegister}
      >
        <label htmlFor="username">Username:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-800"
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-800"
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="confirm_password">Confirm password:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-800"
          type="password"
          placeholder="confirm password"
          name="confirm password"
          id="confirm_password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button
          className="bg-emerald-500 text-white py-3 px-5 rounded self-center"
          type="submit"
          disabled={!validMatch ? true : false}
        >
          register
        </button>
        {error && (
          <p className="self-center bg-red-300 text-red-700 text-center border border-red-700 rounded p-3 w-full ">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
