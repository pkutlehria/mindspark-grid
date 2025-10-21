import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload as UploadIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TeacherUploadDialogProps {
  title: string;
  icon: React.ReactNode;
  type: "notes" | "quiz" | "questions";
}

const TeacherUploadDialog = ({ title, icon, type }: TeacherUploadDialogProps) => {
  const [open, setOpen] = useState(false);
  const [contentTitle, setContentTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!contentTitle || !subject) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Upload successful!",
      description: `Your ${type} has been uploaded successfully`,
    });
    
    setContentTitle("");
    setSubject("");
    setDescription("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">{title}</Button>
      </DialogTrigger>
      <DialogContent className="glass-card border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            {icon}
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Title *</label>
            <Input
              placeholder={`Enter ${type} title...`}
              value={contentTitle}
              onChange={(e) => setContentTitle(e.target.value)}
              className="glass-card"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Subject *</label>
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
            <label className="text-sm font-medium mb-2 block">Description</label>
            <Textarea
              placeholder="Add details about this content..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] glass-card"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Upload File</label>
            <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer glass-card">
              <UploadIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground mt-1">PDF, DOC, PPT, or images</p>
            </div>
          </div>
          <Button onClick={handleSubmit} className="w-full neon-glow">
            Upload {type}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherUploadDialog;
