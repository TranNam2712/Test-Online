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
import { loginSchema, type LoginSchemaType } from "../../helpers/auth.validate";
import { zodResolver } from "@hookform/resolvers/zod";
import Breadcrumb from "../UI/bread-crumb";

const Login = () => {
  // hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(loginSchema) });

  // state show password
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb current="Đăng nhập" />
      <Box
        maxW="md"
        mx="auto"
        p={8}
        my={"20"}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        className="mb-5 md:mb-36"
      >
        <Stack spacing={4}>
          {/* title */}
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
              {/* email */}

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

              {/* password */}

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

              {/* remember login */}

              <Flex justify="space-between" align="center">
                <Checkbox {...register("remember")}>Remember me</Checkbox>
                <Link color="teal.500" fontSize="sm">
                  Forgot password?
                </Link>
              </Flex>

              {/* button login */}

              <Button
                type="submit"
                colorScheme="teal"
                fontWeight="bold"
                w="full"
              >
                Sign in
              </Button>
            </Stack>
          </form>
          <SocialConnect />

          {/* route to register */}

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
    </>
  );
};

export default Login;
