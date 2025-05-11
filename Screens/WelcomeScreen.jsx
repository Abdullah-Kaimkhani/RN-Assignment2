import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://tse1.mm.bing.net/th/id/OIP.pOKh102ZK8g4TyojNoRKhwHaHa?cb=iwc1&rs=1&pid=ImgDetMain' }}
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.title}>Hello</Text>
            <Text style={styles.subtitle}>Welcome to Ultra Drugs, where you manage your daily needs</Text>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>OR VIA SOCIAL</Text>

            <View style={styles.socialContainer}>
                <Icon name="facebook" size={28} color="#3b5998" style={styles.socialIcon} />
                <Icon name="google" size={28} color="#db4437" style={styles.socialIcon} />
                <Icon name="twitter" size={28} color="#00acee" style={styles.socialIcon} />
            </View>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: '80%',
        height: 250,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
    },
    subtitle: {
        textAlign: 'center',
        color: '#888',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    loginButton: {
        backgroundColor: '#5f3dc4',
        paddingVertical: 14,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginVertical: 10,
        width: '80%',
    },
    loginText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    signUpButton: {
        borderColor: '#5f3dc4',
        borderWidth: 2,
        paddingVertical: 14,
        borderRadius: 25,
        marginVertical: 10,
        width: '80%',
    },
    signUpText: {
        color: '#5f3dc4',
        fontSize: 16,
        textAlign: 'center',
    },
    orText: {
        marginVertical: 15,
        color: '#aaa',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    socialIcon: {
        marginHorizontal: 10,
    },
});
