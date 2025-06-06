/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Button, Link } from 'theme-ui';
import Image from 'components/image';

import FeatureThumb from 'assets/pump installation.webp';

const data = {
  subTitle: 'Managing Director',
  title: 'Sharlynne Kamau',
  description:
    'My gratification as a borehole drilling professional of more than 10 years is the joy my clients experience when I hand over the project. We are dedicated to providing services that are nothing short of excellent',
  btnName: 'Our Services',
  btnURL: '/ourservices',
};

export default function CoreFeature() {
  return (
    <section id='featured-Project' sx={styles.section}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <Box sx={styles.card}>
            <Box sx={styles.wrapper}>
              <Text as="p" sx={styles.wrapper.subTitle}>
                {data.subTitle}
              </Text>
              <Heading as="h2" sx={styles.wrapper.title}>
                {data.title}
              </Heading>
            </Box>
            <Text as="p" sx={styles.description}>
              {data.description}
            </Text>
            <Link href={data.btnURL} variant="default">
              <Button variant="primary" aria-label={data.btnName}>
                {data.btnName}
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    pt: ['80px', '100px', '120px', '140px', null, null, '60px', '100px'], // Reduced top padding
    pb: [2, null, 0, null, 2, 0, null, 5],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media screen and (max-width: 768px)': {
      height: 'auto', // Allow height to adjust on mobile
    },
  },
  containerBox: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
    gap: [4, null, 6],
    maxWidth: '1280px',
    mx: 'auto',
    px: ['20px', '30px', '40px', null, 7], // Increased padding on mobile
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '20px', 0],
    textAlign: ['left', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
      maxWidth: '600px',
      width: '100%',
      objectFit: 'cover',
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: 'accent',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px'],
    },
    title: {
      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      color: 'accent', // Uses accent color (#e0b81a)
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
    },
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px',
  },
};