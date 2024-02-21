import React, { FormEvent } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Box, Button, Flex, Input, Link, useBreakpointValue, Heading, Alert, AlertIcon } from '@chakra-ui/react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | boolean>(false);
  const router = useRouter();
  const supabase = useSupabaseClient();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, isGuest: boolean = false) => {
    e.preventDefault();

    let signInEmail = email;
    let signInPassword = password;

    // If signing in as guest, use predefined credentials
    if (isGuest) {
      signInEmail = 'test@email.com';
      signInPassword = 'test';
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: signInEmail,
      password: signInPassword
    });

    if (error) {
      setErrorMessage(`Failed to sign in: ${error}`);
      return;
    }

    setErrorMessage(null);
    setSuccessMessage(true);
    setEmail('');
    setPassword('');
    router.push('/');
  };


  const formWidth = useBreakpointValue({ base: "90%", md: "60%", lg: "40%" });

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <Box width={formWidth}>
        {errorMessage && (
          <Alert borderRadius={20} mb={5} status='error'>
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}
        {successMessage && (
          <Alert borderRadius={20} mb={5} status='success'>
            <AlertIcon />
            Login successful!
          </Alert>
        )}
        <Heading textAlign="center" marginBottom="2em">Login</Heading>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Flex direction="column" marginBottom="1em">
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              marginBottom="1em"
            />
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              marginBottom="1em"
            />
            <Flex gap={2} direction={'column'}>
              <Button type="submit" colorScheme="blue">Sign in</Button>
              <Button type="button" colorScheme="blue" onClick={(e) => handleSubmit(e as any, true)}>Sign in as guest</Button>
            </Flex>
          </Flex>
        </form>
        <Link href="/signup" color="blue.500">Don{"'"}t have an account?</Link>
      </Box>
    </Flex>
  );
};

export default Login;
