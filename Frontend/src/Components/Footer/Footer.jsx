import React from 'react'
import { Box,Text,Flex,Center,Image } from '@chakra-ui/react'
import ShopQ from "./ShopQ.jpeg"


const Footer = () => {
  return (
    <Box>
        <hr/>
        <Center w={'100%'} mb={'30px'} mt={'30px'}>
            <Flex  justifyContent={'space-between'}  w={'90%'}>
                <Box>
                    <Box>
                        <Text style={{fontWeight:'500',marginBottom:'20px' }}>
                        Shopper Central
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Easy Returns
                        </Text>
                        <Text>
                            Sign In/Register
                        </Text> 
                        <Text>
                            Our Policies
                        </Text> 
                        <Text>
                            CluesBucks
                        </Text> 
                        <Text>
                            Payment Options
                        </Text>
                        <Text>
                            ShopClues Bazar Surety
                        </Text>
                        <Text>
                            FAQs (Help)
                        </Text>
                    </Box>
                </Box>

                <Box>
                    <Box>
                        <Text style={{fontWeight:'500',marginBottom:'20px' }}>
                        Merchant Central
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Merchant Panel
                        </Text>
                        <Text>
                           How To Sell
                        </Text> 
                        <Text>
                            User Agreement
                        </Text> 
                        <Text>
                            Testimonials
                        </Text> 
                        <Text>
                            Seller Summit
                        </Text>
                        <Text>
                            Merchant Blog
                        </Text>
                        <Text>
                            Developer Resources
                        </Text>
                    </Box>
                </Box>

                <Box>
                    <Box>
                        <Text style={{fontWeight:'500',marginBottom:'20px',color:'teal' }}>
                        About Us
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            History
                        </Text> 
                        <Text>
                            Band of Trust
                        </Text> 
                        <Text>
                            In the News
                        </Text> 
                        <Text>
                           Awards
                        </Text>
                        <Text>
                            Careers
                        </Text>
                        <Text>
                            Blog
                        </Text>
                    </Box>
                </Box>

                <Box>
                    <Box>
                        <Text style={{fontWeight:'500',marginBottom:'20px' }}>
                        Contact Us
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Merchant Support
                        </Text>
                        <Text>
                            Bulk Orders
                        </Text> 
                        <Text>
                            Press
                        </Text> 
                     
                    </Box>
                </Box>


                <Box>
                    <Box>
                        <Text style={{fontWeight:'500',marginBottom:'20px' }}>
                        Press
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            In the News
                        </Text>
                    </Box>
                </Box>
            </Flex>

        </Center>

<hr/>
        <Center mt={'30px'} mb={'30px'}>
            <Flex w={'90%'} justifyContent={'space-around'} >

            <Box textAlign={'start'}  w={'50%'}>
                <Text fontWeight={'500'}>Keep In Touch</Text>
                <Flex>
                <Image h={'60px'} src={'https://t4.ftcdn.net/jpg/03/59/92/41/360_F_359924185_6bXu2kGSj1Ee4Say7FzN4KPYZFLfBcB7.jpg'}></Image>
                </Flex>
            </Box>

            <Box w={'50%'} >
                <Text fontWeight={'500'}>100% Secure and Trusted Payment</Text>
                <Flex mt={'15px'}>
                   <Image src={'https://images.shopclues.com/images/ui/pgateway_dkt@2x.png'}></Image>
                </Flex>
            </Box>
                
            </Flex>

        </Center>

 <hr/>
          
          <Box m={'20px'} mb={'30px'}>
          <Box fontWeight={'500'} mb={'20px'}>Our Leading Categories</Box>
          <Flex>
          <Box fontWeight={'500'} mb={'4px'}>
            Mobile & Tablets :
           </Box>
            <Box color={'grey'} ml={'5px'}>
              Android Phones| Smartphones| Feature Phones| Unboxed Phones| Refurbished Phones| Tablets| CDMA Phones| Value Added Services| Sell Old/ Used Mobiles
            </Box>
             </Flex>

             <Flex>
          <Box fontWeight={'500'}mb={'4px'}>
            Computers :
           </Box>
            <Box color={'grey'} ml={'5px'}>
                  Laptops| Printers| Routers| Ink & Toner Cartridges| Monitors| Video Games| Unboxed & Refurbished Laptops| Assembled Desktops| Data Cards          
            </Box>
             </Flex>

             <Flex>
          <Box fontWeight={'500'}mb={'4px'}>
            TV, Audio & Large Appliances :
           </Box>
            <Box color={'grey'} ml={'5px'}>
            TVs & DTH| Home Theatre Systems| Hidden Cameras & CCTVs| Refrigerators| Washing Machines| Air Conditioners| Cameras| Speakers            </Box>
             </Flex>


             <Flex>
          <Box fontWeight={'500'} mb={'4px'}>
            Mobile & Laptop Accessories :
           </Box>
            <Box color={'grey'} ml={'5px'}>
            Headphones| Power Banks| Backpacks| Mobile Cases & Covers| Pen Drives| External Hard Disks| Mouse| Smart Watches & Fitness Bands| MicroSD Cards            </Box>
             </Flex>


             <Flex>
          <Box fontWeight={'500'} mb={'4px'}>
            Appliances :
           </Box>
            <Box color={'grey'} ml={'5px'}>
            Trimmers| Hair Dryers| Emergency Lights| Water Purifiers| Electric Kettles| Hair Straighteners| Induction Cooktops| Sewing Machines| Geysers            </Box>
             </Flex>

             <Flex>
          <Box fontWeight={'500'} mb={'4px'}>
          Home & Kitchen :
           </Box>
            <Box color={'grey'} ml={'5px'}>
            Bedsheets| Hardware & Sanitaryware| Towels, Bath Linens| Furniture| Cookware| Kitchen Tools| Home Cleaning Utilities| Doormats| Curtains| Gardening Essentials            </Box>
             </Flex>

             <Flex>
          <Box fontWeight={'500'}mb={'4px'}>
          Fashion :
           </Box>
            <Box color={'grey'} ml={'5px'}>
            Women's Clothing| Men's Clothing| Women's Ethnic Wear| Men's Fashion Accessories| Sports Wear| Western Wear| Handbags & Wallets, Clutches| Handbags| Sarees| T-Shirts| Lingerie & Sleep Wear             </Box>
             </Flex>

             <Flex>
          <Box fontWeight={'500'} mb={'4px'}>
          Travel & Luggage :
           </Box>
            <Box color={'grey'} ml={'5px'}>
            Duffle Bags| Laptop Bags| Travel Pouches| Backpacks| Suitcases & Trolleys| Travel Accessories| Gym Bags| Messenger Bags| School Bags| Safety Locks             </Box>
             </Flex>

             <Flex>
          <Box fontWeight={'500'} mb={'4px'}>
          Jewelry & Watches :
           </Box>
            <Box color={'grey'} ml={'5px'}>
            Coins & Bars| Men's Watches| Women's Watches| Necklaces Sets| Fashion Jewelry| Pendants and Lockets| Earrings| Rings| Jewelry Boxes| Kid's Watches            </Box>
             </Flex>
             
          </Box>
<hr/>

        <Box m={'10px'} w={'95%'}>
            <Flex justifyContent={'space-between'}  p={'20px'}>
            <Flex>
                <Text > Privacy Policy |</Text>
                <Text >User Agreement |</Text>
                <Text>Notes to Security Practices |</Text>
                <Text>Compliance |</Text>
                <Text>Wall of Fame</Text>
            </Flex>
            <Flex>
                <Text>Copyright © 2011-2023 Clues Network Pvt. Ltd</Text>
                <Image w={'120px'} src={ShopQ}></Image>
            </Flex>

            </Flex>
            
        </Box>

    </Box>
  )
}

export default Footer