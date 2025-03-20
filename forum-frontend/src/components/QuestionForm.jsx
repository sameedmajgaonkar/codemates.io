import React from "react";
import apiClient from "../services/api-client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { tags } from "./common/TagList";
import Input from "./common/Input";
import Button from "./common/Button";
import TextArea from "./common/TextArea";
import Select from "./common/Select";
import { toast } from "react-toastify";
import { FaSnowflake, FaCloudUploadAlt } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";

const QuestionForm = () => {
  const navigate = useNavigate();
  const schema = z.object({
    title: z.string().min(5).max(55),
    problem: z.string().min(10).max(300),
    experiment: z.string().min(10).max(300),
    // screenshot: z.instanceof(FileList, {
    //   message: "Please upload a screenshot of your problem",
    // }),
    screenshot: z.any(),
    tag: z.string().min(1),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema) });

  const doSubmit = async (data) => {
    const questionData = { ...data, screenshot: data.screenshot[0] };
    toast("Uploading Question...", { autoClose: 4000 });
    await apiClient.postForm("/questions", questionData);
    navigate("/me/questions");
  };
  return (
    <div className="form-wrapper h-full md:w-3/4">
      <h2 className="text-md whitespace-nowrap">Ask Question</h2>
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
        <Input
          type="file"
          name="screenshot"
          errors={errors}
          label="Screenshot"
          accept=".jpeg,.jpg,.png"
          register={register}
          icon={<FaCloudUploadAlt />}
        />
        <Select
          name="tag"
          label="Tags"
          register={register}
          errors={errors}
          options={tags}
        />
        <Button isValid={isValid} label="Post your question" />
      </form>
    </div>
  );
};

export default QuestionForm;
