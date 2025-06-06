/** @jsx jsx */
import { jsx, Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: 'Application & Site Survey',
    text:
      'Begin by submitting your borehole drilling request. Our team will conduct a preliminary site survey to assess feasibility, location suitability, and water availability.',
  },
  {
    id: 2,
    title: 'Hydrogeological Survey & Permits',
    text:
      'A detailed hydrogeological survey is conducted to determine the water table depth and expected yield. We also handle the necessary government permits and approvals for borehole drilling.',
  },
  {
    id: 3,
    title: 'Drilling & Casing Installation',
    text:
      'Once approvals are secured, we proceed with drilling to the required depth. High-quality casing and gravel pack are installed to ensure borehole stability and prevent contamination.',
  },
  {
    id: 4,
    title: 'Pumping Test, Equipping, Storage solutions & Handover',
    text:
      'A pumping test is carried out to determine the borehole’s yield. We then install the necessary pumping system and integrate advanced water storage solutions to ensure a continuous, reliable water supply. After conducting final quality checks, we hand over a fully operational borehole.',
  },
];

export default function Process() {
  return (
    <section id='process' sx={styles.process}>
      <Container>
        <SectionHeader
          slogan="Let's break it down "
          title="This is the step by step process"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}


const styles = {
  process: {
    backgroundColor: 'background_secondary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
    mb: 4,
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['left', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: '#234582',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: '#234582',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    mt: 5,
    position: 'relative',
  },
  buttonContainer: {
    position: 'relative',
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible', // Ensure pulse effect stays outside
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '10%',
      left: '50%',
      width: '50%',
      height: '50%',
      background: 'rgba(20, 48, 86, 1)', // Blue pulse color
      borderRadius: '50%',
      transform: 'scale(0)',
      zIndex: 1,
      animation: 'pulse 2.5s infinite',
      '@keyframes pulse': {
        '0%': {
          transform: 'translate(-50%, -50%) scale(0)',
          opacity: 1,
        },
        '50%': {
          transform: 'translate(-50%, -50%) scale(1)',
          opacity: 0,
        },
        '100%': {
          transform: 'translate(-50%, -50%) scale(0)',
          opacity: 1,
        },
      },
    },
  },

};