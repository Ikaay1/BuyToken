import Hero from '@/components/home/Hero';
import Navbar from '@/components/home/Navbar';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
    </Box>
  );
}
