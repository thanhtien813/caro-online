import React, { useEffect, useState } from 'react';
import User from '../../components/User';
import decode from 'jwt-decode';
import { TOKEN_NAME } from '../../global/constants';
import socket from '../../global/socket';

const OnlineUsers = () => {
  const [users, setUsers] = useState([]);
  const userInfo = decode(localStorage.getItem(TOKEN_NAME));

  useEffect(() => {
    socket.emit('get-online-list');
    socket.emit('update-status', { _id: userInfo._id, isOnline: true });
    socket.on('online-list', data => {
      setUsers(data);
    });
    socket.on('update-online-list', data => {
      setUsers(data);
    })
    return () => {
      socket.off('online-list');
      socket.off('update-online-list');
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {users.map((user) => {
        if (userInfo._id !== user._id)
          return <User key={user._id} user={user} />
        return <div key={user._id} > </div>
      })}
    </>
  )
}


export default OnlineUsers;