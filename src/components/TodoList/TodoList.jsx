
import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import './TodoList.scss';

export class TodoList extends React.Component {
  state = {
    query: '',
    status: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  // todo подготовка методов для фильтровки инпутом и селектом
  filterByTitle = todo => (
    todo.title.toLowerCase().includes(this.state.query.toLowerCase())
  )

  filterByStatus = (todo) => {
    switch (this.state.status) {
      case 'active': return !todo.completed;
      case 'completed': return todo.completed;
      default: return true;
    }
  }

  render() {
    const { todos, onUserSelect, selectedUserId } = this.props;

    // todo используем методы фильтрации для массива видимых тудушек
    const visibleTodos = todos
      .filter(this.filterByTitle)
      .filter(this.filterByStatus);

    return (
      <div className="TodoList">
        <h2>Todos:</h2>
        <div className="TodoList__list-container">

          <form className="TodoList__form">
            <label className="TodoList__label">
              <h3>Find todo by title</h3>
              <input
                className="TodoList__input"
                type="text"
                name="query"
                placeholder="Enter title here"
                value={this.state.query}
                onChange={this.handleChange}
              />
            </label>

            <label>
              <h3>Find todo by status</h3>
              <select
                className="TodoList__input"
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
              >
                <option value="" disabled>Choose todo status</option>
                <option value="" style={{ color: '#2146ff' }}>All todos</option>
                <option
                  value="active"
                  style={{ color: '#ff3626' }}
                >
                  Active todos
                </option>
                <option
                  value="completed"
                  style={{ color: '#459595' }}
                >
                  Completed todos
                </option>
              </select>
            </label>
          </form>

          <ul className="TodoList__list">
            {visibleTodos.map(({ id, title, userId, completed }) => (
              <li
                key={id}
                className={classNames('TodoList__item',
                  {
                    'TodoList__item--unchecked': !completed,
                    'TodoList__item--checked': completed,
                  })}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={completed}
                    readOnly
                  />
                  <p>{title}</p>
                </label>

                <button
                  type="button"
                  className={classNames('TodoList__user-button',
                    'button',
                    {
                      'TodoList__user-button--selected':
                        selectedUserId === userId,
                    })}
                  onClick={() => {
                    onUserSelect(userId);
                  }}
                >
                  User&nbsp;
                  #
                  {userId}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      iserId: propTypes.number.isRequired,
      completed: propTypes.bool.isRequired,
    }),
  ),
  onUserSelect: propTypes.func.isRequired,
  selectedUserId: propTypes.number.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};
