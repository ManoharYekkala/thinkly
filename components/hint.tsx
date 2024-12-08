import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"


export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
}


export const Hint = ({label, children, side = "top", align = "center", sideOffset = 0, alignOffset = 0}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <div className="inline-block">
                        {children}
                    </div>
                </TooltipTrigger>
                <TooltipContent className="text-black bg-white border-white" 
                    side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
                    <p className="font-semibold capitalize">
                        {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}