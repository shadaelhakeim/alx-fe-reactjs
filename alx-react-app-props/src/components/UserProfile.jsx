import PropTypes from 'prop-types';
import { useContext } from 'react';  // Import React and useContext
import UserContext from './UserContext';    // Make sure the path to UserContext is correct

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
};
export default UserProfile;