import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

interface FormData {
  username: string;
  email: string;
  password: string;
}

export function CredentialsModal() {
  const { session } = useSessionContext();
  const user = session?.user;
  const supabase = useSupabaseClient();
  const [saved, setSaved] = useState(false);
  const [isError, setError] = useState("");

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");

    const { data, error } = await supabase.from("user_creds").upsert([
      {
        id: user?.id,
        of_username: formData.username,
        of_email: formData.email,
        of_password: formData.password,
      },
    ]);

    if (error) {
      setError(error.message);
    } else {
      try {
        // Clear form after successful submission
        setFormData({ username: "", email: "", password: "" });
        setSaved(true);
      } catch (error) {
        setError("Failed to get cookies."); // Handle any errors from getCookies()
      }
    }
  };
  return (
    <Dialog
      onOpenChange={() => {
        setSaved(false);
        setError("");
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="default"
          className=" mx-4 hover:bg-black hover:text-white"
        >
          My Credentials
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] max-w-[400px] bg-white">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="my-2 font-semibold">
              Your Onlyfans Auth Details
            </DialogTitle>
            <DialogDescription className="flex flex-col space-y-2 justify-start items-center">
              <span className="text-sm font-medium">
                Add your Onlyfans Auth details to display your stats in our
                dashboard
              </span>
              {isError != "" ? (
                <span className="text-bold tracking-tight text-sm text-red-500">
                  {isError}
                </span>
              ) : (
                ""
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                type="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="onlyfans username"
                className="col-span-3 placeholder:opacity-50 font-medium"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="onlyfans email"
                className="col-span-3 placeholder:opacity-50 font-medium"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="onlyfans password"
                className="col-span-3 placeholder:opacity-50 font-medium"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-emerald-500 rounded">
              {saved ? "Saved Succesfully! Close this Tab" : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
