import React from 'react';
// import classNames from 'classnames';

import './App.scss';
import './styles/general.scss';

import { TodoList } from './components/TodoList';
import { CurrentUser } from './components/CurrentUser';

import { getTodos } from './api/api';

class App extends React.Component {
  state = {
    todos: [],
    selectedUserId: 0,
  };

  // componentDidMount() {  //можно так
  //   getTodos()
  //     .then((result) => {
  //       this.setState({
  //         todos: result,
  //       });
  //     });
  // }

  async componentDidMount() {
    const todos = await getTodos();

    this.setState({ todos });
  }

  selectUser = (userId) => {
    if (userId === this.state.selectedUserId) {
      return;
    }

    this.setState({
      selectedUserId: userId,
    });
  }

  clearForm = () => {
    this.setState({
      selectedUserId: 0,
    });
  }

  render() {
    const { todos, selectedUserId } = this.state;

    return (
      <div className="App">
        <div className="App__sidebar">
          <TodoList
            todos={todos}
            onUserSelect={this.selectUser}
            selectedUserId={selectedUserId}
          />
        </div>

        <div className="App__content">
          <div className="App__content-container">
            {selectedUserId ? (
              <CurrentUser
                userId={selectedUserId}
                clearUser={this.clearForm}
              />
            ) : 'No user selected'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
