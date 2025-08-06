import { useQuery } from "@tanstack/react-query";
import type { FacebookFeed, FacebookPost, FacebookEvent } from "@shared/schema";

export const useFacebookFeed = () => {
  return useQuery<FacebookFeed>({
    queryKey: ['/api/facebook/feed'],
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useFacebookPosts = () => {
  return useQuery<FacebookPost[]>({
    queryKey: ['/api/facebook/posts'],
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useFacebookEvents = () => {
  return useQuery<FacebookEvent[]>({
    queryKey: ['/api/facebook/events'],
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};