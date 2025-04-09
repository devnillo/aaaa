import './input.css';
import '../../globals.css';
export default function Input({ type, name, placeholder, required }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className=""
        />
    )
}