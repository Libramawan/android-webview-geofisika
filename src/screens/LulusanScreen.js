import React from 'react'
import { ScrollView, StyleSheet, Image, View } from 'react-native'

import Header from '../components/Header'

export default function LulusanScreen() {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header imageUri={require('../assets/Header-lulusan.jpg')}
                    header="PROFIL PRODI"
                    title="Profil Lulusan"
                    text="Alumni Departemen Geofisika Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Padjadjaran telah melanjutkan studi dan/atau bekerja di instansi – instansi berikut"
                />

                <View style={{ backgroundColor: "#FFF" }}>
                    {instansi.map((item) => {
                        return (
                            <View key={item.key}>
                                <Image source={images.initials[item.initial]} style={styles.image} />
                            </View>
                        )
                    })}
                </View>

            </View>
        </ScrollView>
    )
}
const images = {
    initials: {
        1: require('../assets/profilLulusan/1.png'),
        2: require('../assets/profilLulusan/2.png'),
        3: require('../assets/profilLulusan/3.png'),
        4: require('../assets/profilLulusan/4.png'),
        5: require('../assets/profilLulusan/5.png'),
        6: require('../assets/profilLulusan/6.png'),
        7: require('../assets/profilLulusan/7.png'),
        8: require('../assets/profilLulusan/8.png'),
        9: require('../assets/profilLulusan/9.png'),
        10: require('../assets/profilLulusan/10.png'),
        11: require('../assets/profilLulusan/11.png'),
        12: require('../assets/profilLulusan/12.png'),
        13: require('../assets/profilLulusan/13.jpg'),
        14: require('../assets/profilLulusan/14.jpg'),
        15: require('../assets/profilLulusan/15.png'),
    }
}


let instansi = ([
    { initial: 1, key: "1" },
    { initial: 2, key: "2" },
    { initial: 3, key: "3" },
    { initial: 4, key: "4" },
    { initial: 5, key: "5" },
    { initial: 6, key: "6" },
    { initial: 7, key: "7" },
    { initial: 8, key: "8" },
    { initial: 9, key: "9" },
    { initial: 10, key: "10" },
    { initial: 11, key: "11" },
    { initial: 12, key: "12" },
    { initial: 13, key: "13" },
    { initial: 14, key: "14" },
    { initial: 15, key: "15" },

])

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        padding: 20,
        fontFamily: "Lato-Regular",
    },
    center: {
        alignItems: 'center'
    },
    jumlahLulusan: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: "Lato-Bold",
        fontSize: 16,
        textAlign: 'center',
    },
    image: {
        width: "80%", 
        height: 200, 
        resizeMode: "contain", 
        alignSelf: "center",
        marginBottom: 20,
    }
})
