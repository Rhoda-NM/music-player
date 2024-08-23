import { TrackList } from "@/components/TrackList"
import { screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from "@/hooks/UseNavigationSearch"
import { defaultStyles } from "@/styles"
import { useMemo } from "react"
import { ScrollView, Text, View } from "react-native"
import library from "@/assets/data/library.json"
import { trackTitleFilter } from "@/helpers/filter"



const SongScreen = () => {
    const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})
    const filteredTracks = useMemo(() => {
        if(!search) return library

        return library.filter(trackTitleFilter(search))
    }, [search])

    return (
        <View style={defaultStyles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
            >
                <TrackList tracks={filteredTracks} scrollEnabled={false} />
            </ScrollView>
        </View>
    )
}
export default SongScreen