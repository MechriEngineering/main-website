/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, Box, Image } from 'theme-ui';
import Carousel from 'react-multi-carousel';
import SectionHeader from 'components/section-header';

// Import Images
import A from 'assets/gallery/1.webp';
import B from 'assets/gallery/2.jpg';
import C from 'assets/gallery/3.webp';
import D from 'assets/gallery/4.webp';
import E from 'assets/gallery/5.webp';
import F from 'assets/gallery/6.webp';
import G from 'assets/gallery/7.jpg';
import H from 'assets/gallery/8.jpg';

// Array of images
const images = [A, B, C, D, E, F, G, H];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
    },
};

const Gallery = () => {
    const [mainImage, setMainImage] = useState(images[0]);
    const [isMobile, setIsMobile] = useState(false);

    // Handle client-side detection of mobile breakpoint
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 639);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle image change
    const handleImageChange = (index) => {
        setMainImage(images[index]);
    };

    // Handle after change in carousel
    const handleAfterChange = (previousSlide, { currentSlide }) => {
        if (isMobile) return; // Skip on mobile since main image is hidden
        const itemsToShow = responsive.desktop.items;
        const centerIndex = Math.floor(itemsToShow / 2);
        const totalImages = images.length;
        const centerImageIndex = (currentSlide + centerIndex) % totalImages;
        handleImageChange(centerImageIndex);
    };

    return (
        <section sx={styles.main}>
            <SectionHeader slogan="Check out some of our projects" title="Gallery" />
            <Box sx={styles.gallery}>
                {!isMobile && (
                    <Box sx={styles.mainImageContainer}>
                        <Image src={mainImage} sx={styles.mainImage} alt="Selected project" />
                    </Box>
                )}
                <Box sx={styles.carouselContainer}>
                    <Carousel
                        responsive={responsive}
                        arrows
                        autoPlay
                        autoPlaySpeed={3000}
                        infinite
                        afterChange={handleAfterChange}
                        itemClass="carousel-item"
                    >
                        {images.map((image, index) => (
                            <Box
                                key={index}
                                sx={styles.carouselItem}
                                onClick={() => handleImageChange(index)}
                            >
                                <Image src={image} sx={styles.carouselImage} alt={`Project ${index + 1}`} />
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Box>
        </section>
    );
};

const styles = {
    main: {
        my: '180px',
        height: ['auto', null, null, '100vh'], // Responsive height: auto on mobile/tablet, 100vh on desktop
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    gallery: {
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        px: [3, null, 0], // Add padding on mobile for better spacing
    },
    mainImageContainer: {
        mb: [2, null, 3], // Reduced margin on mobile to minimize space
    },
    mainImage: {
        width: '100%',
        height: 'auto',
        maxHeight: ['300px', null, '500px'], // Smaller max height on tablet
        objectFit: 'cover',
        borderRadius: '8px',
    },
    carouselContainer: {
        mt: [1, null, 2], // Reduced margin-top on mobile
    },
    carouselItem: {
        cursor: 'pointer',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        mx: 1,
    },
    carouselImage: {
        width: '100%',
        height: ['150px', null, '200px'], // Smaller height on mobile
        objectFit: 'cover',
    },
};

export default Gallery;