export default function User({ className = "size-5", color = "currentColor" }) {
    return (
        <svg role="img" viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.5 21a.5.5 0 0 0 1 0h-1Zm-16 0a.5.5 0 0 0 1 0h-1ZM8 14.5h8v-1H8v1ZM19.5 18v3h1v-3h-1Zm-15 3v-3h-1v3h1ZM16 14.5a3.5 3.5 0 0 1 3.5 3.5h1a4.5 4.5 0 0 0-4.5-4.5v1Zm-8-1A4.5 4.5 0 0 0 3.5 18h1A3.5 3.5 0 0 1 8 14.5v-1ZM15.5 7a3.5 3.5 0 0 1-3.5 3.5v1A4.5 4.5 0 0 0 16.5 7h-1ZM12 10.5A3.5 3.5 0 0 1 8.5 7h-1a4.5 4.5 0 0 0 4.5 4.5v-1ZM8.5 7A3.5 3.5 0 0 1 12 3.5v-1A4.5 4.5 0 0 0 7.5 7h1ZM12 3.5A3.5 3.5 0 0 1 15.5 7h1A4.5 4.5 0 0 0 12 2.5v1Z"
                stroke={color} strokeWidth="0.2" fill={color}
            />
        </svg>
    );
}
