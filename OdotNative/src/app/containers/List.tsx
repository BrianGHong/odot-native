import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { listStyles } from '../styles/ListStyles';


const TodoItem: React.FC<{
    id: string,
    content: string,
    done: boolean,
    dateTime: number,
  }> = (props: any) => {
  return (
    <View style={styles.todoItemContainer}>
      <BouncyCheckbox
        fillColor={styles.checkbox.color}
        iconStyle={{ borderColor: styles.checkbox.color }}
        onPress={(isChecked?: boolean) => {}}
      />
      <Text style={styles.todoItemText}>
        {props.content}
      </Text>
      {/* <Icon.Button
        name="Brightness"
        backgroundColor="#000"
        onPress={() => {}}
      /> */}
    </View>
  );
};

const List = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <TodoItem
            id="123123"
            content="This is an example task"
            done={true}
            dateTime={1626036212}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = listStyles;

export default List;
