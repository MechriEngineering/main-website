/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, Box, Image, Button } from 'theme-ui';
import Carousel from 'react-multi-carousel';
import SectionHeader from 'components/section-header';

// Import Images
import A from 'assets/Kagaa project media/1.webp';
import B from 'assets/Kagaa project media/2.jpg';
import C from 'assets/Kagaa project media/3.webp';
import D from 'assets/Kagaa project media/4.webp';
import E from 'assets/Kagaa project media/5.webp';
import F from 'assets/Kagaa project media/6.webp';
import G from 'assets/Kagaa project media/7.jpg';

// Array of images
const images = [A, B, C, D, E, F, G];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 3,
        slidesToSlide: 1,
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Gallery = () => {
    const [mainImage, setMainImage] = useState(images[0]);

    // Handle image change
    const handleImageChange = (index) => {
        setMainImage(images[index]);
    };

    // Handle after change in carousel
    const handleAfterChange = (previousSlide, { currentSlide }) => {
        const itemsToShow = responsive.desktop.items;
        const centerIndex = Math.floor(itemsToShow / 2);

        // Calculate the index of the centered image
        const totalImages = images.length;
        const centerImageIndex = (currentSlide + centerIndex) % totalImages;

        handleImageChange(centerImageIndex);
    };

    return (
        <section sx={styles.main}>
            <SectionHeader slogan="Check out some of our projects" title="Gallery" />
            <Box sx={styles.gallery}>
                {typeof window !== 'undefined' && window.innerWidth > 639 && (
                    <Box sx={styles.mainImageContainer}>
                        <Image src={mainImage} sx={styles.mainImage} />
                    </Box>
                )}
                <Box sx={styles.carouselContainer}>
                    <Carousel
                        responsive={responsive}
                        arrows={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        infinite={true}
                        afterChange={handleAfterChange}
                    >
                        {images.map((image, index) => (
                            <Box
                                key={index}
                                sx={styles.carouselItem}
                                onClick={() => handleImageChange(index)}
                            >
                                <Image src={image} sx={styles.carouselImage} />
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
        mt: '30px',
    },
    gallery: {
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
    },
    mainImageContainer: {
        mb: [3, null, 4],
    },
    mainImage: {
        width: '100%',
        height: 'auto',
        maxHeight: '500px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    carouselContainer: {
        mt: 2,
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
        height: '200px',
        objectFit: 'cover',
    },
};

export default Gallery;
