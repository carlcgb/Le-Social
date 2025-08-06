import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertReservationSchema, type InsertReservation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertReservation>({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: undefined,
      eventDate: "",
      guestCount: "",
      details: ""
    }
  });

  const reservationMutation = useMutation({
    mutationFn: async (data: InsertReservation) => {
      const response = await apiRequest("POST", "/api/reservations", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demande envoyée!",
        description: "Nous vous contacterons bientôt pour confirmer votre réservation.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/reservations"] });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande.",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: InsertReservation) => {
    reservationMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "150 Rue Saint-Jacques, Granby, QC J2G 3V3"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "(450) 991-3336"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@socialbar.ca"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/SocialBarEtCie", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/social_par_attelier_archibald", label: "Instagram" }
  ];

  return (
    <section id="contact" className="relative py-20 z-30">
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair mb-6" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Réservez votre expérience</h2>
          <p className="text-xl" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Contactez-nous pour créer votre événement sur mesure</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-burgundy-900/30 backdrop-blur-md border border-gold-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-playfair mb-6" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Informations de contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <info.icon className="w-6 h-6 text-gold-500 mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{info.title}</h4>
                      <p className="whitespace-pre-line" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gold-500/20">
                <h4 className="text-lg font-playfair mb-4" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Suivez-nous</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-burgundy-500 rounded-full flex items-center justify-center hover:bg-burgundy-600 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-cream" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-burgundy-900/30 backdrop-blur-md border border-gold-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-playfair mb-6" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Demande de réservation</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Prénom *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-burgundy-900/20 border border-gold-500/30 rounded-lg focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 placeholder:text-white/50"
                              style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Nom *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-burgundy-900/20 border border-gold-500/30 rounded-lg focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 placeholder:text-white/50"
                              style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              className="bg-burgundy-900/20 border border-gold-500/30 rounded-lg focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 placeholder:text-white/50"
                              style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Téléphone</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="tel"
                              className="bg-burgundy-900/20 border border-gold-500/30 rounded-lg focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 placeholder:text-white/50"
                              style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Type d'événement *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="bg-burgundy-900/30 border-2 border-gold-500/50 rounded-lg focus:border-gold-400 focus:ring-2 focus:ring-gold-500/30 hover:bg-burgundy-900/40 transition-all duration-200 min-h-[44px]"
                              style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            >
                              <SelectValue 
                                placeholder="Sélectionnez un type" 
                                className="text-white/80"
                                style={{color: '#ffffff', opacity: 0.8}} 
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black/90 border-2 border-gold-500/50 rounded-lg shadow-2xl backdrop-blur-sm">
                            <SelectItem 
                              value="spectacle" 
                              className="text-white hover:bg-burgundy-700/60 focus:bg-burgundy-700/60 cursor-pointer px-4 py-3"
                              style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            >
                              Spectacle
                            </SelectItem>
                            <SelectItem 
                              value="prive" 
                              className="text-white hover:bg-burgundy-700/60 focus:bg-burgundy-700/60 cursor-pointer px-4 py-3"
                              style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            >
                              Événement Privé
                            </SelectItem>
                            <SelectItem 
                              value="corporatif" 
                              className="text-white hover:bg-burgundy-700/60 focus:bg-burgundy-700/60 cursor-pointer px-4 py-3"
                              style={{color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            >
                              Événement Corporatif
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Date souhaitée *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="date"
                              className="bg-burgundy-900/20 border border-gold-500/30 rounded-lg focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                              style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="guestCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Nombre d'invités</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="number"
                              placeholder="Ex: 30"
                              className="bg-burgundy-900/20 border border-gold-500/30 rounded-lg focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 placeholder:text-white/50"
                              style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium" style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Détails de votre événement</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            placeholder="Décrivez votre vision de l'événement..."
                            className="bg-burgundy-900/20 border border-gold-500/30 rounded-lg focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 resize-none placeholder:text-white/50"
                            style={{color: '#ffffff', opacity: 1, textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={reservationMutation.isPending}
                      className="w-full bg-burgundy-500 py-4 rounded-full font-medium hover:bg-burgundy-600 transition-all duration-300"
                      style={{color: '#ffffff', opacity: 1, textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {reservationMutation.isPending ? "Envoi en cours..." : "Envoyer ma demande"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
