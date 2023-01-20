import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Box } from 'framer-motion';
import { Box,Image,Button } from '@chakra-ui/react';

function UncontrolledExample() {
  return (
    <Box display="flex" mt={20} ml={20} mr={20} >
        <Box w={'80%'}  >
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopclues.com/images/banners/2023/Jan/19/HB1_Refurb_Web_SYM_19Jan23.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopclues.com/images/banners/2023/Jan/20/HB2_Blockbuster_Web_SYM_20Jan23_Rev.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopclues.com/images/banners/2023/Jan/20/HB3_Prebuzz_Web_SYM_20Jan23.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopclues.com/images/banners/2023/Jan/19/JMAX_HB2_Web_Riya_19Jan22.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
  
      </Carousel.Item>
    </Carousel>
    </Box>
    <Box ml={'30'} boxShadow={'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'} >
        <Box>
            <Button border={'none'} background={'transparent'}>
            <Image w={'220px'} src='https://cdn.shopclues.com/images/banners/2022/dec/06/Platinum1_SYM_06Dec22.jpg'></Image>
            </Button>
        </Box>
        <Box>
            <Button border={'none'}>
            <Image w={'220px'}  src='https://cdn.shopclues.com/images/banners/2022/dec/06/Platinum2_SYM_06Dec22.jpg'></Image>
            </Button>
        </Box>
        <Box>
            <Button border={'none'} background={'transparent'}>
        <Image w={'220px'} src='https://cdn.shopclues.com/images/banners/2022/dec/02/Platinum3_Esha_2ndDec22.jpg'></Image>
        </Button>
        </Box>

    </Box>
    </Box>
  );
}

export default UncontrolledExample;