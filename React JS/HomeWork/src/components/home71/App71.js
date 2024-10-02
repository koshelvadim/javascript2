import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "./redux/usersReduser";
import { fetchUser } from "./redux/userReduser";

function App71() {
  const { users, loading, error } = useSelector((state) => state.users);
  const { user, loadingUser, errorUser } = useSelector((state) => state.user);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = (userId) => {
    setUserId(userId);
    dispatch(fetchUser(userId));
  };
  
  return (
    <div className="block">
      <h1 className="block__title">Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? (
        <ul>
          {users.map((person) => (
            <details
              className="block__details"
              key={person.id}
              onClick={() => handleClick(person.id)}
            >
              <summary className="block__summary">{person.name}</summary>
              {loadingUser && <p>Загрузка...</p>}
              {errorUser && <p>Ошибка {errorUser}</p>}
              {userId === person.id ? (
                <div className="block__user">
                  <p>UserName: {user.username}</p>
                  <p>Phone: {user.phone}</p>
                  <p>E-mail: {user.email}</p>
                  <p>Website: {user.website}</p>
                </div>
              ) : null}
            </details>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App71;