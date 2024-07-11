// Imports
import React, { useEffect } from 'react'
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import CustomText from '@/components/ThemedText'
import { PackagesData, RecommendedData } from '@/constants/Data'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
    // App Assets
    const spa_image = require('@/assets/images/spa-image.png')

    // States
    const [selectedItems, setSelectedItems] = React.useState<any>([])
    const [totalAmount, setTotalAmount] = React.useState<number>(0)
    const [count, setCount] = React.useState<number>(0)

    // Update Count when selected item changes
    useEffect(() => {
        setCount(selectedItems.length)
        setTotalAmount(selectedItems.reduce((accum: any, item: { price: any }) => accum + (item.price || 0), 0))
    }, [selectedItems])

    // Handle Select
    const handleSelect = (item: any) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((currentItem: any) => currentItem !== item))
        } else {
            setSelectedItems([...selectedItems, item])
        }
    }

    // Styles
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#ddd",
            marginBottom: 20,
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
            borderColor: "gray",
            borderRadius: 10,
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
            maxWidth: 120,
            flex: 1,
        },
        timeBox: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10
        },
        titleandSelectBox: {
            flexDirection: 'row',
            flex: 1,
            paddingLeft: 10,
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
            paddingHorizontal: 12,
            paddingVertical: 5,
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
            marginLeft: 17,
            alignItems: "flex-start",
            justifyContent: "center"
        },
        nextBox: {
            borderRadius: 5,
            marginRight: 5,
            alignItems: "flex-end",
            justifyContent: "center"
        },
        selectedBox: {
            flexDirection: "row",
            justifyContent: 'flex-end',
        },
        removeBox: {
            backgroundColor: "#643ffe",
            paddingVertical: 8,
            paddingHorizontal: 6,
            borderRadius: 5,
            alignSelf: "flex-start",
            alignItems: "center",
            marginRight: 2,
        },
        activeSelectBox: {
            flexDirection: "row",
            alignSelf: "flex-start",
            alignItems: 'center',
            justifyContent: "flex-end",
            paddingHorizontal: 12 ,
            paddingVertical: 6,
            borderRadius: 4,
            backgroundColor: "#643ffe",
        },
        menu: {
            backgroundColor: "#fff",
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            borderColor: "#ddd",
            position: "absolute",
            right: 16,
            top: 12,
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 1
            },
            elevation: 5
        }
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
                        <CustomText weight='bold' lh={27}>{item.title}</CustomText>
                        <CustomText textColor="gray" mt={2}>${item.price}</CustomText>
                        <View style={styles.timeBox}>
                            <Ionicons name='timer-outline' size={16} color={'gray'} />
                            <CustomText size={14} textColor="gray" >{item.time} Mins</CustomText>
                        </View>
                    </View>

                    
                    {/* Select Box */}
                    {
                        selectedItems.includes(item) ?
                            <View style={styles.selectedBox}>
                                <Pressable onPress={() => handleSelect(item)}>
                                    <View style={styles.removeBox}>
                                        <Ionicons name='remove-outline' size={20} color={'#fff'} />
                                    </View>
                                </Pressable>
                                <View style={styles.activeSelectBox}>
                                    <CustomText textColor='#fff'>Selected</CustomText>
                                </View>
                            </View>
                        :
                        <Pressable onPress={() => handleSelect(item)}>
                            <View style={styles.selectBox}>
                                <CustomText textColor='#615793' >Select</CustomText>
                                <Ionicons name='add-outline' size={20} color={'#615793'} />
                            </View> 
                        </Pressable>
                    }
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
                        <CustomText weight='bold' lh={27}>{item.title}</CustomText>
                        <CustomText textColor="gray" mt={2}>${item.price}</CustomText>
                        <View style={styles.timeBox}>
                            <Ionicons name='timer-outline' size={16} color={'gray'} />
                            <CustomText size={14} textColor="gray" >{item.time} Mins</CustomText>
                        </View>
                    </View>

                    {/* Select Box */}
                    {
                        selectedItems.includes(item) ?
                            <View style={styles.selectedBox}>
                                <Pressable onPress={() => handleSelect(item)}>
                                    <View style={styles.removeBox}>
                                        <Ionicons name='remove-outline' size={20} color={'#fff'} />
                                    </View>
                                </Pressable>
                                <View style={styles.activeSelectBox}>
                                    <CustomText textColor='#fff' >Selected</CustomText>
                                </View>
                            </View>
                        :
                        <Pressable onPress={() => handleSelect(item)}>
                            <View style={styles.selectBox}>
                                <CustomText textColor='#615793' >Select</CustomText>
                                <Ionicons name='add-outline' size={20} color={'#615793'} />
                            </View> 
                        </Pressable>
                    }
                </View>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                
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
                                <CustomText style={styles.text} size={12} >FOR MEN</CustomText>
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
                            <CustomText size={14} textColor='#643ffe'>Recommended</CustomText>
                        </View>
                        <View style={styles.inActiveOption}>
                            <CustomText size={14} textColor='gray'>Packages</CustomText>
                        </View>
                        <View style={styles.inActiveOption}>
                            <CustomText size={14} textColor='gray'>Face Care</CustomText>
                        </View>
                        <View style={styles.inActiveOption}>
                            <CustomText size={14} textColor='gray'>Lorem Ipsum</CustomText>
                        </View>
                        <View style={styles.inActiveOption}>
                            <CustomText size={14} textColor='gray'>Lorem Ipsum</CustomText>
                        </View>
                    </ScrollView>
                    <View style={styles.menu}>
                        <Ionicons name={'menu'} size={30} />
                    </View>
                </View>

                {/* Recommended */}
                <FlatList
                    style={styles.flatListStyles}
                    data={RecommendedData}
                    renderItem={renderRecommended}
                    ListHeaderComponent={() => (
                        <View style={styles.recommendedHeaderBox}>
                            <CustomText weight='bold' size={23} >Recommended ({RecommendedData.length + PackagesData.length})</CustomText>
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
                            <CustomText weight='bold' size={23}>Packages</CustomText>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                />

                {/* CheckoutBox */}
                <View>
                    {
                        count != 0 && (
                            <View style={styles.checkoutBox}>
                                <View style={styles.checkoutInnerBox}>
                                    {/* Total Count */}
                                    <View style={styles.countBox}>
                                        <CustomText textColor='#fff' weight='bold'>{count}</CustomText>
                                    </View>

                                    {/* Amount */}
                                    <View style={styles.amountBox}>
                                        <CustomText textColor='#fff' size={24} weight='bold'>${totalAmount}</CustomText>
                                        <CustomText textColor='#fff' size={14}>plus taxes</CustomText>
                                    </View>

                                    {/* Next */}
                                    <View style={styles.nextBox}>
                                        <CustomText textColor='#fff' size={24} weight='bold'>Next</CustomText>
                                    </View>

                                </View>
                            </View>
                        )
                    }
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}