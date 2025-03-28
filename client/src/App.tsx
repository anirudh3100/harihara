import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import News from "./pages/news";
import CompletedProjects from "./pages/completed-projects";
import SriSaiViradhya from "./pages/SriSaiViradhya";
import SriSaiKakatiya from "./pages/SriSaiKakatiya";
import VasantVillas from "./pages/VasantVillas";
import SriSaiYatika from "./pages/SriSaiYatika";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-[#fef5db] text-[#1c2841]">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/news" component={News} />
            <Route path="/completed-projects" component={CompletedProjects} />
            <Route path="/sri-sai-viradhya" component={SriSaiViradhya} />
            <Route path="/sri-sai-kakatiya" component={SriSaiKakatiya} />
            <Route path="/vasant-villas" component={VasantVillas} />
            <Route path="/sri-sai-yatika" component={SriSaiYatika} />
          </Switch>
        </main>
        <Footer />
        <ChatBox />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
