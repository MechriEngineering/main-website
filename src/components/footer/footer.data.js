import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default {
  menuItems: {
    heading: 'Useful Links',
    quickLinks: [
      {
        path: '/sampleplans',
        label: 'About Us'
      },
      {
        path: 'https://bbsltd.co.ke/kagaa-project/',
        label: 'Our Services'
      },
      {
        path: 'https://bbsltd.co.ke/gallery/',
        label: 'Frequently Asked Questions'
      },
      {
        path: 'https://bbsltd.co.ke/diaspora-building-solutions/',
        label: 'Contact Us'
      },

    ],
  },
  resources: {
    heading: 'Resources',
    items: [
      {
        path: '#',
        label: 'Company profile'
      },
      {
        path: '/downloadables/JK-Requirements-Checklist.pdf',
        label: 'Requirements checklist'
      },

    ],
  },
  getInTouch: {
    heading: 'Get In Touch',
    details: [
      {
        icon: FaEnvelope,
        info: 'info@mechriengineering.co.ke'
      },
      {
        icon: FaPhone,
        info: '+254 746 300331'
      },
      {
        icon: FaMapMarkerAlt,
        info: 'Limuru road, Nairobi, Kenya'
      },
    ],
  },
  socialMedia: {
    heading: 'Social Media',
    links: [
      {
        path: '#',
        icon: FaInstagram
      },
      {
        path: 'https://www.facebook.com/profile.php?id=100048407985687',
        icon: FaFacebookF
      },
      {
        path: '#',
        icon: FaTwitter
      },
      {
        path: '#',
        icon: FaYoutube
      },
      {
        path: '#',
        icon: FaLinkedinIn
      },
    ],
  },
};
