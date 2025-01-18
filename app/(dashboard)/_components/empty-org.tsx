import { Button } from "@/components/ui/button";
import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog } from "@radix-ui/react-dialog";
import Image from "next/image";
export const EmptyOrg = () => {
    return (
       <div className="h-full flex flex-col items-center justify-center">
         <Image 
            src="/design-board-empty.svg" 
            alt="Empty Design Board"
            width={300}
            height={300}
        />
        <h2 className="text-2xl font-semibold mt-6">Welcome to Thinkly</h2>
        <p className="text-muted-foreground text-sm mt-2">Create a Organization to get started 😃 !!!</p>
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" className="mt-6">Create Organization </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization routing="hash"/>
            </DialogContent>
        </Dialog>
       </div>
    );
}