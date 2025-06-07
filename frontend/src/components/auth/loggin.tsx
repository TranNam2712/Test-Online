import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import {
  RiMailLine,
  RiLockPasswordLine,
  RiEyeLine,
  RiEyeCloseLine,
} from "@remixicon/react";
import { useState } from "react";
import SocialConnect from "./social";
import { NavLink } from "react-router-dom";
import { loginSchema, type LoginSchemaType } from "../../utils/validate";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      className="mb-5 md:mb-36"
    >
      <Stack spacing={5}>
        <Box textAlign="center">
          <Heading color="teal.500" size="lg">
            Welcome Back
          </Heading>
          <Text fontSize="sm" color="gray.500" mt={1}>
            Sign in to your account
          </Text>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={4}>
            <FormControl isInvalid={!!errors.email}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <RiMailLine />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="Email address"
                  {...register("email")}
                />
              </InputGroup>
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <RiLockPasswordLine />
                </InputLeftElement>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                />
                <InputRightElement
                  onClick={() => setShowPassword(!showPassword)}
                  cursor="pointer"
                >
                  {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Flex justify="space-between" align="center">
              <Checkbox {...register("remember")}>Remember me</Checkbox>
              <Link color="teal.500" fontSize="sm">
                Forgot password?
              </Link>
            </Flex>

            <Button type="submit" colorScheme="teal" fontWeight="bold" w="full">
              Sign in
            </Button>
          </Stack>
        </form>
        <SocialConnect />

        <Text fontSize="sm" textAlign="center" mt={4}>
          If you don&apos;t have an account,{" "}
          <NavLink to={"/register"}>
            <Link color="teal.500" fontWeight="medium">
              Do Sign Up
            </Link>
          </NavLink>
        </Text>
      </Stack>
    </Box>
  );
};

export default Login;
