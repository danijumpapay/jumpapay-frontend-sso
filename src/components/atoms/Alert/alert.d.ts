interface AlertProps extends ChildrenProps {
    variant: "warning" | "danger" | "success";
    children: React.ReactNode
}