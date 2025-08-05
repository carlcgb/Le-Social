# Social Bar & Cie

## Overview

Social Bar & Cie is a burlesque-themed event venue website that offers three distinct experiences: intimate spectacles, private events, and corporate functions. The application is built as a full-stack web application with a React frontend and Express backend, featuring a reservation system for booking events at the venue.

The site showcases the venue's unique burlesque atmosphere through elegant design, smooth animations, and comprehensive information about their services. Users can browse different event types, view a photo gallery, read testimonials, and submit reservation requests through an integrated contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the user interface
- **Vite** as the build tool and development server with hot module replacement
- **Tailwind CSS** with custom theming for styling, featuring a burlesque color palette (burgundy, gold, cream)
- **Framer Motion** for smooth animations and page transitions
- **Wouter** for client-side routing
- **shadcn/ui** component library with Radix UI primitives for accessible UI components
- **React Hook Form** with Zod validation for form handling
- **TanStack Query** for server state management and API requests

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design with JSON request/response handling
- **In-memory storage** implementation with interface abstraction for future database migration
- **Zod schemas** for request validation and type safety
- **Custom middleware** for request logging and error handling
- **CORS and security** headers configured for production deployment

### Database Schema
The application uses Drizzle ORM with PostgreSQL schema definitions:
- **Users table**: Basic user authentication structure with username/password
- **Reservations table**: Comprehensive event booking system with fields for personal information, event type, date, guest count, and additional details
- **Event types**: Enum-based system supporting "spectacle", "prive", and "corporatif" categories

### Form Validation
- **Client-side validation** using React Hook Form with Zod resolvers
- **Server-side validation** with matching Zod schemas
- **French language** error messages and field labels
- **Required field validation** for essential booking information
- **Email format validation** and optional phone number handling

### State Management
- **TanStack Query** for server state, caching, and optimistic updates
- **React Context** for global UI state (mobile menu, toast notifications)
- **Local component state** for form handling and UI interactions
- **Custom hooks** for reusable logic (mobile detection, toast management)

### Styling System
- **CSS Custom Properties** for consistent theming
- **Responsive design** with mobile-first approach
- **Custom font integration** (Playfair Display for headings, Inter for body text)
- **Animation system** using Framer Motion for smooth transitions
- **Component variants** using class-variance-authority for consistent styling

## External Dependencies

### UI and Styling
- **@radix-ui/react-*** components for accessible UI primitives
- **tailwindcss** for utility-first CSS framework
- **framer-motion** for animation and transitions
- **class-variance-authority** for component variant management
- **clsx** and **tailwind-merge** for conditional CSS classes

### Forms and Validation
- **react-hook-form** for form state management
- **@hookform/resolvers** for Zod integration
- **zod** for schema validation and TypeScript inference

### Data Fetching
- **@tanstack/react-query** for server state management
- **axios** or native fetch for HTTP requests

### Database and ORM
- **drizzle-orm** for database operations and migrations
- **drizzle-zod** for schema-to-Zod conversion
- **@neondatabase/serverless** for PostgreSQL connection
- **drizzle-kit** for database migrations and schema management

### Development Tools
- **vite** for build tooling and development server
- **typescript** for type safety
- **@replit/vite-plugin-runtime-error-modal** for development error handling
- **@replit/vite-plugin-cartographer** for Replit integration

### Utility Libraries
- **date-fns** for date manipulation and formatting
- **nanoid** for unique ID generation
- **wouter** for lightweight client-side routing
- **cmdk** for command palette functionality (if needed)

### Production Dependencies
- **express** web server framework
- **connect-pg-simple** for PostgreSQL session storage
- **esbuild** for server-side bundling
- **tsx** for TypeScript execution in development