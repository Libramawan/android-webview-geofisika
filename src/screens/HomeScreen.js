import React from 'react'
import { Text, View, ScrollView, Image, StyleSheet, ImageBackground, TouchableOpacity, Button } from 'react-native'
import { createOpenLink } from 'react-native-open-maps'

const location = { latitude: -6.926352123999298, longitude: 107.7739365423813 }
const openLocation = createOpenLink(location)
const openLocationZoomedOut = createOpenLink({ ...location, zoom: 18 })

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                {/* Header */}
                <View style={styles.containerHeader}>

                    <ImageBackground source={require('../assets/Header-home.jpg')} style={{ width: '100%' }}>

                        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 350, justifyContent: "center" }}>
                            <View style={styles.titleBackground}>
                                <Text style={styles.title}>S-1 GEOFISIKA UNPAD</Text>
                            </View>
                        </View>

                    </ImageBackground>
                </View>
                <View style={styles.bgMaroon}>
                    <Text style={styles.subTitle}>SELAMAT DATANG DI APLIKASI{"\n"}PROGRAM STUDI GEOFISIKA</Text>
                </View>

                {/* Tentang Prodi */}
                <ScrollView style={styles.containerText}>
                    <View>
                        <Text style={styles.h1}>TENTANG PRODI</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={Object.assign({}, styles.text)}>
                            Di program studi Geofisika Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) Unpad, dipelajari  tentang bumi dan lingkungannya dengan menggunakan kaidah-kaidah fisika dan metode matematika. Ilmu Geofisika menyelidiki dan menjelaskan fenomena fisika yang terjadi di bumi dan lingkungannya pada saat ini untuk mengetahui kejadian masa lalu dan memodelkan masa yang akan datang. Fenomena fisika tersebut dinyatakan dalam bentuk parameter fisis yang terukur.
                        </Text>
                    </View>

                    <View style={{ marginTop: 50 }}>
                        <Text style={Object.assign({ textAlign: "center" }, styles.text)}>Akreditasi: B{"\n"}Gelar Lulusan: Sarjana Sains (S.Si).</Text>
                    </View>

                    <Image source={require('../assets/Sertifikat.png')} style={{ width: 300, height: 215, marginTop: 20, alignSelf: 'center' }} />

                </ScrollView>

                {/* Visi */}
                <View style={styles.bgMaroon}>
                    <Text style={styles.subTitle}>Visi</Text>
                </View>
                <View style={styles.bgGreyLight}>
                    <Text style={styles.text, styles.containerText}>Menjadi Program Studi Geofisika yang unggul dalam penyelenggaraan pendidikan dan riset di bidang geofisika lingkungan pada tingkat regional tahun 2026.</Text>
                </View>

                {/* Misi */}
                <View style={styles.bgMaroon}>
                    <Text style={styles.subTitle}>Misi</Text>
                </View>
                <View style={styles.bgGreyLight}>
                    <Text style={Object.assign({}, styles.text, styles.containerText)}>
                        1. Melaksanakan pendidikan dan pengajaran untuk menghasilkan lulusan yang menguasai ilmu geofisika dan aplikasinya, terampil berkomunikasi dan berdaya saing di tingkat regional.
                        {"\n\n"} 2. Melakukan riset di bidang ilmu dan terapan geofisika yang berkontribusi dalam penyelesaian masalah lingkungan.
                        {"\n\n"} 3. Menyelenggarakan pengabdian berbasis riset untuk mengatasi permasalahan lingkungan di masyarakat.
                        {"\n\n"} 4. Membangun dan mengembangkan kerjasama di bidang pendidikan dan riset dengan institusi dalam dan luar negeri.
                    </Text>
                </View>

                {/* Tujuan */}
                <ScrollView style={styles.containerText}>
                    <View>
                        <Text style={Object.assign({ textAlign: "center", fontFamily: "Poppins-Regular" }, styles.h1)}>Tujuan Pendidikan</Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.text}>
                            1. Menghasilkan lulusan yang kompeten dalam bidang geofisika dengan masa studi tepat waktu.
                            {"\n\n"}2. Menghasilkan lulusan yang mampu diserap dunia kerja dengan waktu tunggu yang singkat.
                            {"\n\n"}3. Menghasilkan lulusan yang bermoral dan penuh pengabdian serta memiliki rasa tanggung jawab terhadap pembangunan masyarakat
                            {"\n\n"}4. Menghasilkan produk penelitian yang dipublikasikan dalam jurnal nasional dan internasional.
                            {"\n\n"}5. Menghasilkan produk penelitian yang bermanfaat untuk kesejahteraan masyarakat.
                        </Text>
                    </View>
                </ScrollView>

                {/* Cards */}
                <View style={styles.cards}>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Info Staf Prodi')}>
                        <View style={styles.cardItems}>
                            <Text style={styles.cardTitle}>Pejabat dan Staf Prodi</Text>
                            <Text style={styles.cardSubTitle}>Profil Prodi</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../assets/Header-staf.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Fasilitas')}>
                        <View style={styles.cardItems}>
                            <Text style={styles.cardTitle}>Fasilitas</Text>
                            <Text style={styles.cardSubTitle}>Profil Prodi</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../assets/Header-fasilitas.jpg')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Profil Lulusan')}>
                        <View style={styles.cardItems}>
                            <Text style={styles.cardTitle}>Profil Lulusan</Text>
                            <Text style={styles.cardSubTitle}>Profil Prodi</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../assets/Header-lulusan.jpg')} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Daftar Kurikulum Prodi')}>
                        <View style={styles.cardItems}>
                            <Text style={styles.cardTitle}>Kurikulum</Text>
                            <Text style={styles.cardSubTitle}>Daftar Kurikulum Prodi</Text>
                        </View>
                        <Image style={styles.cardImage} source={require('../assets/Header-kurikulum.jpg')} />
                    </TouchableOpacity>

                </View>

                {/* Kontak dan Lokasi */}
                <View style={styles.contact}>
                    <View style={styles.containerText}>
                        <Text style={styles.h1White}>Lokasi</Text>
                        <Text style={Object.assign({ fontFamily: "Lato-Regular", }, styles.white)}>Departemen Geofisika
                        Gedung 0201-0404
                        Fakultas Matematika dan Ilmu Pengetahuan Alam
                        Universitas Padjadjaran
                        Jalan Raya Bandung-Sumedang km. 21,
                        Jatinangor, Kabupaten Sumedang 45363
                        Jawa Barat, Indonesia
                        </Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={openLocationZoomedOut}>
                            <Image style={{ width: 233, height: 233 }} source={require('../assets/Lokasi.jpg')} />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.containerText}>
                        <Text style={styles.h1White}>Kontak</Text>
                        <Text style={Object.assign({ fontFamily: "Lato-Regular", }, styles.white)}>
                            Telp/Fax : 022 7792435
                                {"\n"}Email: head@geophys.unpad.ac.id
                                {"\n"}Website: geophys.unpad.ac.id
                            </Text>
                    </View>

                </View>

            </ScrollView >
        </View>
    )
}


