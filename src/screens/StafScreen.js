import React from 'react'
import { Text, View, Button, Image, StyleSheet, ScrollView } from 'react-native'

import Header from '../components/Header'
import Title from '../components/Title'

export function StafScreen({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={{ marginBottom: 10 }}>
                    {/* Header */}
                    <Header imageUri={require('../assets/Header-staf.png')}
                        header="PROFIL PRODI"
                        title="Sumber Daya Manusia"
                        text="Dosen pengampu di Prodi Geofisika memiliki kualifikasi minimal S2 (Master) dengan kompetensi dalam bidang Geofisika, Geologi dan Komputasi Geofisika disamping komptensi.
                        Lainnya sesuai dengan mata kuliah yang diampu. Jumlah Dosen Geofisika saat ini adalah 13 orang dengan kualifikasi S3 (Doktor) sejumlah 6 orang dan 7 orang S2 (Master) dengan 2 orang sedang studi lanjut S3 di dalam dan luar negeri"
                    />
                </View>

                <View style={styles.bgBlueLight}>
                    <Title title="Staf Prodi Geofisika Unpad" />

                    {dosen.map((item) => {
                        return (
                            <View key={item.key} style={styles.text}>
                                <Image source={images.initials[item.initial]} style={{ width: "100%", height: 300, resizeMode: "contain" }} />
                                <View style={{width: "80%", alignSelf: "center"}}>
                                <Button onPress={() => navigation.navigate('Details', item)} title={item.name} color= "#2B2D42"/>
                                </View>
                            </View>
                        )
                    })}

                </View>

            </View>

        </ScrollView >
    )
}

export function DetailsScreen({ route }) {
    // console.warn(route)
    let data = route.params

    return (
        <ScrollView>
            <View>
                <Image source={images.initials[data.initial]} style={{ width: "100%", height: 400 }} />
                <View style={{ backgroundColor: "#150E56" }}>
                    <Text style={{ color: "#fff", padding: 12, fontSize: 16 }}>{data.divisi}</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <Text>Nama:</Text>
                    <Text>{data.name}{"\n"}</Text>
                    <Text>NIP:</Text>
                    <Text>{data.NIP}{"\n"}</Text>
                    <Text>NIDN:</Text>
                    <Text>{data.NIDN}{"\n"}</Text>
                    <Text>Email:</Text>
                    <Text>{data.email}{"\n"}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

let dosen = ([
    { divisi: 'Kepala Departemen', name: 'Prof. Dr. rer. nat. Yudi Rosandi, M. Si', NIP: "19710808 199803 1 007", NIDN: "0008087106", email: "rosandi@geophys.unpad.ac.id", initial: 1, key: 'dosen1' },
    { divisi: 'Ketua Program Studi Geofisika', name: 'Dr. Irwan Ary Dharmawan, M.Si', NIP: "19720531 199702 1 001", NIDN: "0031057202", email: "iad@geophys.unpad.ac.id", initial: 2, key: 'dosen2' },
    { divisi: 'Ketua Laboratorium Geologi dan Perpetaan', name: 'Dr. Dini Fitriani, MT', NIP: "19751004 199903 2 001", NIDN: "0004107504", email: "dini@geophys.unpad.ac.id", initial: 3, key: 'dosen3' },
    { divisi: 'Ketua Laboratorium Komputasi dan Instrumentasi Geofisika', name: 'Dr. Imran Hilman Mohammad, M.Si', NIP: "19810814 200812 1 001", NIDN: "0014088111", email: "@geophys.unpad.ac.id", initial: 4, key: 'dosen4' },
    { divisi: 'Staf Dosen', name: 'Eddy Supriyana, Drs., M.Si', NIP: "19580510 198801 1 001", NIDN: "0010055807", email: "@geophys.unpad.ac.id", initial: 5, key: 'dosen5' },
    { divisi: 'Staf Dosen', name: 'Bambang Wijatmoko, S.Si., M.Si.', NIP: "19700313 199703 1 005", NIDN: "0013037001", email: "@geophys.unpad.ac.id", initial: 6, key: 'dosen6' },
    { divisi: 'Staf Dosen', name: 'Dr. Eleonora Agustine, MT', NIP: "19710801 199603 2 001", NIDN: "0001087107", email: "@geophys.unpad.ac.id", initial: 7, key: 'dosen7' },
    { divisi: 'Staf Dosen', name: 'Dr.  Asep Harja, M.Si', NIP: "19690419 199512 1 001", NIDN: "0019046901", email: "asep.harja@geophys.unpad.ac.id", initial: 8, key: 'dosen8' },
    { divisi: 'Staf Dosen', name: 'Budy Santoso, S.Si., MT', NIP: "19740110 199903 1 003", NIDN: "0010017408", email: "e@geophys.unpad.ac.id", initial: 9, key: 'dosen9' },
    { divisi: 'Staf Dosen', name: 'Kusnahadi Susanto, S.Si., MT', NIP: "19800914 200501 1 002", NIDN: "0014098002", email: "@geophys.unpad.ac.id", initial: 10, key: 'dosen10' },
    { divisi: 'Staf Dosen', name: 'Dr. Kartika Hajar Kirana, M.Si', NIP: "19850925 201012 2 007", NIDN: "0025098504", email: "@geophys.unpad.ac.id", initial: 11, key: 'dosen11' },
    { divisi: 'Staf Dosen', name: 'Anggie Susilawati, S.Si., M.Si', NIP: "19860102 201212 2 003", NIDN: "0002018601", email: "@geophys.unpad.ac.id", initial: 12, key: 'dosen12' },
    { divisi: 'Tenaga Pendidik', name: 'Mia Uswatun Hasanah, S.Si., MT', NIP: "19870424 201404 2 001", NIDN: "0024048701", email: "@geophys.unpad.ac.id", initial: 13, key: 'dosen13' },
])


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgBlueLight: {
        flex: 1,
        backgroundColor: "#EDF2F4",
    },
    text: {
        padding: 20,
        fontFamily: "Lato-Regular",
    },
    subTitle: {
        color: "#fff",
        padding: 10,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Lato-Bold",
    },
})

const images = {
    initials: {
        1: require('../assets/dosen/yudi.jpg'),
        2: require('../assets/dosen/irwan.jpg'),
        3: require('../assets/dosen/dini.jpg'),
        4: require('../assets/dosen/imran.jpg'),
        5: require('../assets/dosen/eddy.jpg'),
        6: require('../assets/dosen/bambang.jpg'),
        7: require('../assets/dosen/eleonora.jpg'),
        8: require('../assets/dosen/asep.jpg'),
        9: require('../assets/dosen/budy.jpg'),
        10: require('../assets/dosen/kusnahadi.jpg'),
        11: require('../assets/dosen/kartika.jpg'),
        12: require('../assets/dosen/anggie.jpg'),
        13: require('../assets/dosen/mia.jpg')
    }
}

export default StafScreen

