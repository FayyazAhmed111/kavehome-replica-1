export default function Heart({ className = "size-5", color = "currentColor" }) {
    return (
        <svg role="img" viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.498 12.053 12.125 21l8.627-8.947a5.405 5.405 0 0 0 1.498-3.75C22.25 5.374 19.96 3 17.136 3a5.023 5.023 0 0 0-3.616 1.553L12.125 6 10.73 4.553A5.023 5.023 0 0 0 7.114 3C4.29 3 2 5.374 2 8.303c0 1.407.539 2.756 1.498 3.75Z"
                stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"
            />
        </svg>
    );
}
