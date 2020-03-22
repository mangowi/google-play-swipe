/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import data, { ContentType } from './data';
import PlaySwipe, { SectionType } from './PlaySwipe';

const { items } = data;
const sectionItems = items.map(
  (item: ContentType): SectionType => (
    {
      title: item.title,
      description: item.description,
      imageSource: {
        uri: item.imageSource,
        cache: 'default',
      },
      key: item.title,
      onClick: () => Alert.alert(item.title),
    }
  ),
);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <PlaySwipe
        content={data}
        header={{
          content: {
            headerTitle: data.headerTitle,
            headerSubTitle: data.headerSubtitle,
            headerButton: (
              <TouchableOpacity
                onPress={() => Alert.alert('Discover more!')}
              >
                <Ionicons name="md-arrow-forward" size={28} color="#58646e" />
              </TouchableOpacity>
            ),
          },
          styles: {
            headerViewStyles: {
              flex: 0.4,
              paddingTop: 15,
              paddingBottom: 15,
            },
            headerTitleStyles: {
              fontSize: 18,
              fontWeight: '400',
            },
            headerSubTitleStyles: {
              fontSize: 14,
              fontWeight: '200',
            },
            headerButtonStyles: {
              backgroundColor: 'pink',
            },
          },
        }}
        featuredImage={{
          source: {
            uri: 'https://assets-ouch.icons8.com/preview/408/f73e918d-4493-4902-9d53-6facb9dc6b27.png',
            cache: 'default',
          },
          styles: {
            imageContainerStyles: {
              position: 'absolute',
              top: 50,
              right: 0,
            },
            imageStyles: {
              width: 200,
              height: 265,
            },
          },
        }}
        scrollViewStyles={{
          backgroundColor: 'transparent',
          paddingTop: 10,
        }}
        backgroundTransition={{
          transitionColors: ['#019ae6', '#33afed'],
          transitionStyles: { flex: 0.5 },
        }}
        sectionItems={{
          content: sectionItems,
          styles: {
            //  sectionStyle: index === 0 ? { marginLeft: 200 } : null,
            sectionImageStyle: {
              width: 125,
              height: 200,
              borderRadius: 10,
            },
            sectionTitleStyle: {
              fontSize: 14,
              fontWeight: '300',
              paddingTop: 15,
            },
            sectionSubTitleStyle: {
              fontSize: 13,
              fontWeight: '200',
              color: '#3c709d',
            },
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  statusBar: {
    height: Constants.statusBarHeight,
  },
});
