import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt, 
  FaGithub, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiC, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiMysql 
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "Python", icon: FaPython },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    category: "Backend (Basic)",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaNodeJs },
      { name: "Authentication", icon: FaNodeJs },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscCode },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
    ]
  }
];
