/* eslint-disable no-console */

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { getInitials } from 'helpers';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = (props) => {
  const { className, ...rest } = props;
  const {user} = rest;
  const classes = useStyles([]);
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
      >
        {getInitials(user.lastName)}
      </Avatar>
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.lastName}
      </Typography>
      <Typography variant="body2">{user.email}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
