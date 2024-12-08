"use client";

import { ClerkProvider, SignedIn, useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import {
    AuthLoading,
    ConvexReactClient
} from "convex/react"
import SignInAuthComponent from "@/components/auth/signin";
import Loading from "@/components/auth/loading";

interface ConvexClientProviderProps {
    children: React.ReactNode;
};

const convex_url = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convex_url);

export const ConvexClientProvider= ({ children, }: ConvexClientProviderProps) => {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <AuthLoading>
                    <Loading/>
                </AuthLoading>
                <SignedIn>
                    {children}
                </SignedIn>
                <SignInAuthComponent/>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}



