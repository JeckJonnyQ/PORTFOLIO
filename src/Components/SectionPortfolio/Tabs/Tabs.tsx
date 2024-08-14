import React, { ReactElement } from 'react';
import './Tabs.scss';

import { Box, Tab, Tabs } from '@mui/material';

import ContentTab from '../ContentTab/ContentTab';
import { TabsData, TabsDataProps } from '../../../helpers/staticDataTabs';

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box className="box-wrapper">
        <Tabs value={value} onChange={handleChange} className="tabs">
          <Tab className="tab" label="Web Sites" />
          <Tab className="tab" label="Browser Games" />
          <Tab className="tab" label="Landing Pages" />
        </Tabs>
      </Box>

      {TabsData.map((item, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {item.map((data: TabsDataProps) => (
            <ContentTab key={data.id} {...data} />
          ))}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: CustomTabPanelProps): ReactElement {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
