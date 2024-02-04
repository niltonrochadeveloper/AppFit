import { useRef, useState } from "react";
import { Animated, Dimensions } from "react-native";
import { View, KeyboardAvoidingView, StatusBar, } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Heading, VStack, Button, RadioInput, RadioButton, Paginator } from "../../components/Core";
import HStack from "../../components/Core/HStack";
import Icon from "../../components/Core/Icon";
import { styles } from './styles'


import { Entypo, Feather, FontAwesome, MaterialCommunityIcons, Ionicons, } from '@expo/vector-icons'
import { useForm } from "react-hook-form";
import Cadastro from "../Cadastro";
import { FlatList } from "@gluestack-ui/themed";
import OnboardingItem from "./OnboardingItem.tsx";
import { OnboardingItemProps } from "./OnboardingItem.tsx/types";
import Profile from "../Cadastro/Profile";
import Goal from "../Cadastro/Goal";

const data = [
    {
        id: 1,
        component: <Cadastro />
    },
    {
        id: 2,
        component: <Profile />
    },
    {
        id: 3,
        component: <Goal />
    }
]

const Onboarding = () => {

    const scrollX = useRef(new Animated.Value(0)).current

    const slidesRef = useRef(null)

    const [ currentIndex, setCurrentIndex ] = useState<number>()

    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const [ username, setUsername ] = useState<any>('')
    const [ password, setPassword ] = useState<any>('')
    const [ terms, setTerms ] = useState<any>('')

    const { register } = useForm()

    const [ showPassword, setShowPassword ] = useState<any>('')

    const handleOptionPress = () => {
        setTerms(!terms);
    };

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current
    
    const isScrollEnabled = currentIndex !== null;

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <FlatList 
                data={data}
                renderItem={({item}: any) => <OnboardingItem item={item} />}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled={isScrollEnabled}
                bounces={false}
                keyExtractor={(item: any) => item.id}
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false,})}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
                />

                <Paginator data={data} scrollX={scrollX} />
        </SafeAreaView>
    )
}


export default Onboarding;