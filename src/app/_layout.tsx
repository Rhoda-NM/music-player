import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
//import { playbackService } from '@/constants/playbackService'
//import { colors } from '@/constants/tokens'
//import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState'
//import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'
//import { SplashScreen, Stack } from 'expo-router'
//import { useCallback } from 'react'
//import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
//import TrackPlayer from 'react-native-track-player'


const App = () => {
	/*const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})

	useLogTrackPlayerState()*/

	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style='auto' />
		</SafeAreaProvider>
	)

}
const RootNavigation = () => {
	return(
	<Stack>
		<Stack.Screen name='{tabs}' options={{ headerShown: false}} />
	</Stack>
	)
}
export default App