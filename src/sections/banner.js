/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import ShapeLeft from 'assets/shape-left1.png';
import BannerBg from 'assets/bannerbg-parallax1.jpg';
import Homebanner from 'assets/homebanner.png';
import herobg from 'assets/solar installation.webp'

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
    height: '70vh',
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    mb: 6,
    zIndex: 2,
    overflow: 'hidden',
    background: 'radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(240, 100%, 96%, 1) 100%);',
    backgroundSize: 'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the background image
    '&::before': {
      position: 'absolute',
      content: '""',
      top: '10%',
      //left: '55%',
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${Homebanner})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '25%',
      //transform: 'scaleX(-1)',
      /* '@media screen and (max-width: 768px)': {
         display: 'none',  // Hide the image on mobile devices
       },*/
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative', // Ensure container stays in place over the background
      zIndex: 1, // Bring content above the background
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
    //left: '10%',
    textAlign: 'left',
    // top: '20px',
  },
  titleContent: {
    mt: 13,
    textAlign: 'left'
  }
};