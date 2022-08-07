const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('reportverse:user_info'));
};

export default getUserInfo;