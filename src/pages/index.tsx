import Hero from '@/components/landing/Hero';
import Navbar from '@/components/landing/Navbar';
import {Box} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg='white'>
      <Box maxW='1450px' mx='auto'>
        <Navbar />
        <Hero />
      </Box>
    </Box>
  );
}
