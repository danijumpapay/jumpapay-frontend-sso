interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "plain" | "primary" | "secondary";
    isLoading?: boolean;
    size?: "large" | "medium" | "none" | "small";
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined; 
    disabled?: boolean;
    full?: boolean;
}