import useInView from "../../hooks/useInView";

export default function FadeIn({ children, delay = 0 }) {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s ease ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}