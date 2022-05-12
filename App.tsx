import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

// components
import { Widget } from './src/components/Widget';

// styles
import { theme } from './src/theme';

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View
            style={styles.container}
        >
            <StatusBar
                style='light'
                backgroundColor='transparent'
                translucent
            />

            <Widget />
        </View>
    );
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    }
})