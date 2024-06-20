import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Settings</h1>
      <form className="space-y-4">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter your username" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" />
        </div>
        <Button type="submit">Save Settings</Button>
      </form>
    </div>
  );
};

export default Settings;