const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        flexDirection: "column",
        height: 350,
        alignItems: "center",
    },
    containerText: {
        flex: 1,
        padding: 20,
    },
    titleBackground: {
        backgroundColor: "#150E56",
        height: 50,
        width: "70%",
        marginLeft: 0,
        marginRight: "auto",
    },
    title: {
        color: "#fff",
        padding: 14,
        fontSize: 18,
        textAlign: "center",
        fontFamily: "Lato-Regular",
    },
    bgGreyLight: {
        backgroundColor: "#EDF2F4",
        position: "relative",
    },
    bgMaroon: {
        backgroundColor: "#7B113A",
        position: "relative",
    },
    subTitle: {
        color: "#fff",
        padding: 10,
        fontSize: 16,
        textAlign: "center",
        fontFamily: "Lato-Bold",
    },
    h1: {
        fontSize: 20,
        fontFamily: "Poppins-Regular"
    },
    text: {
        fontSize: 15,
        fontFamily: "Lato-Regular",
    },
    cards: {
        alignItems: 'center',
        backgroundColor: "#F6F6F6",
        marginBottom: 15,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginTop: 10,
        width: "90%",
        justifyContent: 'space-between',
        borderWidth: 1,
    },
    cardItems: {
        padding: 15,
    },
    cardTitle: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
    },
    cardSubTitle: {
        fontFamily: "Lato-Regular",
        fontSize: 14,
    },
    cardImage: {
        width: 90,
        height: 90,
    },
    contact: {
        backgroundColor: "#2B2D42",
    },
    h1White: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Poppins-Regular",
    },
    white: {
        color: "#fff",
    },
    footer: {
        backgroundColor: "#000",
        alignItems: "center",
    }
})

export default HomeScreen