import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  items: string[];
  ctaText: string;
}

interface FaqItemProps {
  question: string;
  answer: string;
}
