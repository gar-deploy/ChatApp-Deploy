import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);

  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {});
};

export default useGetMessages;
