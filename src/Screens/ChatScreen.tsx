import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { chatStyles } from "../Styles/ChatStyles";
import en from "../constants/en.json";

interface Message {
  id: string;
  text: string;
  timestamp: Date;
  isSender: boolean;
}

const generateDemoMessages = (): Message[] => {
  const texts = en.components.chat.demoMessages;
  const now = new Date();
  return texts.map((text, index) => ({
    id: `msg_${index}`,
    text,
    timestamp: new Date(now.getTime() - (texts.length - index) * 60000),
    isSender: index % 2 !== 0,
  }));
};

const ChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    setMessages(generateDemoMessages());
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      text: inputText.trim(),
      timestamp: new Date(),
      isSender: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");

    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
    Keyboard.dismiss();
  };

  const renderMessage = ({ item }: { item: Message }) => {
    return (
      <View
        style={[
          chatStyles.messageWrapper,
          item.isSender && chatStyles.senderWrapper,
        ]}
      >
        <Text
          style={[
            chatStyles.messageText,
            item.isSender && chatStyles.senderText,
          ]}
        >
          {item.text}
        </Text>
        <Text
          style={[
            chatStyles.timestamp,
            item.isSender && chatStyles.senderTimestamp,
          ]}
        >
          {item.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={[chatStyles.container, { paddingBottom: 0 }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={chatStyles.header}>
        <Text style={chatStyles.headerTitle}>{en.components.chat.title}</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={chatStyles.listContent}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />

      <View style={chatStyles.inputContainer}>
        <TextInput
          style={chatStyles.input}
          placeholder={en.components.chat.placeholder}
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <TouchableOpacity style={chatStyles.button} onPress={handleSend}>
          <Text style={chatStyles.buttonText}>{en.components.chat.send}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
