import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { SelectedSuggestionProvider } from '@/components/context/SelectedSuggestionContext'
import { CurrentUserProfileProvider } from '@/components/context/CurrentUserProfileContext'
import { SelectedFilterProvider } from '@/components/context/SelectedFilterContext'
import { SuggestionsSortProvider } from '@/components/context/SuggestionsSortContext'

export default function App({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  return (
    <ChakraProvider>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <CurrentUserProfileProvider>
          <SelectedSuggestionProvider>
            <SelectedFilterProvider>
              <SuggestionsSortProvider>
                <Component {...pageProps} />
              </SuggestionsSortProvider>
            </SelectedFilterProvider>
          </SelectedSuggestionProvider>
        </CurrentUserProfileProvider>
      </SessionContextProvider>
    </ChakraProvider>
  )
}
