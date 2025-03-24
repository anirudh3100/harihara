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
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#333]">
        <Navbar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;