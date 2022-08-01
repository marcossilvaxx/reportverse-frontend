const getUserToken = () => {
  return localStorage.getItem('reportverse:user_token');
};

export default getUserToken;