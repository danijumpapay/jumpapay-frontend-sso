interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    type?: string;
    pattern?: string;
    className?: string | string[];
    value?: any;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
    id?: string;
    dataTestid?: string;
}