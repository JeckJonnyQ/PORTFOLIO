import { ReactElement } from 'react';
import './ContentTab.scss';

import { TabsDataProps } from '../../../helpers/staticDataTabs';
import { Box, Link, Typography } from '@mui/material';

function TabContent(props: TabsDataProps): ReactElement {
  return (
    <Box className="tab-content">
      <Box className="tab-content__block">
        <Typography variant="h2" className="tab-content__block_title">
          {props.workName}
        </Typography>
        <Typography className="tab-content__block_desc">{props.description}</Typography>

        <Box className="tab-content__block_skills">
          {props.skills && props.skills.map((item, index) => <span key={index}>{item}</span>)}
        </Box>

        <Box className="tab-content__block-inner">
          <Link href={props.link} className="tab-content__block-inner_link" target="_blank">
            View Details
          </Link>
          <span className="tab-content__block-inner_year">{props.year}</span>
        </Box>
      </Box>

      <Box className="tab-content__link">
        <Link href={props.link} target="_blank">
          <img src={props.photo} alt={props.workName} />
        </Link>
      </Box>
    </Box>
  );
}

export default TabContent;
