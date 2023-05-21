interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const PrimaryButton = ({
  children,
  onClick,
  type,
  disabled,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`transition-colors text-lg font-bold bg-cyan-500 rounded-md p-2 text-white border-2 border-cyan-500 hover:bg-white hover:text-cyan-500 ${
      disabled && 'disabled:opacity-70'
    }`}>
    {children}
  </button>
);
