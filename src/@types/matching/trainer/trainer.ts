export interface ITrainer {
  id: number;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  address: string;
  training: ITrainings;
}

interface ITrainings {
  id: number;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
  reviews: number;
  images: string[];
}
