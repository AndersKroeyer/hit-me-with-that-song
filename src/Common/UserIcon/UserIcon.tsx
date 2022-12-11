/** @jsxImportSource @emotion/react */
import { Avatar, css, Menu, MenuItem, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
import * as React from 'react';
import { AuthContext } from '../../Firebase/FirebaseAuthContext';
import { auth } from '../../Firebase/Firebase';

function UserIcon() {
  const userContext = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  if (!userContext.state) {
    return <div> Unknown user </div>;
  }

  const style = css({
    position: 'absolute',
    top: 22,
    right: 15,
  });

  const LogoutClick = () => {
    auth.signOut();
    userContext.update(null);
  };

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const photo = userContext.state?.user?.photoURL ?? undefined;
  const { user } = userContext.state;
  return (
    <div css={style}>
      <Tooltip title={user.email} arrow>
        <div>
          <Avatar
            onClick={handleOpen}
            alt={user.displayName ?? ''}
            src={photo}
          />
        </div>
      </Tooltip>
      <Menu open={menuOpen} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem onClick={LogoutClick}>Log out</MenuItem>
      </Menu>
    </div>
  );
}
export default UserIcon;
