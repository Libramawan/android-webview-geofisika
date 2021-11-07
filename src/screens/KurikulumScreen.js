import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'

import Header from '../components/Header'

export default function KurikulumScreen() {
    return (
        <ScrollView>

            <View style={styles.container}>
                <Header imageUri={require('../assets/Header-kurikulum.jpg')}
                    header="DAFTAR KURIKULUM PRODI"
                    title="Kurikulum"
                    text="Kurikulum Program Studi Geofisika Fakultas MIPA Unpad. Jumlah SKS yang harus ditempuh oleh mahasiswa Geofisika adalah 144 SKS, dengan perbandingan teori 60% (85 SKS), dan praktikum 40 % (59 SKS). Program studi Geofisika didukung oleh staf pengajar tetap dengan kualifikasi S-3 dan S-2, serta para profesional dari kalangan industri dan praktisi."
                />


                <Text style={styles.text}>
                    Proses pembelajaran di Prodi Geoisika menggunakan gabungan dari
                    berbagai metode pembelajaran yang disesuaikan dengan capaian pembelajaran
                    (kognitif, afektif dan psikomotorik) baik untuk mata kuliah teori maupun paraktik.
                    Metode pembelajaran yang digunakan dalam proses pembelajaran adalah
                    metode Teaching Center Learning (TCL) yang dikombinasikan dengan metode
                    Student Center Learning (SCL) untuk mata kuliah dengan capaian kongnitif dan
                    psikomotorik serta dengan metode pembelajaran Problem Based Learning untuk
                    perkuliahan dengan capaian pembelajaran psikomotorik.
                </Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    text: {
        padding: 20,
        fontFamily: "Lato-Regular",
    },
    bold: {
        fontFamily: "Lato-Bold",
    },
})
