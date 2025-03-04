import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import resume1 from '../../assets/resumePage1.png';
import resume2 from '../../assets/resumePage2.png';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Image 
                    style={styles.image} 
                    src={resume1}
                />
                <Image 
                    style={styles.image} 
                    src={resume2}
                />
            </View>
        </Page>
    </Document>
);

export default MyDocument;