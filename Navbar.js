import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  right: {
    float: 'right',
    display: 'flex',
  },
  left: {
    float: 'left',
    display: 'flex',

  },

}));


const Navbarc = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleClick1 = () => {
    navigate('/about');
  };

  const handleClick2 = () => {
    navigate('/contact');
  };


  return (
    <div className='navbar' >
      <div className={classes.left}>
        <text className='Logotext'>Portfolio</text>
      </div>
      <div className={classes.right}>
        <text className='MenuItem' onClick={handleClick}>Home</text>
        <text className='MenuItem' onClick={handleClick1} >About Me</text>
        <text className='MenuItem' onClick={handleClick2}>Contact</text>
      </div>

    </div >


  );
}

export default Navbarc;
