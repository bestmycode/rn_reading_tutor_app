import React from 'react';
import { SafeAreaView, StatusBar, View, Image, Text, SectionList, SectionListData, Dimensions, } from 'react-native';
import lightTheme from '../../styles/themes/light-theme';
import { ExampleScreen } from './screen';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import DailyBadge from '../../components/daily-badge';
import ExerciseCard from '../../components/exercise-card';
import colors from '../../../constants/colors';
import ImageSlot from '../../components/image-view'
import SmallButton from '../../components/small-button';
import { Button, Icon } from 'react-native-elements';
import WideButton from '../../components/wide-button';
import ClearButton from '../../components/clear-button';
import StaticProgressBar from '../../components/static-progress-bar';
import VolumeSlot from '../../components/volume-slot';
import MatchWord from '../../components/match-word';
import TopRoundView from '../../components/topRoundView';
import NavigationView from '../../components/NavigationView';
import NavigationViewWithTitle from '../../components/NavigationViewWithTitle';
import { WebView } from 'react-native-webview';
import Video from 'react-native-video';
import Images from '../../../constants/Images';

const screenWidth = Dimensions.get('window').width

export default function (screen: ExampleScreen) {


    return (
        <View
            style={styles.container}
        >
            <SafeAreaView>
                <StatusBar barStyle='dark-content' backgroundColor={lightTheme.homeHeaderTopColor} />
            </SafeAreaView>
            <NavigationViewWithTitle
                otherStyle={{ flexDirection: 'row', paddingTop: 16, alignItems: 'center' }}
                title="Example"
                onRightButtonPress={() => screen.showNextLessons()}
                rightButtonTitle="Next"

                onPress={() => screen.showPreviousLessons()}
            ></NavigationViewWithTitle>
            {/* <TopRoundView
                otherStyle={{
                    marginTop: 32,
                    height: 64,
                    width: 64,
                    borderRadius: 32,

                }}
                isVolume
            ></TopRoundView> */}
                <Video
                    source={Images.exampleVideo}
                    style={{ width: screenWidth - 30, height: 500, top: 20 }}
                    controls={true}
                    onBuffer={screen.videoBuffer}
                    paused={screen.state.isPaused}
                    ref={(ref) => {
                        this.player = ref
                    }} />
            
            {/* <Button
                containerStyle={{ marginTop: 20, height: 20, width: 50, position: 'absolute', bottom: 20, end: 20 }}
                onPress={() => screen.showNextLessons()}
            ></Button> */}
        </View >
    )
}