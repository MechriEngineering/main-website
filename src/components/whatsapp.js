/** @jsx jsx */
import { jsx } from 'theme-ui';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/254746300331"
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.whatsapp}
        >
            <img
                src="/whatsapp-icon.png"
                alt="Chat on WhatsApp"
                sx={styles.icon}
            />
        </a>
    );
}

const styles = {
    whatsapp: {
        position: 'fixed',
        bottom: '150px',
        right: '20px',
        //backgroundColor: '#25D366',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        zIndex: 50,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    icon: {
        width: '120px',
        height: '120px',
    },
};
