"use client"

import Image from "next/image"

import { useOrganizationList, useOrganization } from "@clerk/nextjs"

import { cn } from "@/lib/utils"

import { Hint } from "@/components/hint"

interface itemProps {
    id: string
    name: string
    iconUrl: string
}

export const Item = ({id, name, iconUrl}: itemProps) => {

    const {organization} = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;


    const onClick = () => {
        if(!setActive) return;
        if (setActive) {
            setActive({ organization: id });
        }
    }

    return (
        <div className="aspect-square relative">
            <Hint label={name} side="right" align="start" sideOffset={18}>
                <Image 
                    fill
                    alt={name}
                    src={iconUrl}
                    onClick={onClick}
                    className={cn("cursor-pointer rounder-md opacity-80 hover:opacity-100 transition", isActive && "opacity-100")}
                    />
            </Hint>
        </div>
    )

}