import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { ChevronLeft, ThumbsUp, MessageCircle } from "lucide-react";

const sampleReplies = [
  {
    id: 1,
    author: "Teacher Kumar",
    role: "Teacher",
    content: "The quadratic formula is: x = (-b ± √(b²-4ac)) / 2a. First, identify a, b, and c from your equation.",
    likes: 15,
    time: "2 hours ago"
  },
  {
    id: 2,
    author: "Student Priya",
    role: "Student",
    content: "Thanks! I found it helpful to remember it as 'negative b, plus or minus square root...'",
    likes: 8,
    time: "1 hour ago"
  }
];

const DoubtDetail = () => {
  const { doubtId } = useParams();
  const navigate = useNavigate();
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState(sampleReplies);

  const handleSubmitReply = () => {
    if (replyText.trim()) {
      const newReply = {
        id: replies.length + 1,
        author: "You",
        role: "Student",
        content: replyText,
        likes: 0,
        time: "Just now"
      };
      setReplies([...replies, newReply]);
      setReplyText("");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Button
          variant="ghost"
          onClick={() => navigate('/forum')}
          className="mb-6 animate-fade-in"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Forum
        </Button>

        <Card className="glass-card p-8 mb-6 animate-scale-in">
          <div className="flex items-start gap-4 mb-6">
            <Avatar className="w-12 h-12 bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold">SA</span>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">Student A</h3>
                <span className="text-sm text-muted-foreground">• 2 hours ago</span>
              </div>
              <h1 className="text-2xl font-bold mb-4">How to solve quadratic equations using the formula?</h1>
              <p className="text-muted-foreground mb-4">
                I'm having trouble understanding when to use the quadratic formula and how to apply it step by step. 
                Can someone explain with an example?
              </p>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>12 likes</span>
                </button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="w-4 h-4" />
                  <span>{replies.length} replies</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-4 mb-6">
          {replies.map((reply, index) => (
            <Card 
              key={reply.id} 
              className="glass-card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">
                    {reply.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">{reply.author}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {reply.role}
                    </span>
                    <span className="text-sm text-muted-foreground">• {reply.time}</span>
                  </div>
                  <p className="text-muted-foreground mb-3">{reply.content}</p>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ThumbsUp className="w-3 h-3" />
                    <span>{reply.likes} likes</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-6">
          <h3 className="font-semibold mb-4">Add Your Reply</h3>
          <Textarea
            placeholder="Share your thoughts or answer..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="mb-4 min-h-[120px] glass-card"
          />
          <Button onClick={handleSubmitReply} className="neon-glow">
            Post Reply
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default DoubtDetail;
