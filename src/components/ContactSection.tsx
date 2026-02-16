
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Star } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "@/firebase"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "GetInTouch"), {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      await fetch("http://localhost:5000/api/get-in-touch", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile:formData.mobile,
          FormMessage: formData.message,
        })
      })
      
      alert("Message sent successfully!");

      // Clear form
      setFormData({
        name: "",
        email: "",
        mobile: "",
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
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-dark-blue-600 leading-[1.2] overflow-visible">
            Let's Start Your Journey
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career? Get in touch with us and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information - Enhanced */}
          <div className="scroll-reveal space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-3xl blur-xl opacity-20"></div>
              <Card className="relative bg-white/90 backdrop-blur-sm border-0 luxury-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-blue-600">Get in Touch</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-blue-600 mb-1">Call Us</h4>
                        <div className="text-gray-700 space-y-1">
                          <div>+91 7010682506</div>
                          <div>+91 9750603988</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-blue-600 mb-1">Email Us</h4>
                        <div className="text-gray-700">academy@azhizen.com</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-blue-600 mb-1">Visit Us</h4>
                        <div className="text-gray-700">
                          R-NO:309, Mercury Block<br />
                          KSRCE, Tiruchengode, Namakkal, Tamil Nadu
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-dark-blue-600 to-light-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-blue-600 mb-1">Office Hours</h4>
                        <div className="text-gray-700">
                          Mon - Fri: 9:00 AM - 6:00 PM<br />
                          Sat: 10:00 AM - 4:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            {/* <Card className="bg-gradient-to-r from-dark-blue-600 to-light-blue-600 border-0 luxury-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center text-white">
                  <div>
                    <div className="text-2xl font-bold mb-1">24h</div>
                    <div className="text-sm opacity-90">Quick Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1 flex items-center justify-center">
                      4.9 <Star className="w-4 h-4 ml-1 fill-current" />
                    </div>
                    <div className="text-sm opacity-90">Student Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">1000+</div>
                    <div className="text-sm opacity-90">Success Stories</div>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Contact Form - Enhanced */}
          <div className="scroll-reveal">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-light-blue-600 to-dark-blue-600 rounded-3xl blur-xl opacity-20"></div>
              <Card className="relative bg-white border-0 luxury-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-dark-blue-600 mb-2">Send us a Message</h3>
                    <p className="text-gray-600">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-gray-50 border-gray-200 focus:border-light-blue-600 focus:ring-2 focus:ring-light-blue-600/20 text-gray-900 placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          name="mobile"
                          type="tel"
                          placeholder="Mobile Number"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          className="bg-gray-50 border-gray-200 focus:border-light-blue-600 focus:ring-2 focus:ring-light-blue-600/20 text-gray-900 placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-50 border-gray-200 focus:border-light-blue-600 focus:ring-2 focus:ring-light-blue-600/20 text-gray-900 placeholder:text-gray-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your goals and how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-gray-50 border-gray-200 focus:border-light-blue-600 focus:ring-2 focus:ring-light-blue-600/20 text-gray-900 placeholder:text-gray-500 min-h-32 rounded-xl transition-all duration-300 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-dark-blue-600 to-light-blue-600 hover:from-dark-blue-700 hover:to-light-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                    <p className="text-sm text-gray-600 text-center">
                      <span className="font-semibold text-green-600">✓ Free Consultation</span> • We'll help you choose the right course for your career goals
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* <Contact /> */}
    </section>
  );
};

export default ContactSection;
