/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text } from 'theme-ui';
import Homebanner from 'assets/homebanner.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary" sx={styles.titleHeading}>
            YOUR PARTNER,
            <Text sx={styles.orangeText}>IN PROGRESS</Text>
          </Heading>
          <Text as="p" variant="heroSecondary" sx={styles.titleContent}>
            From Ground to Greatness: Unlocking Reliable Water for Every Home.
          </Text>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    height: '100vh',
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    mb: 6,
    zIndex: 2,
    overflow: 'hidden',
    background:
      'radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(240, 100%, 96%, 1) 100%);',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: '10%',
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${Homebanner})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
      backgroundSize: '25%',
      '@media screen and (max-width: 768px)': {
        display: 'none',
      },
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', // centers horizontally
      position: 'relative',
      zIndex: 1,
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
  },
  orangeText: {
    color: '#eebf21',
  },
  titleHeading: {
    textAlign: 'center', // centers heading text
  },
  titleContent: {
    mt: 13,
    textAlign: 'center', // centers paragraph text
  },
};
