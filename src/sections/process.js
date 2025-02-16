/** @jsx jsx */
import { jsx, Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';
import RegisterButton from 'components/signupform/RegisterButton';
import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: 'Application & Appraisal',
    text:
      'Register for the product by pressing the red register button below 👇, and we\'ll gather details to assess how much you qualify for. A bank representative will contact you to request necessary documents.',
  },
  {
    id: 2,
    title: 'Drawings, BQ, Approvals & Permits',
    text:
      'Once the bank determines your eligibility, share your budget with us. We\'ll create architectural and structural drawings, then estimate the construction costs. We\’ll also handle the required government approvals and permits.',
  },
  {
    id: 3,
    title: 'Bank Disburses the Funds ',
    text:
      'After meeting the bank\'s requirements, the funds will be released to your account for construction purposes. The bank will disburse the money in tranches, monitoring the progress and quality of the construction.',
  },
  {
    id: 4,
    title: 'Complete Construction: Foundation to Finishing',
    text:
      'Benchmark Building Solutions will handle the entire construction process from foundation to finishing, following the agreed-upon drawings, BQ, and terms and conditions, all under bank supervision.',
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

        <Box sx={styles.buttonWrapper}>
          <Box sx={styles.buttonContainer}>
            <RegisterButton />
          </Box>
        </Box>
      </Container>
    </section>
  );
}


const styles = {
  process: {
    backgroundColor: 'primary',
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
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
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