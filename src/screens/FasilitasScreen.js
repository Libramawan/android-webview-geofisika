import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'

import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import ListFasilitas from '../components/FasilitasData'
import Title from '../components/Title'

export default function Fasilitas() {
    return (
        <ScrollView>
            <View style={styles.container}>

                {/* Header */}
                <Header imageUri={require('../assets/Header-fasilitas.jpg')}
                    header="PROFIL PRODI"
                    title="Fasilitas"
                />

                <Title title="Laboratorium" />

                <View style={{ height: 350, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Wrapper imageUri={require('../assets/fasilitas/lab1.jpg')}
                            name="Laboratorium Perpetaan Geofisika"
                        />
                        <Wrapper imageUri={require('../assets/fasilitas/lab2.jpg')}
                            name="Laboratorium Instrumentasi Geofisika"
                        />
                        <Wrapper imageUri={require('../assets/fasilitas/lab3.jpg')}
                            name="Laboratorium Geofisika"
                        />
                    </ScrollView>
                </View>

                <View style={{ marginTop: 25 }}>
                    <Title title="Ruang Tugas Akhir" />

                    <Image source={require('../assets/fasilitas/rta.jpg')} style={{ height: 300, width: "90%", alignSelf: 'center', marginTop: 30 }} />
                    <Text style={styles.text}>Ruang ini untuk dipergunakan bagi Mahasiswa Program Studi Geofisika yang sedang menyusun tugas akhir dan atau segala kegiatan bimbingan mahasiswa dan dosen pembimbing tugas akhir, untuk mempermudah mahasiswa yang sedang menyusun tugas akhir, maka kami menyediakan buku, jurnal dan skripsi untuk dibaca bagi mahasiswa tersebut, termasuk fasilitas lainnya agar dapat digunakan sebagai mana mestinya.</Text>
                </View>


                <Title title="Ruang Rapat & Seminar" />

                <View style={{ height: 350, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Wrapper imageUri={require('../assets/fasilitas/rapat1.jpg')}
                            name="Ruang Rapat Departemen Geofisika Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Padjadjaran"
                        />
                        <Wrapper imageUri={require('../assets/fasilitas/rapat2.jpg')}
                            name="Ruang Seminar UP, Seminar Skripsi dan Sidang Skripsi Program Studi Geofisika Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Padjadjaran"
                        />

                    </ScrollView>
                </View>



                <View style={{ marginTop: 25 }}>
                    <Title title="Tempat Belajar / Diskusi Mahasiswa" />

                    <Image source={require('../assets/fasilitas/rbelajar.jpg')} style={{ height: 200, width: "90%", alignSelf: 'center', marginTop: 30 }} />
                    <Text style={styles.text}>Ruang ini untuk dipergunakan bagi Mahasiswa Program Studi Geofisika yang sedang menyusun tugas akhir dan atau segala kegiatan bimbingan mahasiswa dan dosen pembimbing tugas akhir, untuk mempermudah mahasiswa yang sedang menyusun tugas akhir, maka kami menyediakan buku, jurnal dan skripsi untuk dibaca bagi mahasiswa tersebut, termasuk fasilitas lainnya agar dapat digunakan sebagai mana mestinya.</Text>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        padding: 20,
        fontFamily: "Lato-Regular",
    },
    bold: {
        fontWeight: "bold",
    },
    imageHeader: {
        width: "100%",
        height: 230,
    },
    bgBlueLight: {
        backgroundColor: "#8FD6E1",
        position: "relative",
    },
})
