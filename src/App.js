import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Chart from './Chart';
import { LineChart } from './LineChart';
import ControlledAccordions from './ControlledAccordions';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="استان" {...a11yProps(0)}/>
        <Tab label="ناحیه" {...a11yProps(1)}/>
        <Tab label="برچسب ها" {...a11yProps(2)}/>
       
    
      </Tabs>
      <TabPanel value={value} index={0}>
        <Chart/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LineChart/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <ControlledAccordions/>
      </TabPanel>
     

    </Paper>
  );
}
