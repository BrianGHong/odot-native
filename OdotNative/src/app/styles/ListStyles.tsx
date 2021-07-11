import {
  StyleSheet
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const listStyles = StyleSheet.create({
  root: {
    height: 1000
  },
  todoItemContainer: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    flexDirection: 'row'
  },
  todoItemText: {
    fontSize: 15,
    fontWeight: '400',
  },
  checkbox: {
    color: '#792ae8'
  },
  highlight: {
    fontWeight: '700',
  },
});