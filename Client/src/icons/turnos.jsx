import * as React from "react"
export const Turnos = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        viewBox="0 0 100 100"
        {...props}
    >
        <path
            d="m1.7 8.5 4.5-1.9L54 1.5 60 50 17 61l-6-1z"
            style={{
                fill: "none",
                stroke: "#444",
                strokeWidth: 2,
            }}
        />
        <path
            d="m1.7 8.5 4.5-1.9L54 1.5 56 18 9.7 24l-4.4 1z"
            style={{
                fill: "#287293",
                stroke: "#888",
            }}
        />
        <path
            d="M6.2 7.5C7.1 12 8.5 20 9.7 23"
            style={{
                fill: "none",
                stroke: "#ddd",
            }}
        />
        <path
            d="m9.7 23-4.4 1L11 60l6 1s43-10 43-11l-4-33z"
            style={{
                fill: "#ccc",
                stroke: "#888",
            }}
        />
        <path
            d="M56 17s2 16 7 23c-2 4-9 10-13 10-4 1-31 10-31 10s-2-2-4-8L9.7 23z"
            style={{
                fill: "#eee",
                stroke: "#aaa",
            }}
        />
        <path
            d="M63 40c-1 0-2-2-2-2l-9 12s8-4 11-10"
            style={{
                fill: "#ddd",
                stroke: "#aaa",
            }}
        />
        <path
            d="m35 25 15-2 1 3s-6 9-3 21l-5 1s-2-8 3-21l-10 2zm-17 9c5-1 6-5 6-8h4l6 24-5 2-5-18s-1 3-4 4z"
            style={{
                fill: "#4444444",
            }}
        />
        <circle
            cx={65}
            cy={65}
            r={34}
            style={{
                fill: "none",
                stroke: "#eee",
                strokeWidth: 3,
            }}
        />
        <circle
            cx={65}
            cy={65}
            r={32}
            style={{
                fill: "#444",
                fillOpacity: 0.7,
            }}
        />
        <circle
            cx={65}
            cy={65}
            r={30}
            style={{
                strokeWidth: "5pt",
                stroke: "#222",
                fill: "none",
            }}
        />
        <g
            style={{
                fill: "#aaa",
            }}
        >
            <circle cx={65} cy={35} r={2.5} />
            <circle cx={95} cy={65} r={2.5} />
            <circle cx={65} cy={95} r={2.5} />
            <circle cx={35} cy={65} r={2.5} />
        </g>
        <path
            d="m65 65-5-23"
            style={{
                stroke: "#fff",
                strokeWidth: 4,
                fill: "none",
            }}
        />
        <path
            d="M65 65 44 87"
            style={{
                stroke: "#fff",
                strokeWidth: 3,
                fill: "none",
            }}
        />
        <circle
            cx={65}
            cy={65}
            r={3.5}
            style={{
                fill: "#fff",
            }}
        />
    </svg>
)
