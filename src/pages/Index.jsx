import { Box, Button, Container, Flex, Heading, IconButton, List, ListItem, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaCheckCircle, FaFilter, FaRegCircle } from "react-icons/fa";
import { useState } from "react";

const mockNotifications = [
  {
    id: 1,
    title: "Ordine Spedito",
    message: "Il tuo ordine è stato spedito.",
    type: "Ordine",
    date: "2023-01-01",
    read: false,
  },
  {
    id: 2,
    title: "Promozione Prodotti",
    message: "Nuova promozione disponibile!",
    type: "Promozione",
    date: "2023-02-14",
    read: true,
  },
  // Add more mock notifications here
];

const NotificationItem = ({ notification, onMarkAsRead }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <ListItem p={4} bg={notification.read ? "transparent" : bg} borderBottom="1px" borderColor="gray.200" display="flex" justifyContent="space-between" alignItems="center">
      <VStack align="start">
        <Heading size="sm">{notification.title}</Heading>
        <Text fontSize="sm">{notification.message}</Text>
        <Text fontSize="xs" color="gray.500">
          {notification.date}
        </Text>
      </VStack>
      <IconButton icon={notification.read ? <FaCheckCircle /> : <FaRegCircle />} aria-label="Mark as read" onClick={() => onMarkAsRead(notification.id)} />
    </ListItem>
  );
};

const Index = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleMarkAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((n) => {
        if (n.id === id) {
          return { ...n, read: true };
        }
        return n;
      }),
    );
  };

  return (
    <Container maxW="container.md" py={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading>Gestione Notifiche</Heading>
        <IconButton icon={<FaFilter />} aria-label="Filter notifications" variant="outline" />
      </Flex>
      <Box>
        <List spacing={3}>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} onMarkAsRead={handleMarkAsRead} />
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Index;
