import { Box, Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card
        key={id}
        my={4}
        p={4}
        cursor="pointer"
        border="1px solid #e2e8f0" // Add a border
        borderRadius="lg"
        boxShadow="md" // Add a shadow
      >
        <VStack spacing={4}>
          <Heading size="md">
            {title} ({year})
          </Heading>
          <Text>{author}</Text>
          <Image w={24} h={24} src={`http://localhost:8000/${image}`} shadow="lg" />
          <Text>
            <span>Publisher: </span>
            {publisher}
          </Text>
        </VStack>
      </Card>
    </Link>
  );
}
