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
    FaTemperatureLow,
    FaDollarSign,
    FaVolumeUp,
    FaShieldAlt,
    FaLeaf,
    FaClock,
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
        title: 'Cost Effective',
        icon: <FaDollarSign />,
        description: [
            'Compared to traditional building products, C-MAX® EPS panels achieve far better results, at considerably reduced cost. Further, the reduced construction period and reduced manpower leads to additional savings and better performances.'
        ],
    },
    {
        id: 2,
        title: 'Thermal Insulation',
        icon: <FaTemperatureLow />,
        description: [
            'C-MAX® constructions perform brilliantly in terms of insulation functions, with the thickness and density of the EPS panel being customized to deliver specific thermal insulation requirements, without taking up unnecessary space nor additional costs. C-MAX® buildings can save over 80% of air-conditioning or heating expenses',
        ],
    },
    {
        id: 3,
        title: 'Sound Proofing',
        icon: <FaVolumeUp />,
        description: [
            'C-MAX® EPS panels offer the highest degree of soundproofing according to international acoustic legislation. Apartment and hotel rooms build using C-MAX® EPS products are very soundproof. This represents one the most important advantages of our building system.'
        ],
    },

    {
        id: 4,
        title: 'Earthquake Resistant',
        icon: <FaShieldAlt />,
        description: [
            'Structures built using C-MAX® EPS Panels technology can withstand, completely undamaged, significant seismic activity. Buildings made using C-MAX® EPS panels are lightweight and hence have a low seismic mass but are at the same time rigid enough due to the presence of two sheets of reinforced plaster that interact to create a monolithic ‘shell’ of the whole structure which makes the building super strong.'
        ],
    },
    {
        id: 5,
        title: 'Sustainability & Energy Efficiency',
        icon: <FaLeaf />,
        description: [
            'The C-MAX® EPS building system helps to achieve high levels of energy efficiency which conform to energy efficiency regulations. It provides significant improvements in indoor thermal comfort through the reduction of energy consumption. Analysis shows that buildings built using M2 technology demonstrate a reduction of 60% in carbon emissions compared to traditional buildings. C-MAX® EPS products are non-toxic and recyclable.'
        ],
    },
    {
        id: 6,
        title: 'Rapid Installation',
        icon: <FaClock />,
        description: [
            'Buildings constructed using the C-MAX® system show a marked reduction in construction time, estimated at approximately 50%, compared to traditional building methods. Operations on construction sites are stress-free with remarkable reduction in operation time.'
        ],
    }
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
