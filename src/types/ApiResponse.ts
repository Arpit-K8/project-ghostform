import { Message } from "@/model/User";

export interface ApiResponse{
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<Message>;
  // <Message> is used array of Message documents, which is a reference to the Message collection in MongoDB. Each element in the messages array will be an ObjectId that references a Message document.
}