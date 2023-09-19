import Hero from '@/components/home/Hero';
import Navbar from '@/components/home/Navbar';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box bg='white'>
      <Box maxW='1400px' mx='auto'>
        <Navbar />
        <Hero />
      </Box>
    </Box>
  );
}
