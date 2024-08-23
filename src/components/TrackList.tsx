import { FlatList, FlatListProps, Text, View } from "react-native"
import library from "@/assets/data/library.json"
import { TrackListItem } from "./TracListItem"
import { utilsStyles } from '@/styles'
import { Track } from "react-native-track-player"


export type TracksListProps = Partial<FlatListProps<Track>> & {
    tracks: Track[]
}

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TrackList = ({ tracks, ...flatlistProps}: TracksListProps) => {
    return (
        <FlatList 
            data={tracks} 
            contentContainerStyle={{ paddingTop: 50, paddingBottom: 128}}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            renderItem={({ item: track }) => (
				<TrackListItem 
                    track={track}
                />
			)}
            {...flatlistProps}
         />
    )
}