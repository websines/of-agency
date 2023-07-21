import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type NavProps = {
  email: string | undefined;
};

export function UserNav({ email }: NavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-12 w-12 rounded-full bg-gray-100"
        >
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://public.onlyfans.com/files/k/ko/kon/konubetjup5ushmbht6aolz8v16rxix01674651010/287357099/avatar.jpg"
              alt="@shadcn"
            />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-white rounded"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Tamasaiya</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer rounded-xl hover:scale-95 transition duration-200 ease-in-out">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer rounded-xl hover:scale-95 transition duration-200 ease-in-out">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer rounded-xl hover:scale-95 transition duration-200 ease-in-out">
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup> */}
        <DropdownMenuSeparator className="bg-gray-300 bg-opacity-30" />
        <DropdownMenuItem>
          <form action="/auth/signout" method="post">
            <Button
              variant="link"
              type="submit"
              className="hover:no-underline p-2 rounded w-full hover:bg-gray-300 hover:bg-opacity-25"
            >
              Log Out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
