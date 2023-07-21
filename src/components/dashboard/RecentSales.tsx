import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9 bg-gray-200">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>GD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">geodh dyxhe</p>
        </div>
        <div className="ml-auto font-medium">+$11</div>
      </div>
    </div>
  );
}
