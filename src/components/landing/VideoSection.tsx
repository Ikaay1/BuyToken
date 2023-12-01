import React, {useRef, useState} from 'react';

import PlayIcon from '@/assets/PlayIcon';
import {Box, Icon} from '@chakra-ui/react';

const VideoSection = () => {
  const videoRef: any = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <Box
      background='rgba(76, 173, 115, 0.2)'
      py={{base: '1.8rem', lg: '3rem'}}
      px={{base: '1.4rem', lg: 0}}
    >
      <Box
        width={{lg: '766px'}}
        maxH={{base: '238px', lg: '484px'}}
        mx='auto'
        position={'relative'}
      >
        <video src='/assets/share.mp4' ref={videoRef}></video>
        {isPlaying ? (
          <Icon
            as={PlayIcon}
            position={'absolute'}
            top='50%'
            left='50%'
            transform={'translate(-50%, -50%)'}
            w={{base: '32.45px', lg: '66px'}}
            h={{base: '32.45px', lg: '66px'}}
            cursor='pointer'
            onClick={handlePlay}
          />
        ) : (
          <Icon
            as={PlayIcon}
            position={'absolute'}
            top='50%'
            left='50%'
            transform={'translate(-50%, -50%)'}
            w={{base: '32.45px', lg: '66px'}}
            h={{base: '32.45px', lg: '66px'}}
            cursor='pointer'
            onClick={handlePlay}
          />
        )}
      </Box>
    </Box>
  );
};

export default VideoSection;
