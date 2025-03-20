import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import httpService from "../services/httpService";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import apiClient from "../services/api-client";
import Input from "./common/Input";
import Button from "./common/Button";
import TextArea from "./common/TextArea";
import Select from "./common/Select";
import { tags } from "../components/common/TagList";
import { FaSnowflake } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const EditQuestion = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [question, setQuestion] = useState({});

  useEffect(() => {
    httpService("questions")
      .get(id)
      .then(({ data: { title, experiment, problem, tag } }) =>
        setQuestion({ title, experiment, problem, tag })
      );
  }, []);

  const schema = z.object({
    title: z.string().min(5).max(55),
    problem: z.string().min(10).max(300),
    experiment: z.string().min(10).max(300),
    tag: z.string().min(1),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: question.title,
      problem: question.problem,
      experiment: question.experiment,
      tag: question.tag,
    },
    values: question,
  });

  const doSubmit = async (data) => {
    await apiClient.put(`questions/${id}`, data);
    navigate("/me/questions");
  };
  return (
    <div className="form-wrapper w-3/4">
      <h2>Edit Question</h2>
      <form onSubmit={handleSubmit(doSubmit)}>
        <Input
          name="title"
          errors={errors}
          label="Title"
          register={register}
          icon={<FaSnowflake />}
        />
        <Input
          name="problem"
          errors={errors}
          label="Problem"
          register={register}
          icon={<MdReportProblem />}
        />
        <TextArea
          name="experiment"
          label="Experiment"
          placeholder="Provide some insights or code or some steps to replicate the problem..."
          register={register}
          errors={errors}
        />
        <Select
          name="tag"
          label="Tags"
          register={register}
          errors={errors}
          options={tags}
        />
        <Button label="Update your question" isValid={isValid} />
      </form>
    </div>
  );
};

export default EditQuestion;
