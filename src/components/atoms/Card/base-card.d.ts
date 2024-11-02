interface BaseCardProps extends ChildrenProps, HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}