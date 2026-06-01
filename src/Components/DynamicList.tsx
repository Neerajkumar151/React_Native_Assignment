import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import en from '../constants/en.json';
import { useTheme } from '../theme';
import { ThemeColors } from '../theme/colors';
import AppInput from './common/AppInput';
import AppButton from './common/AppButton';

const DynamicList = () => {
  const [tasks, setTasks] = useState<string[]>([]); 
  const [inputText, setInputText] = useState('');

  const { colors, spacing, typography, radius } = useTheme();
  const dynamicStyles = getStyles(colors, spacing, typography, radius);

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

const getStyles = (colors: ThemeColors, spacing: any, typography: any, radius: any) => StyleSheet.create({
  container: {
    backgroundColor: colors.background.surface,
    padding: spacing.lg,
    borderRadius: radius.lg,
    marginVertical: spacing.md,
    marginHorizontal: spacing.lg,
    flex: 1, 
  },
  title: {
    color: colors.text.primary,
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    marginBottom: spacing.lg,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    alignItems: 'center',
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background.elevated,
    padding: spacing.md,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
  },
  taskText: {
    color: colors.text.primary,
    fontSize: typography.size.md,
    flex: 1,
  },
  emptyText: {
    color: colors.text.muted,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: spacing.xl,
  }
});

export default DynamicList;
