import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenu2Line } from "@remixicon/react";

interface subCategory {
  title: string;
  slug: string;
}

interface category {
  title: string;
  slug: string;
  subcategories: subCategory[];
}

interface menu {
  categories: category[];
}
const MenuToggle = ({ categories }: menu) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        className="block md:hidden hover:opacity-70 cursor-pointer"
        onClick={onOpen}
      >
        <RiMenu2Line size={20} color="white" />
      </div>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="blue.700" color="white">
          <DrawerCloseButton />
          <DrawerHeader>TEST ONLINE</DrawerHeader>
          <DrawerBody>
            <Accordion allowToggle>
              {categories.map((menu) => (
                <AccordionItem key={menu.title} border="none">
                  <AccordionButton _hover={{ bg: "blue.600" }}>
                    <Box as="a" href={menu.slug} flex="1" textAlign="left">
                      {menu.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {menu.subcategories.map((sub) => (
                      <Box
                        as="a"
                        href={sub.slug}
                        display="block"
                        py={1}
                        _hover={{ color: "yellow.300" }}
                        key={sub.slug}
                      >
                        {sub.title}
                      </Box>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuToggle;
