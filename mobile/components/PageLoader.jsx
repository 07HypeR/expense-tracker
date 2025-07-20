import { View, ActivityIndicator } from "react-native";
import { styles } from "../assets/styles/home.styles";
import LottieView from "lottie-react-native";

export default function PageLoader() {
  return (
    <View style={styles.loadingContainer}>
      <LottieView
        source={require("../constants/Loader.json")}
        style={{ width: 200, height: 200 }}
        autoPlay
        loop={false}
      />
    </View>
  );
}
