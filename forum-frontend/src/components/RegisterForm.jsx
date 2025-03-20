import React from "react";
import * as userService from "../services/userService";
import auth from "../services/authService";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { z } from "zod";
import { toast } from "react-toastify";
import Input from "./common/Input";
import Button from "./common/Button";
import { FaUser } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./styles/Form.css";

const RegisterForm = () => {
  const schema = z.object({
    firstName: z.string().min(3).max(255),
    lastName: z.string().min(3).max(255),
    email: z.string().email().min(5).max(255),
    password: z.string().min(5).max(255),
  });

  const { register, handleSubmit, errors, isValid } = useForm(schema);

  const doSubmit = async (user) => {
    try {
      const response = await userService.register(user);
      auth.loginWithJWT(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      toast.error(ex.message);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(doSubmit)}>
        <Input
          name="firstName"
          label="First Name"
          icon={<FaUser />}
          errors={errors}
          register={register}
        />
        <Input
          name="lastName"
          label="Last Name"
          icon={<FaUser />}
          errors={errors}
          register={register}
        />
        <Input
          name="email"
          label="Email"
          icon={<MdEmail />}
          errors={errors}
          register={register}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          icon={<FaKey />}
          register={register}
          errors={errors}
        />

        <Button isValid={isValid} label="Sign Up" />
      </form>
    </div>
  );
};

export default RegisterForm;
