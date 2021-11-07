import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { KurikulumDataWajib as kurikulum } from './KurikulumData';

const KurikulumWajib = () => {
  
  return (
    <SectionList
      style={{ flex: 1 }}
      sections={kurikulum}
      keyExtractor={(item, index) => index.toString()}
      renderSectionHeader={({ section: { title } }) => (
        <View>

          <Text style={{ paddingVertical: 15, paddingHorizontal: 20, backgroundColor: "#2B2D42", color: "#fff", fontSize: 16, fontFamily: "Lato-Bold" }}>
            {title}
          </Text>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20, flex: 1, flexDirection: 'row', }}>

            <Text style={{ flex: 2, color: "#2B2D42" }}>
              Kode MK
            </Text>
            <Text style={{ flex: 4, color: "#2B2D42" }}>
              Mata Kuliah
            </Text>
            <Text style={{ flex: 1, color: "#2B2D42" }}>
              SKS
            </Text>

          </View>
          
        </View>
      )}
      renderItem={({ item }) => (
        <View style={{ paddingVertical: 15, paddingHorizontal: 20, flex: 1, flexDirection: 'row', }}>

          <Text style={{ flex: 2 }}> {item.kode} </Text>
          <Text style={{ flex: 4, marginRight: 5 }}>{item.subject} </Text>
          <Text style={{ flex: 1 }}>  {item.sks}</Text>
        </View>
      )}
    />
  );
};

export default KurikulumWajib;
