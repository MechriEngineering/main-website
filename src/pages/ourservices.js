/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Services from '../sections/serviceslisting';
import Gallery from '../components/gallery';


export default function Ourservices() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="Our services" />
                    <Services />
                    <Gallery />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}
