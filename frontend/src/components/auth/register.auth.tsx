import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  Heading,
  IconButton,
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
  RiEyeCloseLine,
  RiEyeLine,
  RiLockLine,
  RiMailLine,
  RiPhoneLine,
  RiUserLine,
} from "@remixicon/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialConnect from "./social";
import {
  registerSchema,
  type RegisterSchemaType,
} from "../../helpers/auth.validate";
import { zodResolver } from "@hookform/resolvers/zod";
import Breadcrumb from "../UI/bread-crumb";

const Register = () => {
  // react hook formform
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    // resolver connect zod and react-hook-form
    resolver: zodResolver(registerSchema),
  });

  // state show passwordpassword
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: RegisterSchemaType) => {
    console.log(data);
  };

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb items={[{ title: "Đăng ký" }]} />
      <Box
        maxW="md"
        mx="auto"
        my={20}
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      >
        {/* title */}

        <Stack spacing={5}>
          <Box textAlign="center">
            <Heading color="teal.500" size="lg">
              Create Account
            </Heading>
            <Text fontSize="sm" color="gray.500" mt={1}>
              Sign up to get started
            </Text>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              {/* fullname  */}
              <FormControl isInvalid={!!errors.name}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<RiUserLine />}
                  />
                  <Input placeholder="Full name" {...register("name")} />
                </InputGroup>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>

              {/* phone */}
              <FormControl isInvalid={!!errors.phone}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<RiPhoneLine />}
                  />
                  <Input placeholder="Phone" {...register("phone")} />
                </InputGroup>
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl>
              {/* email */}

              <FormControl isInvalid={!!errors.email}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<RiMailLine />}
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    {...register("email")}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              {/* password */}

              <FormControl isInvalid={!!errors.password}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<RiLockLine />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password")}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Toggle Password Visibility"
                      icon={showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      variant="ghost"
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              {/* confirm password */}

              <FormControl isInvalid={!!errors.confirmPassword}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<RiLockLine />}
                  />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    {...register("confirmPassword")}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Toggle Confirm Password Visibility"
                      icon={
                        showConfirmPassword ? <RiEyeCloseLine /> : <RiEyeLine />
                      }
                      size="sm"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      variant="ghost"
                    />
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </FormErrorMessage>
              </FormControl>
              {/* accept terms */}

              <FormControl isInvalid={!!errors.acceptTerms}>
                <Checkbox {...register("acceptTerms")}>
                  <Text fontSize="sm">
                    I agree to the{" "}
                    <Link color="teal.500">Terms of Service</Link> and{" "}
                    <Link color="teal.500">Privacy Policy</Link>
                  </Text>
                </Checkbox>
                <FormErrorMessage>
                  {errors.acceptTerms && errors.acceptTerms.message}
                </FormErrorMessage>
              </FormControl>

              {/* button register */}
              <Button type="submit" colorScheme="teal" width="full">
                Create Account
              </Button>
            </Stack>
          </form>

          <SocialConnect />
          <Text fontSize="sm" textAlign="center">
            Already have an account? {/* route to login */}
            <NavLink to={"/login"}>
              <Link color="teal.500">Sign in</Link>
            </NavLink>
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default Register;
