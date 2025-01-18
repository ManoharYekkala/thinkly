import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/empty-boards.svg" height={150} width={150} alt="Empty Favourites" />
      <h2 className="text-2xl font-semibold mt-6">No Boards found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try Creating a board for your organization.
      </p>
      <div className="mt-6">
        <Button size="lg">Create Board</Button>
      </div>
    </div>
  );
};
