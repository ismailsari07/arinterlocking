export type ServiceItem = { title: string; description: string };
export type ServiceBlock = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  items: ServiceItem[];
};
