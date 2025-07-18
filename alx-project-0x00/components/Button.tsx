import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`text-white bg-blue-600 px-4 py-2 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
