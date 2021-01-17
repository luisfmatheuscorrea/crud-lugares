import { InputHTMLAttributes } from 'react';
import { Label } from '../../styles';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    children?: any;
}

const Input: React.FC<InputProps> = ({ label, name, children, ...rest}) => {
    return (
        <div className="input">
            <Label htmlFor={name}>{label}</Label>
            {children}
        </div>
    );
}

export default Input;