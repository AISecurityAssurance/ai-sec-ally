import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Journey from "./pages/Journey";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import StpaSecStride from "./pages/StpaSecStride";
import AiDrivenStpaSecIncidentResponse from "./pages/AiDrivenStpaSecIncidentResponse";
import ResearchLibrary from "./pages/ResearchLibrary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/stpa-sec-stride" element={<StpaSecStride />} />
          <Route path="/insights/ai-driven-stpa-sec-incident-response" element={<AiDrivenStpaSecIncidentResponse />} />
          <Route path="/insights/research" element={<ResearchLibrary />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
