import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { RiJavaLine } from "react-icons/ri";
export const tags = [
  { icon: <RiJavaLine />, label: "Java", tag: "java", color: "#5382A1" },
  { icon: <FaReact />, label: "React", tag: "react", color: "#61DAFB" },
  { icon: <FaNodeJs />, label: "NodeJs", tag: "nodejs", color: "#339933" },
  { icon: <FaPython />, label: "Python", tag: "python", color: "#3776AB" },
  { icon: <FaJs />, label: "Javascript", tag: "javascript", color: "#F7DF1E" },
  { icon: <TbBrandMysql />, label: "SQL", tag: "sql", color: "#4479A1" },
  { icon: <SiMongodb />, label: "MongoDB", tag: "mongodb", color: "#47A248" },
];
const TagList = ({ onTagClick, selectedTag }) => {
  return (
    <ul className="flex flex-col md:flex-row font-semibold justify-center drop-shadow-md rounded-lg">
      {tags.map(({ icon, tag, label, color }) => (
        <li
          className="flex justify-center text-sm md:text-base items-center px-3 py-2 gap-2 text-white cursor-pointer bg-primary_dark"
          style={tag === selectedTag ? { color: color } : {}}
          onClick={() => onTagClick(tag)}
        >
          <span className="text-sm md:text-xl">{icon}</span> {label}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
