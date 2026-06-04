import React, { useMemo, useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import AppButton from "../Components/common/AppButton";
import AppKeyboardAvoidingView from "../Components/common/AppKeyboardAvoidingView";
import { getChatStyles } from "../Styles/ChatStyles";
import { useTheme } from "../theme";
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
  const [messages, setMessages] = useState<Message[]>(generateDemoMessages());
  const [inputText, setInputText] = useState("");
  const { colors, spacing, typography, radius } = useTheme();
  const styles = useMemo(() => getChatStyles(colors, spacing, typography, radius), [colors, spacing, typography, radius]);
  const flatListRef = useRef<FlatList>(null);

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
          styles.messageWrapper,
          item.isSender && styles.senderWrapper,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            item.isSender && styles.senderText,
          ]}
        >
          {item.text}
        </Text>
        <Text
          style={[
            styles.timestamp,
            item.isSender && styles.senderTimestamp,
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
    <AppKeyboardAvoidingView style={styles.container} isTabScreen={true}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{en.components.chat.title}</Text>
      </View>

      <FlatList
        ref={flatListRef}
        style={{ flex: 1 }}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={en.components.chat.placeholder}
          placeholderTextColor={colors.text.placeholder}
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <AppButton
          title={en.components.chat.send}
          onPress={handleSend}
          disabled={!inputText.trim()}
        />
      </View>
    </AppKeyboardAvoidingView>
  );
};

export default ChatScreen;
