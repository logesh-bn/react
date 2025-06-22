import React, { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, { ...user }]);
    setUser({ name: '', email: '', password: '' }); // reset form
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((u, index) => (
              <tr key={index}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;