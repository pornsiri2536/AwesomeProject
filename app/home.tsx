import React from "react";
import { ScrollView, View, StatusBar } from "react-native";

// Component ที่ import เข้ามา (ตาม path ที่คุณให้ไว้)
import Cover from '@/components/week6/Cover';
import HomeIconMenu from '@/components/week6/HomeIconMenu';
import Tour from '@/components/week6/Tour';
import TourFlatList from '@/components/week6/TourFlatList';
import Event from '@/components/week6/Event';

export default function Home() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'lightyellow' }}>
      <StatusBar barStyle="dark-content" backgroundColor="lightyellow" />
      
      <Cover />

      <HomeIconMenu />

      <Tour style={{ margin: 20 }} />

      <TourFlatList style={{ marginHorizontal: 20, marginBottom: 20 }} />

      <Event style={{ marginHorizontal: 20, marginBottom: 30 }} />
    </ScrollView>
  );
}
