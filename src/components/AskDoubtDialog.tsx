import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AskDoubtDialog = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!title || !subject || !description) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Question posted!",
      description: "Your doubt has been posted to the forum",
    });
    
    setTitle("");
    setSubject("");
    setDescription("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="neon-glow">
          <MessageSquare className="w-4 h-4 mr-2" />
          Ask Question
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-card border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl">Ask Your Doubt</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Question Title</label>
            <Input
              placeholder="Brief description of your doubt..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="glass-card"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Subject</label>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger className="glass-card">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Detailed Description</label>
            <Textarea
              placeholder="Explain your doubt in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[150px] glass-card"
            />
          </div>
          <Button onClick={handleSubmit} className="w-full neon-glow">
            Post Question
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AskDoubtDialog;
