  import React, { useEffect, useState } from 'react'
  import Suggestion from './Suggestion'
  import { Box, Flex } from '@chakra-ui/react'
  import { useRouter } from 'next/router'
  import { useSupabaseClient } from '@supabase/auth-helpers-react'
import EmptySuggestions from './EmptySuggestions'
import Link from 'next/link'

  const Suggestions = () => {
    const [suggestions, setSuggestions] = useState<any[] | null>(null)
    const supabase = useSupabaseClient()
    const router = useRouter()

    useEffect(() => {
      const getSuggestions = async () => {
        try {
          const { data, error } = await supabase
            .from('feedback')
            .select();
      
          if (error) {
            console.error("An error occurred:", error);
            return;
          }
      
          // Handle Success
          setSuggestions(data)
        } catch (error) {
          console.error("Unexpected error:", error);
        } finally {
          // Restet loading state
          router.push('/')
        }
      }

      getSuggestions()
    }, [])

    // const handleSuggestionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //   console.log('click')
    // }

    return (
      <Flex gap="16px" direction="column" mx="24px" mt="32px" >
        {suggestions ? (
          suggestions.map((suggestion, index) => (
            <Link href={`/feedback/edit/${suggestion.id}`} key={index}>
              <Suggestion suggestion={suggestion} />
            </Link>
          ))
        ): (
          <EmptySuggestions />
        )}
      </Flex>
    )
  }

  export default Suggestions