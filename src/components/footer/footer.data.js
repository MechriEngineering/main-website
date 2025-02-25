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
        path: '/about',
        label: 'About Us'
      },
      {
        path: '/ourservices',
        label: 'Our Services'
      },
      {
        path: '/contact',
        label: 'Frequently Asked Questions'
      },
      {
        path: '/contact',
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
        path: '#',
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
        info: 'Embly Business park, along Eastern Bypass'
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
