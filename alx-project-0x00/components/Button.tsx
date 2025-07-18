import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className, styles }) => {
  return (
    <button className={`text-white px-4 py-2 ${className} ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
