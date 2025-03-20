import React from "react";
import auth from "../services/authService";
import { useNavigate } from "react-router-dom";
import Input from "./common/Input";
import Button from "./common/Button";
import useForm from "../hooks/useForm";
import { toast } from "react-toastify";
import { z } from "zod";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./styles/Form.css";

const LoginForm = () => {
  const schema = z.object({
    email: z
      .string()
      .email()
      .min(5, { message: "Email must be at least 5 characters long" })
      .max(255),
    password: z
      .string()
      .min(5, { message: "Password must be at least 5 characters long" })
      .max(255),
  });

  const { register, handleSubmit, errors, isValid } = useForm(schema);
  const navigate = useNavigate();

  const doSubmit = async (creds) => {
    try {
      await auth.login(creds);
      navigate("/");
    } catch (ex) {
      toast.error(ex.message);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(doSubmit)}>
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

        <Button isValid={isValid} label="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
