export default {
  //smooth scroll

  // updated colors with new palette
  colors: {
    text: '#222b5e', // primary text color (dark navy)
    text_secondary: '#1a4e89', // secondary text color (deep blue)
    heading: '#222b5e', // primary heading color (dark navy)
    heading_secondary: '#1a4e89', // secondary heading color (deep blue)
    background: '#FFFFFF', // body background color (unchanged for clean look)
    background_secondary: '#F5F7FA', // subtle off-white for secondary background
    border_color: '#E5ECF4', // unchanged for neutral borders
    yellow: '#e0b81a', // accent yellow for highlights
    primary: '#0aa0eb', // primary button and link color (vibrant blue)
    secondary: '#1a4e89', // secondary color for hover states (deep blue)
    muted: '#D9E0E7', // muted color for subtle elements
    accent: '#e0b81a', // accent for emphasizing UI (yellow)
    blue: '#0aa0eb', // vibrant blue for consistency
    orange: '#e0b81a', // updated to new yellow instead of old orange

    // updated dark mode
    modes: {
      dark: {
        text: '#FFFFFF', // white for readability
        background: '#222b5e', // dark navy for background
        primary: '#0aa0eb', // vibrant blue for primary elements
        secondary: '#e0b81a', // yellow for secondary elements
        muted: '#3c4b7a', // lighter navy for muted elements
      },
    },
  },
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1220px',
    '1366px',
    '1620px',
  ],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif",
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  layout: {
    container: {
      maxWidth: [
        '100%',
        null,
        null,
        '780px',
        '1020px',
        '1200px',
        null,
        '1310px',
      ],
      px: [4, 6],
    },
    header: {
      color: '#222b5e', // updated to dark navy
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    main: {},
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px'],
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
    },
    otherProducts: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
    },
    featuredProject: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden',
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden',
    },
    about: {
      pb: ['90px', null, 9, null, null, 10, null, '150px'],
    },
    resources: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px'],
    },
    plans: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px'],
    },
    highlights: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px'],
    },
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px',
      textTransform: 'uppercase',
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary', // updated to vibrant blue
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5,
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading', // updated to dark navy
    },
    heroPrimary: {
      color: 'heading', // updated to dark navy
      fontSize: [
        '32px',
        '36px',
        '42px',
        '40px',
        '42px',
        '52px',
        '58px',
        '66px',
      ],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5],
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      color: 'heading', // updated to dark navy
    },
    title: {
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1,
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans', // updated to match body font
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#222b5e', // updated to dark navy
    },
    muted: {
      lineHeight: '26px',
      color: 'muted',
    },
    secondary: {
      fontWeight: 500,
      color: '#0aa0eb', // updated to vibrant blue
      lineHeight: '40px',
    },
  },
  links: {
    default: {
      cursor: 'pointer',
    },
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal',
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary', // updated to vibrant blue
      },
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
    },
    logo: {
      display: 'flex',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  buttons: {
    menu: {
      display: [null, null, 'none'],
    },
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0,
      },
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary', // updated to vibrant blue
      '&:hover': {
        boxShadow: 'rgba(10, 160, 235, 0.57) 0px 9px 20px -5px', // updated shadow to match primary
      },
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary', // updated to deep blue
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px',
      },
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary', // updated to vibrant blue
      color: 'primary', // updated to vibrant blue
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary', // updated to vibrant blue
      },
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2,
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5,
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary', // updated to vibrant blue
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`, // updated to vibrant blue
        outline: 'none',
      },
    },
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#0aa0eb', // updated to vibrant blue
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px',
    },
    outline: {
      color: 'primary', // updated to vibrant blue
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      '.modal-video-close-btn': {
        cursor: 'pointer',
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto',
      },
    },
    '@keyframes typewriter': {
      from: { width: '0%' },
      to: { width: '100%' },
    },
    '@keyframes blinkCaret': {
      'from, to': { borderColor: 'transparent' },
      '50%': { borderColor: 'currentColor' },
    },
    '.typewriter': {
      display: 'inline-block',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      borderRight: '0.15em solid',
      animation: 'blinkCaret 0.7s step-end infinite',
      '&:nth-of-type(1)': {
        width: '8ch',
        animation: 'typewriter 2s steps(8) 1s 1 normal both, blinkCaret 0.7s step-end infinite',
      },
      '&:nth-of-type(2)': {
        width: '10ch',
        animation: 'typewriter 2s steps(10) 3s 1 normal both, blinkCaret 0.7s step-end infinite',
      },
      '&:nth-of-type(3)': {
        width: '8ch',
        animation: 'typewriter 2s steps(8) 5s 1 normal both, blinkCaret 0.7s step-end infinite',
      },
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
}