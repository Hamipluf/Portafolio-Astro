export interface Project {
    id: number;
    title: string;
    finished: boolean;
    subtitle: string;
    description: string;
    demo_url: string | null;
    github: string;
    slug: string;
    tools: string[] | [];
    image: string | null;
  }
  