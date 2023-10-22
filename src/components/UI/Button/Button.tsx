import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  type,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      className={`${styles.button} ${className ? className : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
