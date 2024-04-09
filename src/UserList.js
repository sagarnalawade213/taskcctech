import React from 'react';
import useUserDetails from './useUserDetails';
import Error from './Error';
import Loader from './Loader';
import './UserList.css';

const UserList = () => {
  const { data, loading, error } = useUserDetails('https://randomuser.me/api/?results=10');

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="user-list">
      {data.map((user, index) => (
        <div className="user-card" key={index}>
        <div className='imageWrapper'>
            <img src={user.picture.medium} alt="User" />
        </div>
        <div className='detailsWrapper'> 
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>{user.email}</p>
            <p>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
