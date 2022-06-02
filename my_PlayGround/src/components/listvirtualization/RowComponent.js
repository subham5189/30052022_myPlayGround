import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

 let forLooping = ["1","2","3","4","5","6","7","8","9","10"];
  // const getAnimalsContent = image => {
  //   for (let index = 0; index < 10; index++) {
  //     return <Item><img alt="avatar" src={image} /></Item>
      
  //   }
  // };

const RowComponent = ({ image, num, style }) => (
  // const renderAnimals = forLooping.map(item => (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {/* <Item> */}
        <div style={style}
        // className={num % 2 ? "list-group-item-odd" : "list-group-item-even"}
        >
    <div className="avatar">
     {/* {getAnimalsContent(image)} */}
    <Item><img alt="avatar" src={image} /></Item>
    </div>
    
    {/* <div className="details">
      <div className="info"> */}
        <p className="number">#
        {/* {item} */}
        {num + 1}</p>
      {/* </div>

    </div> */}
  </div>

        {/* </Item> */}
      </Stack>
    </Box>
  // ));

  // return <Box sx={{ width: '100%' }}>{renderAnimals}</Box>;

      // return <Item><img alt="avatar" src={image} /></Item>
      
  
);

export default RowComponent;
