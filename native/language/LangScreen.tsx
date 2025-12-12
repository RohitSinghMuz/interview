import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import { useTranslation } from 'react-i18next';

type LanguageCode = 'en' | 'hi' | 'fr';

const LangScreen: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const changeLanguage = async (lang: LanguageCode) => {
    try {
      await i18n.changeLanguage(lang);
      setModalVisible(false);
    } catch (err) {
      console.log("Language change error:", err);
    }
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.langBtn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.langBtnText}>{t('selectLanguage')}</Text>
      </TouchableOpacity>

      <TextInput placeholder={t('name')} style={styles.input} />
      <TextInput placeholder={t('email')} style={styles.input} />

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitText}>{t('submit')}</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <Text style={styles.modalTitle}>{t('selectLanguage')}</Text>

            <TouchableOpacity onPress={() => changeLanguage('en')}>
              <Text style={styles.langOption}>English</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => changeLanguage('hi')}>
              <Text style={styles.langOption}>हिन्दी</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => changeLanguage('fr')}>
              <Text style={styles.langOption}>Français</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeBtn}
            >
              <Text style={styles.closeText}>{t('close')}</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

    </View>
  );
};

export default LangScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  submitBtn: {
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  langBtn: {
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  langBtnText: {
    fontSize: 14,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 280,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  langOption: {
    fontSize: 16,
    paddingVertical: 10,
    width: '100%',
    textAlign: 'center',
  },
  closeBtn: {
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#ccc',
    borderRadius: 6,
  },
  closeText: {
    fontSize: 16,
    color: '#333',
  }
});
