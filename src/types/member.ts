// TODO - This type is incomplete
export type Member = {
  id: string;
  name: {
    first: string;
    last: string;
  };
  phone: string;
  messages: Message[];
};

export type Message = {
  id: string;
  read: boolean;
};
