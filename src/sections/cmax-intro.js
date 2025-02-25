import React, { useRef, useState } from 'react';
/** @jsx jsx */
import {
    jsx,
    Container,
    Box,
    Grid,
    Text,
    Heading,
    Button,
    Image,
} from 'theme-ui';
import { keyframes } from '@emotion/core';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';
import {
    FaMapMarkedAlt,
    FaTint,
    FaFlask,
    FaWrench,
    FaWarehouse,
    FaSun,
    FaRecycle,
    FaTools,
} from 'react-icons/fa';
//import Emailform from '../components/emailform';

import DescriptionThumb from 'assets/epsintrothumb.png';
import shapePattern from 'assets/shape-pattern1.png';
import CommercialEPS from 'assets/commercial.jpg';
import ResidentialEPS from 'assets/residential.jpg';
import IndustrialEPS from 'assets/industrial.jpg';
import InstitutionEPS from 'assets/institutions.jpg';


import SectionHeader from 'components/section-header';



const ourServices = [
    {
        id: 1,
        title: 'Borehole Hydrogeological Survey',
        icon: <FaMapMarkedAlt />,
        description: [
            'Providing accurate and reliable geological survey reports to inform borehole drilling projects.'
        ],
    },
    {
        id: 2,
        title: 'Borehole Drilling',
        icon: <FaTint />,
        description: [
            'Offering expert drilling services to access clean and sustainable water sources for residential and commercial use.'
        ],
    },
    {
        id: 3,
        title: 'Test Pumping',
        icon: <FaFlask />,
        description: [
            'Conducting professional test pumping to assess borehole efficiency and performance, providing insights for optimal usage.'
        ],
    },
    {
        id: 4,
        title: 'Pump Installation',
        icon: <FaWrench />,
        description: [
            'Installing high-quality pumps tailored to specific water needs, ensuring a reliable and efficient water supply.'
        ],
    },
    {
        id: 5,
        title: 'Storage Solutions',
        icon: <FaWarehouse />,
        description: [
            'Offering customizable and durable water storage options to maximize capacity and minimize supply risks.'
        ],
    },
    {
        id: 6,
        title: 'Solar Installation',
        icon: <FaSun />,
        description: [
            'Providing expert solar installation services to power boreholes and water systems sustainably, reducing carbon footprints and energy costs.'
        ],
    },
    {
        id: 7,
        title: 'Water Purification',
        icon: <FaRecycle />,
        description: [
            'Implementing advanced purification technologies to ensure access to clean and safe water for consumption.'
        ],
    },
    {
        id: 8,
        title: 'Borehole Maintenance & Rehabilitation',
        icon: <FaTools />,
        description: [
            'Offering maintenance and rehabilitation services to sustain optimal borehole performance and efficiency over time.'
        ],
    },
];


export default function Epspanels() {

    return (
        <>

            <section>
                <Container sx={styles.section}>
                    <SectionHeader slogan="What do we offer?" title="Our Services" />
                    <Grid sx={styles.advantagesGrid}>
                        {ourServices.map((item) => (
                            <Box key={item.id} sx={styles.card}>
                                {/* Placeholder for icon */}
                                <Box sx={styles.icon}>{item.icon}</Box>
                                <Heading as="h3" sx={styles.cardTitle}>
                                    {item.title}
                                </Heading>
                                <Text sx={styles.cardText}>
                                    {item.description}
                                </Text>
                            </Box>
                        ))}
                    </Grid>
                </Container>
            </section>
        </>
    );
}

const playPulse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {

    //section 2 styling
    section: {
        pt: [8, null, 9], // Adds more space on top
        pb: [4, null, 5], // Keeps the bottom padding unchanged
    },
    advantagesGrid: {
        display: 'grid',
        gridTemplateColumns: ['1fr', null, 'repeat(3, 1fr)'],
        gap: '20px',
    },
    applicationGrid: {
        display: 'grid',
        gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)'],
        gap: '20px',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 5px 13px rgba(0, 0, 0, 0.1)',
        padding: ['15px', null, '20px'],
        textAlign: 'left',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
        },
    },
    icon: {
        fontSize: ['30px', null, '50px'],
        color: 'secondary',
        mb: '15px',
    },
    cardTitle: {
        fontSize: ['16px', null, '18px'],
        color: 'primary',
        mb: '10px',
    },
    cardText: {
        fontSize: ['14px', null, '16px'],
        color: 'text',
    },
    cardImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px 8px 0 0',
        mb: '15px',
    },
}
