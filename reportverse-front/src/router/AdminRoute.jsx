import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getUserInfo } from '../axios/response/response';


function AdminRoute({ history, children }) {
  useEffect(() => {
    (async () => {
      const userInfo = await getUserInfo();

      if(userInfo.userRole !== "ADMINISTRADOR") {
        history.push("/home");
      }
    })()
  }, []);

  return (
    <>
      {children}
    </>
  );
}

export default withRouter(AdminRoute);