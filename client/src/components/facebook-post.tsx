import { motion } from "framer-motion";
import { Facebook, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { FacebookPost } from "@shared/schema";

interface FacebookPostProps {
  post: FacebookPost;
  index: number;
}

export default function FacebookPostComponent({ post, index }: FacebookPostProps) {
  const postDate = new Date(post.created_time);
  const formattedDate = format(postDate, "d MMMM yyyy 'à' HH:mm", { locale: fr });
  
  const getPostImage = () => {
    if (post.full_picture) return post.full_picture;
    if (post.attachments?.data?.[0]?.media?.image?.src) {
      return post.attachments.data[0].media.image.src;
    }
    return null;
  };

  const getPostTitle = () => {
    if (post.attachments?.data?.[0]?.title) {
      return post.attachments.data[0].title;
    }
    return null;
  };

  const getPostDescription = () => {
    if (post.message) return post.message;
    if (post.story) return post.story;
    if (post.attachments?.data?.[0]?.description) {
      return post.attachments.data[0].description;
    }
    return "Post Facebook";
  };

  const postImage = getPostImage();
  const postTitle = getPostTitle();
  const postDescription = getPostDescription();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-burgundy-900/30 to-burgundy-800/20 backdrop-blur-sm border border-gold-500/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {postImage && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={postImage}
            alt={postTitle || "Post Facebook"}
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
              <h3 className="text-gold-500 font-semibold">Social Bar & Cie</h3>
              <p className="text-cream/70 text-sm">{formattedDate}</p>
            </div>
          </div>
        </div>

        {postTitle && (
          <h4 className="text-xl font-semibold text-cream mb-3">
            {postTitle}
          </h4>
        )}

        <p className="text-cream/80 mb-4 line-clamp-3">
          {postDescription}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {post.likes?.summary?.total_count && (
              <div className="flex items-center text-cream/70">
                <Heart className="w-4 h-4 mr-1" />
                <span className="text-sm">{post.likes.summary.total_count}</span>
              </div>
            )}
            {post.comments?.summary?.total_count && (
              <div className="flex items-center text-cream/70">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span className="text-sm">{post.comments.summary.total_count}</span>
              </div>
            )}
          </div>

          {post.permalink_url && (
            <a
              href={post.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors duration-200"
            >
              <span className="text-sm mr-1">Voir le post</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}