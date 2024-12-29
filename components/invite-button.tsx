import { PlusSquare} from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
 
import { Dialog , DialogContent , DialogTrigger} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";


export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="flex items-center gap-x-2">
                    <PlusSquare className="h-4 w-4 mr-2"/>
                    Invite
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
                <OrganizationProfile routing="hash"/>
            </DialogContent>
        </Dialog>
    );
}