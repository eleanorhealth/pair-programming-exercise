// TODO - This type is incomplete
export type Member = {
  id: {
    value: string;
  };
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
