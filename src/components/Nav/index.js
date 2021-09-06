import React from 'react';
import {AppBar, Container, Toolbar, Typography, Divider, Stack} from '@mui/material';

function Nav( props ) {
  const {
      titles = [],
      setCurrentTitle,
      currentTitle,
  } = props;

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "white"}}>
        <Container fixed>
            <Toolbar>
                <Typography variant="h6" color="black" component="div" sx={{ flexGrow: 1 }}>Sonali Pandey</Typography>
                <ul className="flex-row" sx={{ flexGrow: 1 }}>
                    <Stack spacing={2} direction="row">
                        {titles.map((title) => (
                        <li 
                            className={`navList ${currentTitle.name === title.name && 'navActive'}`}
                            key={title.name}
                        >
                            <span color="black" onClick={() => { setCurrentTitle(title) }}>{ title.name }</span>
                        </li>
                        ))}
                    </Stack>
                </ul>
            </Toolbar>
      </Container>
      <Divider />
    </AppBar>


  );
}

export default Nav;