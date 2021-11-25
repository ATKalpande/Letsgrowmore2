
import { useState } from 'react';
import './App.css';

const App = () => {

  const [users, setUser] = useState([]);

  const loadUsers = async () => {
    console.log('before ')
    const responce = await fetch("https://reqres.in/api/users?page=1");

    const jasonResponce = await responce.json();

    console.log(jasonResponce);

    setUser(jasonResponce.data);

  }

  const loadUsersa = async () => {
    console.log('Another Responce');
    const responce1 = await fetch("https://reqres.in/api/users?page=2");
    const jasonResponce1 = await responce1.json();
    console.log(jasonResponce1);
    setUser(jasonResponce1.data);
  }



  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Task</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link disabled">Login</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
        <h2>Click Here to get User data</h2>
        <button type="button" className="btn" onClick={loadUsers}>Get User</button>


      </header>
      <hr />
      <div className="container">
        {users.map(({ avatar, email, first_name, id, last_name }) => (
          <ul className="da">
            <li id="key">{id}</li>
            <img id="ig" src={avatar}></img>
            <li >{first_name}{last_name}</li>
            <li >{email}</li>
          </ul>

        )

        )}
      </div>

    </div >
  );
}

export default App;
