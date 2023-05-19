interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit' | 'reset';
}

export const PrimaryButton = ({ children, onClick, type }: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className='transition-colors bg-cyan-500 rounded-md p-2 text-white border-2 border-cyan-500 hover:bg-white hover:text-cyan-500'>
    {children}
  </button>
);
