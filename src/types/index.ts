export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subscribeToUpdates: boolean;
  location?: {
    latitude: number;
    longitude: number;
  };
  notificationEnabled: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  imageUrl?: string;
  bio?: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  stats: string;
}

export interface EducationStage {
  id: number;
  title: string;
  year?: string;
  description: string;
}
