import { useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import OngoingProjects from "./pages/ongoing-projects";
import CompletedProjects from "./pages/completed-projects";
import Project from "./pages/project";
import News from "./pages/news";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/ongoing-projects" component={OngoingProjects} />
      <Route path="/completed-projects" component={CompletedProjects} />
      <Route path="/project/:id" component={Project} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    // Force chat reset by clearing session storage on reload
    sessionStorage.clear();

    // Remove old chatbot if it exists
    const oldChatbot = document.querySelector("df-messenger");
    if (oldChatbot) {
      oldChatbot.remove();
    }

    // Add Dialogflow script
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script.async = true;
    script.onload = () => setShowChatbot(true); // Load chatbot only after script is ready
    document.body.appendChild(script);

    // Add Dialogflow styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css";
    document.head.appendChild(link);

    // Add custom styles
    const style = document.createElement("style");
    style.textContent = `
      df-messenger {
        z-index: 999;
        position: fixed;
        --df-messenger-font-color: #1c2841;
        --df-messenger-font-family: Google Sans;
        --df-messenger-chat-background: #fef5db;
        --df-messenger-message-user-background: #00827f;
        --df-messenger-message-bot-background: #fff;
        bottom: 16px;
        right: 16px;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function: Remove script, link, and chatbot on unmount
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (link.parentNode) link.parentNode.removeChild(link);
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-[#fef5db] text-[#1c2841]">
        <Navbar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>

      {/* Show chatbot only when script has loaded */}
      {showChatbot && (
        <df-messenger
          project-id="harihara-chatbot"
          agent-id="01635a37-11bc-477d-b68a-db0ad94a782e"
          language-code="en"
          max-query-length="-1"
        >
          <df-messenger-chat-bubble chat-title="Harihara"></df-messenger-chat-bubble>
        </df-messenger>
      )}

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
