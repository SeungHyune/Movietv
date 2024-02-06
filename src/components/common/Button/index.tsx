interface ButtonProps {
  children: string;
  width?: number;
  height?: number;
  radius?: string;
  backgroundColor: string;
  color: string;
  fontWeight?: string;
  onClick: () => void;
}

const Button = ({
  children,
  width = 200,
  height = 50,
  radius,
  backgroundColor,
  color,
  fontWeight = 'normal',
  ...props
}: ButtonProps) => {
  const buttonStyle = {
    width: width,
    height: height,
    borderRadius: `${radius}`,
    backgroundColor,
    color,
    fontWeight,
  };

  return (
    <button
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
