export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}