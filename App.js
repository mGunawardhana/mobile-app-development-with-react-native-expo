import { View, Text, Image } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  /**we can use inner view components in advanced user interfaces*/
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Text>
        <Text style={{ color: "white" }}>Hello</Text>World
      </Text> */}

      <Image source={logoImg} style={{ width: 300, height: 300 }} />

      {/* network image */}
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      />
    </View>
    /** i'll stoped in 9th video*/
  );
}
