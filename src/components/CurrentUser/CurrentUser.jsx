import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import './CurrentUser.scss';

import { getUser } from '../../api/api';

export class CurrentUser extends React.PureComponent {
  state = {
    user: null,
  }

  componentDidMount() {
    this.loadUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.loadUser();
    }
  }

  loadUser = async() => {
    const user = await getUser(this.props.userId);

    this.setState({ user });
  }

  render() {
    const { userId, clearUser } = this.props;
    const { user } = this.state;

    return (
      <div className="CurrentUser">
        <h2 className="CurrentUser__title">
          <span>
            Selected user:
            {userId}
          </span>
        </h2>

        {!user ? (
          <p>
            Loading...
          </p>
        ) : (
          <>
            <h3 className="CurrentUser__name">
              {user.name}
            </h3>
            <p className="CurrentUser__email">
              {user.email}
            </p>
            <p className="CurrentUser__phone">
              {user.phone}
            </p>

            <button
              type="button"
              className={classNames(
                'button',
                'CurrentUser__clear',
              )}
              onClick={clearUser}
            >
              Clear
            </button>
          </>
        )}
      </div>
    );
  }
}

CurrentUser.propTypes = {
  userId: propTypes.number.isRequired,
  clearUser: propTypes.func.isRequired,
};
