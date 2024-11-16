import React from "react";
import { useEffect, useRef } from "react";

export default function Canvas({ height = 500, width = 500 }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const frameRef = useRef<number>(0);

    useEffect(() => {
        function draw(context: CanvasRenderingContext2D) {
            if (context) {
                context.fillStyle = "red";
                context.fillRect(0, 0, height, width);

                frameRef.current = requestAnimationFrame(() => draw(context));
            }
        }
        if (canvasRef.current) {
            const context = canvasRef.current.getContext("2d");

            if (context) {
                context.canvas.height = height;
                context.canvas.width = width;

                frameRef.current = requestAnimationFrame(() => draw(context));
            }
        }
        return () => cancelAnimationFrame(frameRef.current);
    }, [height, width]);

    return <canvas ref={canvasRef} />;
}
