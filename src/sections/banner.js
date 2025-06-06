/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';
import AboutSection from '../sections/about-section';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <video
        autoPlay
        loop
        muted
        playsInline
        sx={styles.video}
      >
        <source src='/home.mp4' type="video/mp4" />
      </video>

      <Container sx={styles.banner.container}>
        <AboutSection />
        {/*<Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary" sx={styles.titleHeading}>
            YOUR PARTNER,
            <Text sx={styles.orangeText}>IN PROGRESS</Text>
          </Heading>
          <Text as="p" variant="heroSecondary" sx={styles.titleContent}>
            From Ground to Greatness: Unlocking Reliable Water for Every Home.
          </Text>
        </Box>*/}
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    position: 'relative',
    height: '100vh',
    width: '100%', // Changed from 100vw to prevent overflow
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(14, 46, 123, 0.85)',
      zIndex: 1,
    },
    container: { // Moved container inside banner
      position: 'relative',
      zIndex: 2,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    contentBox: { // Moved contentBox inside banner
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      color: 'white',
    },
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    objectFit: 'fit',
    zIndex: 0,
  },
  orangeText: {
    color: '#eebf21',
    display: 'block',
  },
  titleHeading: {
    textAlign: 'center',
    fontSize: ['32px', '36px', '48px', null, '52px', '60px'],
    lineHeight: 1.15,
    color: 'white',

  },
  titleContent: {
    mt: [3, 4, 4, 4, 4, 4, 5],
    fontSize: ['14px', '16px', '18px', '20px'],
    lineHeight: 1.5,
    maxWidth: '600px',
    mx: 'auto',
    color: 'white',
  },
};