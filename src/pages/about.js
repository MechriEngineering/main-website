/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Aboutbg from 'assets/homebanner1.jpg';
import FeaturedProject from '../sections/featured-project';


export default function AboutPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="About Us | Mechri Engineering Solutions" />
                    <section id="home" sx={styles.section}>
                        <Container sx={styles.containerBox}>
                            <Box sx={styles.contentBox}>
                                <Heading as="h1" variant="heroPrimary">
                                    Drilling Deep,
                                    <Text sx={styles.redText}>Delivering Life</Text>
                                </Heading>
                                <Text as="p" variant="heroSecondary">
                                    Harnessing advanced technology and proven expertise, we bring water to the surface—ensuring reliable, clean water solutions that foster growth and resilience.
                                </Text>
                            </Box>
                            <Box sx={styles.imageCard}>
                                <Image
                                    src={Aboutbg}
                                    alt="About Banner"
                                    sx={styles.thumbnailImage}
                                />
                            </Box>
                        </Container>
                    </section>
                    <FeaturedProject />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}

const styles = {
    section: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
        pb: [2, null, 0, null, 2, 0, null, 5],
        background: 'radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(240, 100%, 96%, 1) 100%)',
        display: 'flex',
        alignItems: 'center',
    },
    containerBox: {
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: [4, null, 6],
        maxWidth: '1280px',
        mx: 'auto',
    },
    contentBox: {
        flex: [1, null, null, 0.5],
        textAlign: ['center', null, null, 'left'],
        maxWidth: ['100%', '90%', '535px', null, '57%', '60%'],
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
        mx: 'auto',
        objectFit: 'cover', // Rotate image 180 degrees to face opposite side
    },
    redText: {
        color: 'primary',
    },
};