import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../styles/ProfilePage.less';


const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
      <div class="profile-container">
      <img src={picture} alt="Profile Picture" class="profile-picture" />
      <div class="profile-details">
        <h1 class="profile-name">{name}</h1>
        <p class="profile-email">{email}</p>
      </div>
    </div>
  );
};

export default Profile;