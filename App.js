import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');

  const generateScript = () => {
    if (!topic.trim()) {
      setResult('Pehle topic likhein.');
      return;
    }

    setResult(
      `Title: ${topic}

Hook: Aaj ki kahani aapko zaroor pasand aayegi.

Script: Ek dil ko chhoo lene wali kahani...

CTA: Follow karein aur mazeed videos dekhein.

#AIStory #Urdu #Shorts`
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.wrap}>
        <Text style={styles.logo}>AI Short Maker</Text>

        <Text style={styles.sub}>
          Urdu • Sindhi • Hindi • English
        </Text>

        <Text style={styles.hero}>
          Create viral short-form content with AI.
        </Text>

        <Text style={styles.label}>Topic / Idea</Text>

        <TextInput
          value={topic}
          onChangeText={setTopic}
          placeholder="Apni story ka topic likhein..."
          multiline
          style={styles.input}
        />

        <Pressable style={styles.btn} onPress={generateScript}>
          <Text style={styles.bt}>Generate Script</Text>
        </Pressable>

        {!!result && <Text style={styles.res}>{result}</Text>}

        {['Video Prompt', 'Image Prompt', 'Hashtags', 'History', 'Premium'].map(
          (item) => (
            <View key={item} style={styles.card}>
              <Text style={styles.ct}>{item}</Text>
            </View>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrap: {
    padding: 24,
  },
  logo: {
    fontSize: 28,
    fontWeight: '800',
    marginTop: 20,
  },
  sub: {
    color: '#666',
    marginTop: 5,
    marginBottom: 25,
  },
  hero: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  label: {
    fontWeight: '700',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 14,
    padding: 14,
    minHeight: 120,
    textAlignVertical: 'top',
  },
  btn: {
    backgroundColor: '#6750A4',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 18,
  },
  bt: {
    color: '#fff',
    fontWeight: '800',
  },
  res: {
    backgroundColor: '#f5f2fa',
    padding: 16,
    borderRadius: 14,
    marginTop: 18,
    lineHeight: 23,
  },
  card: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 14,
    padding: 18,
    marginTop: 12,
  },
  ct: {
    fontWeight: '700',
    fontSize: 16,
  },
});
