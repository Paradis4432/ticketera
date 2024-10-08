"use client"

import {SessionProvider} from "next-auth/react";
import React from "react";

interface providersProps{
    children: React.ReactNode

}

export const Providers = ({children}: providersProps) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};


export type RT<T extends (...args: any) => any> = Awaited<ReturnType<T>>;