import React from 'react'
import {Box,Text,Image,Center, Flex} from '@chakra-ui/react'
import './Product.css'

const Product = () => {
  return (
    <Box>
      <Box>
        <Box mb={'10px'}>
        <Text color={'black'} fontWeight={'500'} ml={'20px'} fontSize={'20px'} >
                    Deals of the Day
        </Text>
        </Box>

{/* 
          <Center>
          <div className='products'  > 
              <Box className='individualproduct'>
                <Box>
                    <Image className="product_image" src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image className="product_image" src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image className="product_image" src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image className="product_image" src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image className="product_image" src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image className="product_image" src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>
                
                <Box className='individualproduct'>
                <Box>
                    <Image className="product_image" src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image className="product_image" src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

             
          </div>
          </Center> */}
       
      <Center>
        <main id="trend" >
          <section >
            {/* <Box class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={{ base: '100%', sm: '50%', md: '85%' }}
                      src="https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }}>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text id='hide' style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text id='hide' style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
              </a>
            </Box> */}

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={{ base: '100%', sm: '50%', md: '85%' }}
                      src="https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }} >Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text   style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text   style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
              </a>
            </div>
            {/* https://cdn.shopclues.com/images1/thumbnails/113303/320/320/152033193-113303406-1614250554.jpg */}
            <div class="slide">
              <a href="/refrigerator">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                    width={{ base: '100%', sm: '50%', md: '85%' }}
                      // width={{ base: '80%', sm: '50%', md: '85%',lg:'70%' }}
                      // height={{base: '80%', sm: '50%', md: '85%',lg:'70%' }}
                      src="https://cdn.shopclues.com/images/thumbnails/45541/200/200/92919327lggli302rpol400x400imaeh4ewge3gedxg146400637114640111731476432497.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }} >Godrej 240Ltr Edge Pro </Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$14999</Text>
                    <Text  id='hide' style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}></Text>
                    <Text  id='hide' style={{color:'teal',fontWeight:'500',ml:'15px'}}>Upto 25% off</Text>
                  </Box>
                </Box>
              </a>
            </div>


           
            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={{ base: '100%', sm: '50%', md: '85%' }}
                      src="https://cdn.shopclues.com/images1/thumbnails/81476/200/200/135627858-81476269-1665754103.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }} >MTR MT310 Dual Sim </Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$749</Text>
                    <Text  id='hide' style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$999</Text>
                    <Text  id='hide' style={{color:'teal',fontWeight:'500',ml:'15px'}}>25% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="/tv">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                    mt={'10%'}
                    width={{ base: '100%', sm: '50%', md: '95%' }}
                      // width={{ base: '80%', sm: '50%', md: '85%',lg:'70%' }}
                      // height={{base: '80%', sm: '50%', md: '85%',lg:'70%' }}
                      src="https://cdn.shopclues.com/images1/thumbnails/112893/280/1/151865154-112893954-1610606300.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box mt={'6%'}>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }} >Samsung 138Cm (55Inches)</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$84999</Text>
                    <Text  id='hide' style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}></Text>
                    <Text  id='hide' style={{color:'teal',fontWeight:'500',ml:'15px'}}>Upto 20% off</Text>
                  </Box>
                </Box>
              </a>
            </div> 

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                     width={{ base: '100%', sm: '50%', md: '85%' }}
                      src="https://cdn.shopclues.com/images1/thumbnails/71795/200/200/128902274-71795769-1653057803.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }}>Premium Quality Nylon</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$250</Text>
                    <Text  id='hide' style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$399</Text>
                    <Text  id='hide'style={{color:'teal',fontWeight:'500',ml:'15px'}}>37% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                   width={{ base: '100%', sm: '50%', md: '85%' }}
                      src="https://cdn.shopclues.com/images1/thumbnails/115737/200/200/152853766-115737455-1637323013.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }}>Dizom Dz-104 Hip-Hop</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$389</Text>
                    <Text  id='hide' style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$2499</Text>
                    <Text  id='hide' style={{color:'teal',fontWeight:'500',ml:'15px'}}>84% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={{ base: '100%', sm: '50%', md: '85%' }}
                      src="https://cdn.shopclues.com/images1/thumbnails/115044/200/200/152634665-115044372-1629705035.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }} >ZEB-UCC100 2.0 Cable</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$139</Text>
                    <Text  id='hide' style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$899</Text>
                    <Text  id='hide' style={{color:'teal',fontWeight:'500',ml:'15px'}}>85% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={{ base: '100%', sm: '50%', md: '85%' }}
                      src="https://cdn.shopclues.com/images1/thumbnails/95155/200/200/142698419-95155481-1653692385.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }}>ESHOPINDIA Data Cable</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$270</Text>
                    <Text  id='hide' style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$499</Text>
                    <Text  id='hide' style={{color:'teal',fontWeight:'500',ml:'15px'}}>46% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={{ base: '100%', sm: '50%', md: '85%' }}
                      src="https://cdn.shopclues.com/images1/thumbnails/112883/200/200/151860087-112883707-1664649308.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text fontSize={{ base: '14px', md: '20px', lg: '16px' }}>Innotek Mini k1</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$169</Text>
                    <Text  id='hide'style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$599</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>72% off</Text>
                  </Box>
                </Box>
              </a>
            </div>
           
         
          </section>
        </main>
      </Center>

      </Box>


      <Box>
        <Box mb={'10px'} mt={'25px'}>
        <Text color={'black'} fontWeight={'500'} ml={'20px'} fontSize={'20px'} >
                  Your Gadgets Store
        </Text>
        </Box>

       
      <Center>
        <main id="trend" >
          <section>
            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"80%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/99370/200/200/145508146-99370521-1668508420.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >i7S TWS Twins Wireless</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$299</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$2999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>90% off</Text>
                  </Box>
                </Box>
              </a>
            </div>
            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"80%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/95357/200/200/142826933-95357827-1664550819.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >HBS-730 In the Ear Bluetooth </Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$299</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1099</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>73% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"80%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/112883/200/200/151860087-112883707-1664649308.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Innotek Mini K1 Universal</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$169</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$599</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>72% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"80%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/98012/200/200/144475154-98012302-1664648956.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Refurbished Nokia 1100</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$999</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>50% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"80%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >ZEB-UCC100 2.0 Cable</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$139</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$899</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>85% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"80%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/95155/200/200/142698419-95155481-1653692385.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >ESHOPINDIA Data Cable</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$270</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$499</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>46% off</Text>
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"80%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/112883/200/200/151860087-112883707-1664649308.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Innotek Mini k1</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>$169</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$599</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>72% off</Text>
                  </Box>
                </Box>
              </a>
            </div>
           
         
          </section>
        </main>
      </Center>
      
      </Box>

      <Box>
        <Box mb={'10px'} mt={'25px'}>
        <Text color={'black'} fontWeight={'500'} ml={'20px'} fontSize={'20px'} >
                  Daily Essentials
        </Text>
        </Box>

       
      <Center>
        <main id="trend" >
          <section>
            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"65%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/105589/280/1/149278210-105589660-1585251645.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Center mt={'5px'}>Cooking Essentials</Center>
                  <Center display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.49</Text>
                  
                  </Center>
                </Box>
              </a>
            </div>
            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={{base:"35%",md:"45%",lg:"55%"}}
                      src="https://cdn.shopclues.com/images1/thumbnails/105589/320/1/149278289-105589933-1585251885.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box mt={'10px'} >
                    <Center >Skin, Hair & Body</Center>
                  <Center display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.99</Text>
                 
                  </Center>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"60%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/104441/280/1/148788228-104441348-1578472379.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Center mt={'10px'} >Kitchen Essentials</Center>
                  <Center display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.49</Text>
                  
                  </Center>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"60%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/105520/280/1/149254102-105520442-1584863770.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Center mt={'10px'} >Masks, Sanitizer & More</Center>
                  <Center display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.49</Text>
                  </Center>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"60%"}
                      src="https://cdn.shopclues.com/images/thumbnails/42332/280/1/966030079473255231PUTPaCZnL146606056314665883171470319810.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Center mt={'10px'} >Cleaning & Dusting Supplies</Center>
                  <Center display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.109</Text>
                  
                  </Center>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"60%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/105577/320/320/149274414-105577366-1585235325.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Center mt={'10px'} >Laundry Detergents</Center>
                  <Center display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.49</Text>
                   
                  </Center>
                </Box>
              </a>
            </div>

           
         
          </section>
        </main>
      </Center>
      
      </Box>

      <Box>
        <Box mb={'10px'} mt={'25px'}>
        <Text color={'black'} fontWeight={'500'} ml={'20px'} fontSize={'20px'} >
                 Prime Mall
        </Text>
        </Box>

       
      <Center>
        <main id="trend" >
          <section>
            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"15%"}
                      src="https://gd.image-gmkt.com/li/066/347/1706347066.g_800-w-st_g.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Cooking Essentials</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.49</Text>
                  
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"15%"}
                      src="https://gd.image-gmkt.com/li/397/137/1729137397.g_800-w-st_g.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box textAlign={'center'}>
                    <Text >Cooking Essentials</Text>
                  <Box display={'flex'} >
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.49</Text>
                  
                  </Box>
                </Box>
              </a>
            </div>


           
         
          </section>
        </main>
      </Center>
      
      </Box>

      <Box mb={'50px'}>
        <Box mb={'30px'} mt={'25px'}>
        <Text color={'black'} fontWeight={'500'} ml={'20px'} fontSize={'20px'} >
                 Budget Bazar
        </Text>
        </Box>

       
      <Flex w={'20%'}>
      <Image src='https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_01.jpg'></Image>
      <Image src='https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_02.jpg'></Image>
      <Image src='https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_03.jpg'></Image>
      <Image src='https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_04.jpg'></Image>
      <Image src='https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_05.jpg'></Image>
      </Flex>

      <Flex w={'33%'}>
        <Image src='https://cdn.shopclues.com/images/banners/Diet&Nutrition_ColorGold_3rdJune_PR.jpg' ></Image>
        <Image src='https://cdn.shopclues.com/images/banners/goldbanner_Beauty_3rdJune_PR.jpg' ></Image>
        <Image src='https://cdn.shopclues.com/images/banners/goldbanner_WaterBottles_3rdJune_PR.jpg' ></Image>

      </Flex>
      
      </Box>

      <Box>
        <Box mb={'30px'} >
        <Text color={'black'} fontWeight={'500'} ml={'20px'} fontSize={'20px'} >
                  Brand Store
        </Text>
        </Box>

       
      <Center mb={'50px'}>
        <main id="trend" >
          <section>
            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"57%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/104122/280/1/148627878-104122294-1577180435.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Khadi</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.69</Text>
                  
                  </Box>
                </Box>
              </a>
            </div>
            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"56%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/109822/280/1/150760050-109822495-1600850631.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Redmi</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Save Upto Rs. 5000</Text>
                 
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"66%"}
                      src="https://cdn.shopclues.com/images/thumbnails/34620/280/1/902417708981309282209372miltonwaterbottleset1434449243144186494711454507692145672090914577949341459228900.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Milton</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Upto 60% Off</Text>
                  
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"56%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/109013/280/1/150523151-109013699-1603186269.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Realme</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Save Upto Rs. 5,000</Text>

                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"56%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/109124/280/1/150563834-109124498-1600113360.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Vivo</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Save Upto Rs. 5000</Text>
                  
                  </Box>
                </Box>
              </a>
            </div>

            <div class="slide">
              <a href="">
                <Center>
                  <Box display={"flex"} className="multiimage">
                    <Image
                      width={"60%"}
                      src="https://cdn.shopclues.com/images1/thumbnails/105577/320/320/149274414-105577366-1585235325.jpg"
                    >
                    </Image>
                  </Box>
                </Center>
                <Box>
                    <Text >Laundry Detergents</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'500',color:"black",marginRight:'5px' }}>Starting at Rs.49</Text>
                   
                  </Box>
                </Box>
              </a>
            </div>

           
         
          </section>
        </main>
      </Center>
      
      </Box>
    </Box>
  )
}

export default Product