
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '@/firebase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contactForm"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      await fetch("https://azhizen-academy-elegance-portal.onrender.com/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          FormMessage: formData.message,
        })
      })

      alert("Message sent successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => window.location.href = '/'}
              className="font-serif text-2xl font-bold bg-gradient-to-r from-dark-blue-600 to-light-blue-600 bg-clip-text text-transparent"
            >
              Azhizen Academy
            </button>
            <Button
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Ready to begin your journey with Azhizen Academy? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white/90 backdrop-blur-md border border-gray-200 luxury-shadow">
              <CardContent className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6 text-dark-blue-600">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 min-h-32"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <Card className="bg-white/90 backdrop-blur-md border border-gray-200 luxury-shadow">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-6 text-dark-blue-600">
                    Get in Touch
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center space-x-3">
                      <Mail className="text-light-blue-600" size={20} />
                      <span>academy@azhizen.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="text-light-blue-600 mt-1" size={20} />
                      <div className="flex flex-col">
                        <span>+91 7010682506</span>
                        <span>+91 9750603988</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-light-blue-600 mt-1" size={20} />
                      <span>R-NO:309, Mercury Block<br />KSRCE, Tiruchengode, Namakkal, Tamil Nadu</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="bg-white/90 backdrop-blur-md border border-gray-200 luxury-shadow">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 text-lg">Interactive Map Coming Soon</p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white/90 backdrop-blur-md border border-gray-200 luxury-shadow">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-6 text-dark-blue-600">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Facebook size={20} className="text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Instagram size={20} className="text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Linkedin size={20} className="text-white" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <Youtube size={20} className="text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
