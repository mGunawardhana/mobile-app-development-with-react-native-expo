import { View, Button } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  /**we can use inner view components in advanced user interfaces*/
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
      {/* the button component allows users to trigger actions*/}
      {/* the button component has platform-specific rendering for ios and android */}
      <Button title="Press" onPress={() => console.log("Button pressed!")} />
    </View>
  );
}
