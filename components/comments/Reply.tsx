import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ReplyProps {
    reply: any;
    leftMargin?: string;
}

const Reply = ({ reply, leftMargin }: ReplyProps) => {

  console.log(reply?.full_name);
    return (
        <Box fontSize="13px" mt="32px" pl="40px">
            <Flex justifyContent="space-between">
                <Flex gap="16px">
                    <Avatar
                        name={reply?.full_name || 'Unknown'}
                        src={reply?.avatar_url}
                    />
                    <Box my="auto">
                        <Text fontWeight="bold">{reply?.full_name || 'Unknown'}</Text>
                        <Text color="#647196">{reply?.tag_name || 'unknown_username'}</Text>
                    </Box>
                </Flex>
                {/* <Text onClick={() => {}} fontWeight="semibold" color="#4661E6" as="button">Reply</Text> */}
            </Flex>
            <Text mt="24px" ml={leftMargin} color="#647196">
                {reply?.reply}
            </Text>
            <Flex>
                {/* <ReplyComment commentId={comment.id} /> */}
            </Flex>
        </Box>
    );
};

export default Reply;
