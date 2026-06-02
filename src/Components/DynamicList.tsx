import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import en from '../constants/en.json';
import { getDynamicListStyles } from '../Styles/MiscComponentsStyles';
import { useTheme } from '../theme';
import AppInput from './common/AppInput';
import AppButton from './common/AppButton';

const DynamicList = () => {
  const [tasks, setTasks] = useState<string[]>([]); 
  const [inputText, setInputText] = useState('');

  const { colors, spacing, typography, radius } = useTheme();
  const dynamicStyles = getDynamicListStyles(colors, spacing, typography, radius);

  const addTask = () => {
    if (inputText === '') {
      return; 
    }
    const newTasksList = [...tasks, inputText];
    setTasks(newTasksList);
    setInputText('');
  };

  const removeTask = (indexToRemove: number) => {
    const updatedTasksList = tasks.filter((task, index) => {
      return index !== indexToRemove;
    });
    setTasks(updatedTasksList);
  };

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.title}>{en.components.dynamicList.title}</Text>
      
      <View style={dynamicStyles.inputContainer}>
        <AppInput
          containerStyle={{ flex: 1, marginRight: spacing.md, marginBottom: 0 }}
          value={inputText}
          onChangeText={setInputText}
          placeholder={en.components.dynamicList.placeholder}
        />
        
        <AppButton 
          title={en.components.dynamicList.add}
          onPress={addTask}
        />
      </View>

      <ScrollView>
        {
          tasks.length === 0 ? (
            <Text style={dynamicStyles.emptyText}>{en.components.dynamicList.empty}</Text>
          ) : (
            tasks.map((task, index) => (
              <View key={index} style={dynamicStyles.taskRow}>
                <Text style={dynamicStyles.taskText}>{task}</Text>
                
                <AppButton 
                  title={en.components.dynamicList.remove}
                  variant="danger"
                  size="sm"
                  onPress={() => removeTask(index)}
                />
              </View>
            ))
          )
        }
      </ScrollView>
    </View>
  );
};

export default DynamicList;
