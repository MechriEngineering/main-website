/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Heading, Text, Container } from 'theme-ui';

const faqData = {
    title: "FAQ's (Frequently Asked Questions)",
    content: [
        {
            id: 1,
            question: 'What is borehole drilling and how does it work?',
            answer:
                'Borehole drilling is the process of creating a deep, narrow well to access groundwater. Our expert team uses advanced equipment to extract water efficiently and sustainably.',
        },
        {
            id: 2,
            question: 'How long does a typical borehole drilling project take?',
            answer:
                'Timelines vary based on site conditions and project depth, but most projects are completed within a few days to a couple of weeks, ensuring prompt service with minimal disruption.',
        },
        {
            id: 3,
            question: 'How do you ensure integrity and compliance throughout the process?',
            answer:
                'We adhere to strict industry standards and regulatory guidelines, incorporating expert opinions, comprehensive inspections, and a transparent process to maintain high integrity and full compliance.',
        },
        {
            id: 4,
            question: 'What factors influence the cost of a borehole drilling project?',
            answer:
                'Costs depend on several factors such as depth, soil composition, required casing, and site accessibility. We provide a detailed evaluation and transparent pricing before any work begins.',
        },
        {
            id: 5,
            question: 'What are the key steps in your borehole drilling process?',
            answer:
                'Our process includes a thorough site evaluation, precise drilling, secure casing installation, rigorous water quality testing, and a final assessment to ensure optimal performance and safety.',
        },
        {
            id: 6,
            question: 'How do you handle challenges like low water yield or contamination?',
            answer:
                'We conduct detailed geological surveys and adapt our drilling techniques to address challenges. Post-drilling, we perform extensive water testing to promptly resolve issues such as low yield or contamination.',
        },
        {
            id: 7,
            question: 'Do you offer maintenance services after drilling is completed?',
            answer:
                'Yes, we provide ongoing maintenance and support to ensure your borehole continues to function efficiently, addressing any potential issues as part of our commitment to long-term service.',
        },
        {
            id: 8,
            question: 'How can I schedule an evaluation for my borehole drilling project?',
            answer:
                'You can easily schedule an evaluation by contacting us through our website or calling our office. One of our experts will arrange a site visit and provide a tailored assessment for your needs.',
        },
    ],
};

const FAQComponent = () => {
    const [activeId, setActiveId] = useState(faqData.content[0].id);

    const handleToggle = (id) => {
        setActiveId((prevActiveId) => (prevActiveId === id ? null : id));
    };

    return (

        <Box sx={styles.faqSection}>
            <Box sx={styles.faqContent}>
                <Heading as="h2" sx={styles.title}>
                    {faqData.title}
                </Heading>

                {faqData.content.map((item) => (
                    <Box key={item.id} sx={styles.faqItem}>
                        <Box sx={styles.question} onClick={() => handleToggle(item.id)}>
                            {activeId !== item.id && <span sx={styles.plusIcon}>+</span>}
                            {item.question}

                        </Box>
                        <Box
                            sx={{
                                ...styles.answer,
                                maxHeight: activeId === item.id ? '200px' : '0',
                                opacity: activeId === item.id ? 1 : 0,
                                transition: 'max-height 0.3s ease, opacity 0.3s ease',
                            }}
                        >
                            <Text>{item.answer}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>

    );
};

const styles = {
    faqSection: {
        p: 4,
        py: ['60px', null, 8],
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
    },
    title: {
        fontSize: 4,
        fontWeight: 'bold',
        mb: 4,
        color: 'secondary',
    },
    faqContent: {
        display: 'flex',
        flexDirection: 'column',
        width: ['100%', null, '540px', '600px'],
        mx: 'auto',
        mt: -1,
        px: [3, 5],
    },
    faqItem: {
        mb: 3,
        borderBottom: '1px solid #ddd',
        pb: 2,
    },
    question: {
        fontSize: 2,
        fontWeight: 'bold',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
            color: 'primary',
        },
        '&:after': {
            content: '"+"',
            position: 'absolute',
            right: 0,
            color: 'white',
        },
    },
    plusIcon: {
        mr: 2,
        color: 'primary',
    },
    answer: {
        mt: 2,
        fontSize: 1,
        color: 'text',
        borderTop: '1px solid #ddd',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease, opacity 0.5s ease',
    },
};

export default FAQComponent;
