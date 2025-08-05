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
      content: "123 Rue Saint-Paul, Vieux-Montréal, QC H2Y 1H4"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "(514) 555-SOCIAL"
    },
    {
      icon: Mail,
      title: "Email",
      content: "reservation@socialbar.ca"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Mar-Sam: 17h-2h\nDim-Lun: Fermé"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/SocialBarEtCie", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-burgundy-900/30 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair text-cream mb-6">Réservez votre expérience</h2>
          <p className="text-xl text-cream/80">Contactez-nous pour créer votre événement sur mesure</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-b from-burgundy-800/30 to-black border border-gold-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-playfair text-cream mb-6">Informations de contact</h3>
              
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
                      <h4 className="text-cream font-medium mb-1">{info.title}</h4>
                      <p className="text-cream/80 whitespace-pre-line">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gold-500/20">
                <h4 className="text-lg font-playfair text-gold-500 mb-4">Suivez-nous</h4>
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
            <div className="bg-gradient-to-b from-burgundy-800/30 to-black border border-gold-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-playfair text-cream mb-6">Demande de réservation</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-cream font-medium">Prénom *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-black/50 border-gold-500/30 text-cream focus:border-gold-500" 
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
                          <FormLabel className="text-cream font-medium">Nom *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="bg-black/50 border-gold-500/30 text-cream focus:border-gold-500" 
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
                          <FormLabel className="text-cream font-medium">Email *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              className="bg-black/50 border-gold-500/30 text-cream focus:border-gold-500" 
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
                          <FormLabel className="text-cream font-medium">Téléphone</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="tel"
                              className="bg-black/50 border-gold-500/30 text-cream focus:border-gold-500" 
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
                        <FormLabel className="text-cream font-medium">Type d'événement *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-gold-500/30 text-cream focus:border-gold-500">
                              <SelectValue placeholder="Sélectionnez un type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="spectacle">Spectacle</SelectItem>
                            <SelectItem value="prive">Événement Privé</SelectItem>
                            <SelectItem value="corporatif">Événement Corporatif</SelectItem>
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
                          <FormLabel className="text-cream font-medium">Date souhaitée *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="date"
                              className="bg-black/50 border-gold-500/30 text-cream focus:border-gold-500" 
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
                          <FormLabel className="text-cream font-medium">Nombre d'invités</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="number"
                              placeholder="Ex: 30"
                              className="bg-black/50 border-gold-500/30 text-cream focus:border-gold-500" 
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
                        <FormLabel className="text-cream font-medium">Détails de votre événement</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            placeholder="Décrivez votre vision de l'événement..."
                            className="bg-black/50 border-gold-500/30 text-cream focus:border-gold-500 resize-none" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={reservationMutation.isPending}
                    className="w-full bg-burgundy-500 text-cream py-4 rounded-full hover:bg-burgundy-600 transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {reservationMutation.isPending ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
