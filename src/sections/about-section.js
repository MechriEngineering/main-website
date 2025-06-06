/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import DescriptionThumb from 'assets/solar installation.webp';

const data = {
  subTitle: 'Dig Deeper, Rise Higher',
  title: 'Innovative drilling for a brighter tomorrow',
  description: 'In an industry where delays and inconsistent standards often hold back progress, we tackle every challenge head-on—combining integrity, strict compliance, on-time delivery, expert insights, and an efficient process to address your water needs.',
};

export default function AboutSection() {
  return (
    <section id='about' sx={{ ...styles.section, pt: [4, 5, 6] }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />
          <Grid sx={styles.grid}>
            <Box sx={styles.card}>
              <Box sx={styles.wrapper}>
                <Text sx={styles.wrapper.subTitle}>{data.description}</Text>
              </Box>
            </Box>
          </Grid>
        </Box>
        <Box sx={styles.imageCard}>
          <Image
            src={DescriptionThumb}
            alt="Solar Installation"
            sx={styles.thumbnailImage}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    py: [4, null, null, 6],
  },
  containerBox: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: [4, null, 6],
    maxWidth: '1280px',
  },
  imageCard: {
    flex: [1, null, null, 0.5],
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  thumbnailImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '600px',
    mx: 'auto',
    objectFit: 'cover',
  },
  contentBox: {
    flex: [1, null, null, 0.5],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    mt: [3, 4],
    gap: [3, 4],
    gridTemplateColumns: ['repeat(1, 1fr)'],
    textAlign: 'left',
  },
  card: {
    color: 'white', // uses theme text color (dark navy)
    display: 'flex',
    alignItems: 'flex-start',
  },
  wrapper: {
    subTitle: {
      fontSize: [1, '15px'],
      lineHeight: 1.6,
      color: 'white', // uses theme text color (dark navy)
    },
  },
};