/** @jsx jsx */
import { jsx, Container, Heading, Text, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

const data = [
  {
    id: 1,
    name: 'Shaukat Glory',
    project: 'Mt Kenya Regency Hotel Timau (2021)',
    services: 'Hydrogeological survey, Drilling, Equipping, and Solarization',
    quote:
      'We were highly impressed by the comprehensive survey and precision in drilling and equipping. Their expertise in solarization was a game changer for our hotel infrastructure.',
  },
  {
    id: 2,
    name: 'Charles Njihia',
    project: 'Highview Apartments, Joska Kangundo Road (2022)',
    services:
      'Hydrogeological survey, Drilling & Steel tank',
    quote:
      'Their detailed survey and innovative drilling solutions, combined with advanced installation techniques, significantly enhanced our project’s sustainability and efficiency.',
  },
  {
    id: 3,
    name: 'James Mbiu',
    project: 'Royal Brains School (2023)',
    services: '',
    quote:
      'The quality and professionalism exhibited during our project exceeded our expectations, setting new industry standards.',
  },
  {
    id: 4,
    name: 'Margaret Gachigua',
    project: 'Samtha Heights, Masinga (2023)',
    services: '',
    quote:
      'Their prompt and effective service demonstrated a commitment to quality and reliability that greatly benefited our project.',
  },
  {
    id: 5,
    name: 'Joseph Gacheru',
    project: "Joe's Apartment, Thindigua Kiambu (2022)",
    services: '',
    quote:
      'Their expertise and dedication were clearly evident in the successful completion of our project. We highly recommend their services.',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4,
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Testimonial" title="Meet Client Satisfaction" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <div className="card-content">
                <Heading as="h4" sx={styles.quote}>
                  {item.quote}
                </Heading>
                <Heading as="h3" sx={styles.heading}>
                  {item.name}
                </Heading>
                <Text sx={styles.designation}>{item.project}</Text>
                {item.services && (
                  <Text sx={styles.description}>{item.services}</Text>
                )}
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '350px', // Fixed height for uniformity
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '40px 20px 60px', // Increased top and bottom padding
      '40px 25px 60px',
      '40px 20px 60px',
      '45px 30px 65px 40px',
      '40px 30px 60px',
      '45px 30px 65px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
  },
  quote: {
    fontSize: [1, 2],
    fontWeight: 400,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
    mt: '10px',
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'secondary',
    lineHeight: 1.3,
    mt: '10px',
  },
  designation: {
    color: 'accent',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};