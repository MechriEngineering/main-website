/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import Link from 'next/link';
import data from './footer.data';
import { FaChevronRight } from 'react-icons/fa';
import Nca from 'assets/NCA.png';
import Footerbg from 'assets/footerbg1.jpg';

// Reusable component for rendering link lists (menuItems and resources)
const LinkList = ({ heading, items }) => (
  <Box>
    <Heading sx={styles.footer.heading}>{heading}</Heading>
    <nav>
      {items.map(({ path, label }, i) => (
        <Link href={path} key={i} passHref>
          <a sx={styles.footer.link}>
            <FaChevronRight sx={styles.footer.icon} />
            {label}
          </a>
        </Link>
      ))}
    </nav>
  </Box>
);

export default function Footer() {
  const { socialMedia, menuItems, resources, getInTouch } = data;

  return (
    <footer sx={styles.footer}>
      {/* Site Map and Social Media Section */}
      <Box sx={styles.footer.siteMapBg}>
        <Container sx={styles.footer.siteMapContainer}>
          <Box sx={styles.footer.siteMap}>
            <Grid sx={styles.footer.siteMapGrid}>
              {/* Social Media and Accreditations Column */}
              <Box>
                <Heading sx={styles.footer.heading}>{socialMedia.heading}</Heading>
                <nav sx={styles.footer.socialLinks}>
                  <Box sx={styles.footer.socialGrid}>
                    {socialMedia.links.map(({ path, icon: IconComponent }, i) => (
                      <a
                        key={i}
                        href={path}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={styles.footer.socialIcon}
                      >
                        <IconComponent />
                      </a>
                    ))}
                  </Box>
                </nav>
                <Box sx={styles.footer.accreditations}>
                  <Heading sx={styles.footer.heading}>Accreditations</Heading>
                  <Image src={Nca} sx={{ width: '70px', height: 'auto' }} alt="NCA Logo" />
                </Box>
              </Box>

              {/* Menu Items and Resources */}
              <LinkList heading={menuItems.heading} items={menuItems.quickLinks} />
              <LinkList heading={resources.heading} items={resources.items} />

              {/* Get In Touch */}
              <Box>
                <Heading sx={styles.footer.heading}>{getInTouch.heading}</Heading>
                <Box sx={styles.footer.contactInfo}>
                  {getInTouch.details.map(({ icon: IconComponent, info, link }, i) => (
                    <Box key={i} sx={styles.footer.contactItem}>
                      <IconComponent sx={styles.footer.contactIcon} />
                      {link ? (
                        <a
                          href={link}
                          sx={styles.footer.link}
                          rel={link.startsWith('mailto:') ? 'noopener' : 'noopener noreferrer'}
                        >
                          <Text>{info}</Text>
                        </a>
                      ) : (
                        <Text>{info}</Text>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Copywriter Section */}
      <Box sx={styles.footer.copywriter}>
        <Grid sx={styles.footer.copywriterGrid}>
          <Text sx={styles.footer.copyright}>
            © {new Date().getFullYear()} Mechri Engineering Solutions Ltd
          </Text>
          <Text>
            Powered by
            <a
              sx={styles.footer.atLink}
              href="https://alphainsights.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              AlphatechInsights
            </a>
          </Text>
        </Grid>
      </Box>
    </footer>
  );
}

const styles = {
  footer: {
    siteMapBg: {
      pt: '50px',
      pb: '50px',
      background: `url(${Footerbg}) no-repeat center center`,
      backgroundSize: 'cover',
      position: 'relative',
      width: '100%',
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(14, 46, 123, 0.85)',
        zIndex: 1,
      },
    },
    siteMapContainer: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '1200px',
      mx: 'auto',
      px: [3, 5],
    },
    siteMap: {
      mb: '40px',
    },
    siteMapGrid: {
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr', '1fr', 'repeat(4, 1fr)'],
      gap: '20px',
      textAlign: 'left',
      width: '100%',
    },
    link: {
      fontSize: [1, '15px'],
      color: 'white',
      fontWeight: '400',
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      ':hover': {
        color: 'primary',
      },
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    contactItem: {
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.25s',
      ':last-child': {
        mb: '0',
      },
    },
    contactIcon: {
      color: 'accent',
      marginRight: '10px',
    },
    socialGrid: {
      display: 'flex',
      flexDirection: 'row',
      gap: '30px',
      justifyItems: 'center',
    },
    socialLinks: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    socialIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'accent',
      fontSize: 24,
      mb: '10px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mb: '0',
      },
      '&:hover': {
        color: 'white',
      },
    },
    heading: {
      fontSize: 3,
      color: 'accent',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },
    icon: {
      color: 'accent',
      marginRight: '8px',
    },
    accreditations: {
      mt: '20px',
    },
    copywriter: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      pt: [6, null, 7],
      pb: ['10px', null, '30px'],
      pl: ['10px', null, '100px'],
      pr: ['20px', null, '100px'],
      textAlign: 'left',
    },
    copywriterGrid: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: ['column', 'row'],
    },
    copyright: {
      fontSize: [1, '15px'],
      mb: [3, 0],
    },
    atLink: {
      textDecoration: 'none',
      color: 'green',
    },
  },
};