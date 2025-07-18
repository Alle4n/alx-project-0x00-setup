interface ButtonProps {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button className={`text-white px-4 py-2 ${className}`}>
      {title}
    </button>
  );
};

export default Button;
