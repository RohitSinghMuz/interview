import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Formifelse: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    mobile: '',
    confirmMobile: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    mobile: '',
    confirmMobile: '',
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value,
    }));

    // Clear error when typing
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: '',
    }));
  };

  const validateFields = () => {
    let valid = true;
    let newErrors = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      mobile: '',
      confirmMobile: '',
    };

    // Name validations
    if (formData.firstName.trim().length < 3) {
      newErrors.firstName = 'First name must be at least 3 characters';
      valid = false;
    }
    if (formData.middleName.trim().length < 3) {
      newErrors.middleName = 'Middle name must be at least 3 characters';
      valid = false;
    }
    if (formData.lastName.trim().length < 3) {
      newErrors.lastName = 'Last name must be at least 3 characters';
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      valid = false;
    }

    // Confirm Email validation
    if (formData.confirmEmail.trim() === '') {
      newErrors.confirmEmail = 'Confirm email is required';
      valid = false;
    } else if (formData.confirmEmail !== formData.email) {
      newErrors.confirmEmail = 'Email and Confirm Email do not match';
      valid = false;
    }

    // Mobile number validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (formData.mobile.trim() === '') {
      newErrors.mobile = 'Mobile number is required';
      valid = false;
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit Indian mobile number';
      valid = false;
    }

    // Confirm Mobile number validation
    if (formData.confirmMobile.trim() === '') {
      newErrors.confirmMobile = 'Confirm mobile number is required';
      valid = false;
    } else if (formData.confirmMobile !== formData.mobile) {
      newErrors.confirmMobile = 'Mobile number and Confirm Mobile number do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      Alert.alert('Success', 'All fields are valid!');
      console.log('Submitted data:', formData);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>

      {/* First Name */}
      <TextInput
        placeholder="Enter First Name"
        value={formData.firstName}
        onChangeText={(text) => handleInputChange('firstName', text)}
        style={[styles.input, errors.firstName ? styles.inputError : null]}
      />
      {errors.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text> : null}

      {/* Middle Name */}
      <TextInput
        placeholder="Enter Middle Name"
        value={formData.middleName}
        onChangeText={(text) => handleInputChange('middleName', text)}
        style={[styles.input, errors.middleName ? styles.inputError : null]}
      />
      {errors.middleName ? <Text style={styles.errorText}>{errors.middleName}</Text> : null}

      {/* Last Name */}
      <TextInput
        placeholder="Enter Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleInputChange('lastName', text)}
        style={[styles.input, errors.lastName ? styles.inputError : null]}
      />
      {errors.lastName ? <Text style={styles.errorText}>{errors.lastName}</Text> : null}

      {/* Email */}
      <TextInput
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
        keyboardType="email-address"
        style={[styles.input, errors.email ? styles.inputError : null]}
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      {/* Confirm Email */}
      <TextInput
        placeholder="Confirm Email"
        value={formData.confirmEmail}
        onChangeText={(text) => handleInputChange('confirmEmail', text)}
        keyboardType="email-address"
        style={[styles.input, errors.confirmEmail ? styles.inputError : null]}
      />
      {errors.confirmEmail ? <Text style={styles.errorText}>{errors.confirmEmail}</Text> : null}

      {/* Mobile */}
      <TextInput
        placeholder="Enter Mobile Number"
        value={formData.mobile}
        onChangeText={(text) => handleInputChange('mobile', text)}
        keyboardType="numeric"
        maxLength={10}
        style={[styles.input, errors.mobile ? styles.inputError : null]}
      />
      {errors.mobile ? <Text style={styles.errorText}>{errors.mobile}</Text> : null}

      {/* Confirm Mobile */}
      <TextInput
        placeholder="Confirm Mobile Number"
        value={formData.confirmMobile}
        onChangeText={(text) => handleInputChange('confirmMobile', text)}
        keyboardType="numeric"
        maxLength={10}
        style={[styles.input, errors.confirmMobile ? styles.inputError : null]}
      />
      {errors.confirmMobile ? <Text style={styles.errorText}>{errors.confirmMobile}</Text> : null}

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Formifelse;