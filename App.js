import { View, Text, Image, ImageBackground, ScrollView } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  /**we can use inner view components in advanced user interfaces*/
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
      {/* if we want to scroll we can use scrollview component another you need
      unscrolled behaviour you can use normal view component  */}
      <ScrollView>
        {/* <Text>
        <Text style={{ color: "white" }}>Hello</Text>World
      </Text> */}

        {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}

        {/* network image */}
        {/* <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}

        {/* if we are using flex:1 we can set image into full background */}
        {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image text</Text>
      </ImageBackground> */}

        <Image source={logoImg} style={{ width: 300, height: 300 }} />

        <Text>
          Simple means something is easy and uncomplicated, without too many
          steps to follow. It can also mean having few parts or features, not
          complicated or involved.Simple means something is easy and
          uncomplicated, without too many steps to follow. It can also mean
          having few parts or features, not complicated or involved.Simple means
          something is easy and uncomplicated, without too many steps to follow.
          It can also mean having few parts or features, not complicated or
          involved.Simple means something is easy and uncomplicated, without too
          many steps to follow. It can also mean having few parts or features,
          not complicated or involved.
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
