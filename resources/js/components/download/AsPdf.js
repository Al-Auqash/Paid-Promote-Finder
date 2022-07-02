import React from "react";
// import { Document, Page } from "react-pdf";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

const AsPdf = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    );
};

ReactPDF.render(<AsPdf />, `${__dirname}/example.pdf`);
