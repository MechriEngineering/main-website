/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button, ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Aboutbg from 'assets/about-banner.png';
import FeaturedProject from '../sections/featured-project';
import TeamSection from '../sections/team-section';

export default function AboutPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="About Us | Mechri Engeenering Solutions" />

                    <section sx={styles.banner} id="home">
                        <Container sx={styles.banner.container}>
                            <Box sx={styles.banner.contentBox}>
                                <Heading as="h1" variant="heroPrimary" sx={styles.titleHeading}>
                                    DRILLING DEEP,
                                    <Text sx={styles.redText}>DELIVERING LIFE </Text>
                                </Heading>
                                <Text as="p" variant="heroSecondary" sx={styles.titleContent}>
                                    Harnessing advanced technology and proven expertise, we bring water to the surface—ensuring reliable, clean water solutions that foster growth and resilience.
                                </Text>
                            </Box>
                        </Container>
                    </section>

                    <FeaturedProject />
                    {/**<TeamSection /> */}
                </Layout>
            </StickyProvider>
        </ThemeProvider>
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
        overflow: 'hidden', // Ensure content does not overflow the section
        background: 'radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(240, 100%, 96%, 1) 100%);', // Gradient overlay 
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the background image
        '@media screen and (max-width: 768px)': {
            height: 'auto',  // Hide the image on mobile devices
        },
        /*'&::before': {
            position: 'absolute',
            content: '""',
            top: '30%',
            left: '10%',
            height: '100%',
            width: '100%',
            zIndex: -1,
            backgroundImage: `url(${ShapeRight})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'bottom right',
            backgroundSize: '50%',
        },*/
        '&::after': {
            position: 'absolute',
            content: '""',
            top: '0%',
            //bottom: 10,
            left: 0,
            right: 0,
            height: '100%',
            width: '100%',
            zIndex: -1,
            backgroundImage: `url(${Aboutbg})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'bottom left',
            backgroundSize: '50%',
            '@media screen and (max-width: 768px)': {
                display: 'none',  // Hide the image on mobile devices
            },

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
            width: ['100%', '90%', '535px', null, '57%', '60%', '78%', '70%'],
            mx: 'auto',
            textAlign: 'left',
            mb: ['40px', null, null, null, null, 7],
            px: [0, null, 5, 6, null, 8, 9],
        },
    },
    redText: {
        color: 'primary',
    },
    titleHeading: {
        textAlign: 'left'
    },
    titleContent: {
        textAlign: ['left', null, 'left'],
        //px: [0, null, 5, 6, null, 8, 9],
        px: 0,
    }
};
