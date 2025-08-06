import { motion } from "framer-motion";
import { Facebook, Calendar, Users, MapPin, Clock } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { FacebookEvent } from "@shared/schema";

interface FacebookEventProps {
  event: FacebookEvent;
  index: number;
}

export default function FacebookEventComponent({ event, index }: FacebookEventProps) {
  const startDate = new Date(event.start_time);
  const endDate = event.end_time ? new Date(event.end_time) : null;
  
  const formattedStartDate = format(startDate, "d MMMM yyyy", { locale: fr });
  const formattedStartTime = format(startDate, "HH:mm", { locale: fr });
  const formattedEndTime = endDate ? format(endDate, "HH:mm", { locale: fr }) : null;

  const getEventImage = () => {
    return event.cover?.source || null;
  };

  const getLocationText = () => {
    if (event.place?.name) {
      if (event.place.location?.street && event.place.location?.city) {
        return `${event.place.name}, ${event.place.location.street}, ${event.place.location.city}`;
      }
      return event.place.name;
    }
    return "Social Bar & Cie";
  };

  const eventImage = getEventImage();
  const locationText = getLocationText();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-burgundy-900/30 to-burgundy-800/20 backdrop-blur-sm border border-gold-500/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {eventImage && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={eventImage}
            alt={event.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-3">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-gold-500 font-semibold">Événement Facebook</h3>
              <div className="flex items-center text-cream/70 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formattedStartDate}</span>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-xl font-semibold text-cream mb-3">
          {event.name}
        </h4>

        {event.description && (
          <p className="text-cream/80 mb-4 line-clamp-3">
            {event.description}
          </p>
        )}

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-cream/70">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">
              {formattedStartTime}
              {formattedEndTime && ` - ${formattedEndTime}`}
            </span>
          </div>

          <div className="flex items-center text-cream/70">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{locationText}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {event.attending_count !== undefined && (
              <div className="flex items-center text-cream/70">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm">{event.attending_count} participants</span>
              </div>
            )}
            {event.interested_count !== undefined && (
              <div className="flex items-center text-cream/70">
                <span className="text-sm">{event.interested_count} intéressés</span>
              </div>
            )}
          </div>

          <a
            href={`https://facebook.com/events/${event.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex items-center text-sm shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Facebook className="w-4 h-4 mr-2" />
            Voir l'événement
          </a>
        </div>
      </div>
    </motion.div>
  );
}