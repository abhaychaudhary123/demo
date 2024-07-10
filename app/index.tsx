import CustomText from '@/components/ThemedText';
import { PackagesData, RecommendedData } from '@/constants/Data';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    // App Assets
    const spa_image = require('@/assets/images/spa-image.png')

    // Styles
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#ddd"
        },
        image: {
            justifyContent: 'center',
            height: 250,
        },
        spaTitleContainer: {
            flex: 1,
            justifyContent: "space-between",
            paddingVertical: 10,
            borderWidth: 1,
        },
        actionBox:{ 
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10
        },
        faviorateBox:{
            alignItems: "center",
            justifyContent: "flex-end",
        },
        favouriteText: {
            color: "#fff",
            marginTop: 5
        },
        text: {
            color: "#fff",
        },

        // Options
        optionsBox: {
            paddingHorizontal: 10,
            paddingVertical: 12,
            backgroundColor: "#fff"
        },
        optionsInnerBox: {
            paddingHorizontal: 10,
            flexDirection: "row"
        },
        activeOption: {
            backgroundColor : "#f2eeff",
            padding: 10,
            marginRight: 8,
            borderRadius: 10
        },
        inActiveOption: {
            backgroundColor : "#fff",
            padding: 10,
            borderWidth: 1,
            marginRight: 8,
            borderColor: "#000",
            borderRadius: 10
        },
        recommendedHeaderBox: {
            paddingHorizontal: 23,
            paddingVertical: 20,
            backgroundColor: "#f2f1f6",

        },
        recommendedBox: {
            backgroundColor: "#f2f1f6",
            flexDirection: "row",
            paddingHorizontal: 23,
            marginVertical: 10
        },
        titlePriceBox: {
            flexDirection: "column",
            maxWidth: 140,
        },
        timeBox: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10
        },
        titleandSelectBox: {
            flexDirection: 'row',
            flex: 1,
            paddingHorizontal: 10,
            justifyContent: "space-between"
        },
        flatListStyles: {
            backgroundColor: "#f2f1f6",
        },
        selectBox: {
            flexDirection: "row",
            alignSelf: "flex-start",
            alignItems: 'center',
            justifyContent: "flex-end",
            borderWidth: 1,
            borderColor: "#615793",
            borderRadius: 2,
            paddingHorizontal: 10      
        },
        productImage: {
            width: 80,
            height: 80,
            borderRadius: 10,
        },

        // Checkout Box
        checkoutBox: {
            backgroundColor: "#f2f1f6",
        },
        checkoutInnerBox: {
            backgroundColor: "#643ffe",
            marginTop: 10,
            marginHorizontal: 20,
            borderRadius: 10,
            // height: 70,
            flex: 1,
            flexDirection: "row",
            justifyContent:"space-between",
            padding: 15
        },
        countBox: {
            borderWidth: 2,
            borderColor: "#fff",
            borderRadius: 5,
            width: 50,
            alignItems: "center",
            justifyContent: "center"
        },
        amountBox: {
            borderRadius: 5,
            flex: 1,
            marginLeft: 10,
            alignItems: "flex-start",
            justifyContent: "center"
        },
        nextBox: {
            borderRadius: 5,
            marginRight: 5,
            alignItems: "flex-end",
            justifyContent: "center"
        },
    })


    // Render Recommends
    const renderRecommended = ({ item, index } : {item: any, index: any}) => {
        
        return (
            <View style={styles.recommendedBox}>
                <Image 
                    source={item.source}
                    style={styles.productImage}
                />

                <View style={styles.titleandSelectBox}>
                    <View style={styles.titlePriceBox}>
                        <CustomText weight='bold'>{item.title}</CustomText>
                        <CustomText textColor="gray" mt={2}>${item.price}</CustomText>
                        <View style={styles.timeBox}>
                            <Ionicons name='timer-outline' size={14} color={'gray'} />
                            <CustomText size={14} textColor="gray" >{item.time} Mins</CustomText>
                        </View>
                    </View>

                    {/* Select Box */}
                    <View style={styles.selectBox}>
                        <CustomText textColor='#615793' >Select</CustomText>
                        <Ionicons name='add-outline' size={20} color={'#615793'} />
                    </View>
                </View>

            </View>
        )
    }

    // Render Packages 
    const renderPackages = ({ item, index } : {item: any, index: any}) => {
        
        return (
            <View style={styles.recommendedBox}>
                <Image 
                    source={item.source}
                    style={styles.productImage}
                />

                <View style={styles.titleandSelectBox}>
                    <View style={styles.titlePriceBox}>
                        <CustomText weight='bold'>{item.title}</CustomText>
                        <CustomText textColor="gray" mt={2}>${item.price}</CustomText>
                        <View style={styles.timeBox}>
                            <Ionicons name='timer-outline' size={14} color={'gray'} />
                            <CustomText size={14} textColor="gray" >{item.time} Mins</CustomText>
                        </View>
                    </View>

                    {/* Select Box */}
                    <View style={styles.selectBox}>
                        <CustomText textColor='#615793' >Select</CustomText>
                        <Ionicons name='add-outline' size={20} color={'#615793'} />
                    </View>
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                
                {/* Hero Section */}
                <ImageBackground source={spa_image} resizeMode="cover" style={styles.image}>
                    <View style={styles.spaTitleContainer}>
                        
                        {/* Action Buttons */}
                        <View style={styles.actionBox}>
                            <Ionicons name='arrow-back-outline' size={25} color={'#fff'} />
                            <Ionicons name='search-outline' size={25} color={'#fff'} />
                        </View>

                        {/* Spa Image Title and Favorite Button  */}
                        <View style={styles.actionBox}>
                            
                            <View>
                                <CustomText style={styles.text} size={13} >FOR MEN</CustomText>
                                <CustomText weight='bold' size={22} textColor='#fff'>Woodlands Hills SPA</CustomText> 
                                <CustomText size={13} textColor='#fff'>Keira throughway • 5.0 Kms • $$</CustomText>
                            </View>

                            <View style={styles.faviorateBox}>
                                <Ionicons name='heart-outline' size={25} color={'#fff'} />
                                <Text style={styles.favouriteText}>Favorite</Text>
                            </View>

                        </View>
                    </View>

                </ImageBackground>

                    
                {/* Options */}
                <View style={styles.optionsBox}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.activeOption}>
                            <Text>Recommended</Text>
                        </View>
                        <View style={styles.inActiveOption}>
                            <Text>Packages</Text>
                        </View>
                        <View style={styles.inActiveOption}>
                            <Text>Face Care</Text>
                        </View>
                        <View style={styles.inActiveOption}>
                            <Text>Lorem Ipsum</Text>
                        </View>
                        <View style={styles.inActiveOption}>
                            <Text>Lorem Ipsum</Text>
                        </View>
                    </ScrollView>
                </View>

                {/* Recommended */}
                <FlatList
                    style={styles.flatListStyles}
                    data={RecommendedData}
                    renderItem={renderRecommended}
                    ListHeaderComponent={() => (
                        <View style={styles.recommendedHeaderBox}>
                            <CustomText weight='bold' >Recommended ({RecommendedData.length})</CustomText>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                />

                {/* Packages */}
                <FlatList
                    style={styles.flatListStyles}
                    data={PackagesData}
                    renderItem={renderPackages}
                    ListHeaderComponent={() => (
                        <View style={styles.recommendedHeaderBox}>
                            <CustomText weight='bold' >Packages</CustomText>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                />

                {/* CheckoutBox */}
                <View style={styles.checkoutBox}>
                    <View style={styles.checkoutInnerBox}>
                        {/* Total Count */}
                        <View style={styles.countBox}>
                            <CustomText textColor='#fff' weight='bold'>3</CustomText>
                        </View>

                        {/* Amount */}
                        <View style={styles.amountBox}>
                            <CustomText textColor='#fff' size={24} weight='bold'>$449</CustomText>
                            <CustomText textColor='#fff' size={14}>plus taxes</CustomText>
                        </View>

                        {/* Next */}
                        <View style={styles.nextBox}>
                            <CustomText textColor='#fff' size={24} weight='bold'>Next</CustomText>
                        </View>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}