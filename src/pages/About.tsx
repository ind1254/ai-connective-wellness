import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen bg-cream">
      <h1 className="text-4xl font-bold text-brown mb-8">About Adiuvo</h1>
      <Card className="p-6 bg-white/50 backdrop-blur-sm">
        <div className="space-y-4 text-brown">
          <p>
            Adiuvo is an AI-powered wellness platform designed to help people connect, share, and grow together.
            Our mission is to make mental wellness support accessible to everyone through technology and human connection.
          </p>
          <p>
            Whether you're looking for AI-guided support or wanting to connect with others who understand your journey,
            Adiuvo is here to help.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default About;