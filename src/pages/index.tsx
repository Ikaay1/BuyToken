import Footer from '@/components/landing/Footer';
import FrequentlySection from '@/components/landing/FrequentlySection';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Navbar from '@/components/landing/Navbar';
import VideoSection from '@/components/landing/VideoSection';
import WhySection from '@/components/landing/WhySection';
import {Box} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg='white'>
      <Box maxW='1445px' mx='auto'>
        {/* <Navbar /> */}
        <Header />
        {/* <Hero /> */}
        <WhySection />
        <VideoSection />
        <FrequentlySection />
        <Footer />
      </Box>
    </Box>
  );
}
export {getServerSideProps} from '../components/widgets/Chakra';
