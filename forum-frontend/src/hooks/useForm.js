import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function (schema) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  return { register, handleSubmit, errors, isValid };
}
