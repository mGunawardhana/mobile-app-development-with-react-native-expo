import { View, Button, Image, Text, Pressable } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  /**we can use inner view components in advanced user interfaces*/
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
      {/* the button component allows users to trigger actions*/}
      {/* the button component has platform-specific rendering for ios and android */}
      <Button
        title="Press"
        onPress={() => console.log("Button pressed!")}
        color="midnightblue"
      />
      <Pressable onLongPress={() => console.log("image pressed!")}>
        <Image source={logoImg} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Pressable onPress={() => console.log("text pressed!")}>
        <Text>
          Learn to read, write, and speak English sayings, slang, new words,
          more. US and British. A fun, conversational program to write, read,
          and speak better conversational English. You don't sound odd to us.
          Hear it at no charge. Get the podcast app. Coast-to-coast US radio.
          Learn to read, write, and speak English sayings, slang, new words,
          more. US and British. A fun, conversational program to write, read,
          and speak better conversational English. You don't sound odd to us.
          Hear it at no charge. Get the podcast app. Coast-to-coast US radio.
          Learn to read, write, and speak English sayings, slang, new words,
          more. US and British. A fun, conversational program to write, read,
          and speak better conversational English. You don't sound odd to us.
          Hear it at no charge. Get the podcast app. Coast-to-coast US radio.
          Learn to read, write, and speak English sayings, slang, new words,
          more. US and British. A fun, conversational program to write, read,
          and speak better conversational English. You don't sound odd to us.
          Hear it at no charge. Get the podcast app. Coast-to-coast US radio.
        </Text>
      </Pressable>
    </View>
  );
}
