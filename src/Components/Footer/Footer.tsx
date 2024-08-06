import { ReactElement } from 'react';
import './Footer.scss';
import { Box, Link, Stack, Typography } from '@mui/material';

import { FooterContent, SocialIcons } from '../../helpers/staticFooter';

function Footer(): ReactElement {
  return (
    <div className="footer" id="contacts">
      <div className="container">
        <Box className="footer-inner">
          <Typography variant="h3" className="footer__title">
            {FooterContent.title}
          </Typography>
          <Typography className="footer__content">{FooterContent.content}</Typography>
        </Box>

        <Box className="footer-inner">
          <Typography variant="h3" className="footer__title-social">
            {FooterContent.titleSocial}
          </Typography>

          <Stack className="footer__title-social_links" direction="row" spacing={2}>
            {SocialIcons.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                sx={{
                  transition: 'transform 0.5s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <img src={social.icon} alt={social.alt} style={{ display: 'block', width: '50px', height: '50px' }} />
              </Link>
            ))}
          </Stack>
        </Box>

        <Box className="footer-inner">
          <Typography variant="h3" className="footer__title-contacts">
            {FooterContent.titleContacts}
          </Typography>
          <Box className="footer__title-contacts_links">
            <Link href={FooterContent.emailLinkPath}>{FooterContent.email}</Link>
            <Link href={FooterContent.phoneLinkPath}>{FooterContent.phone}</Link>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Footer;
