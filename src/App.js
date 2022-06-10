import React, { useState, lazy } from 'react';
import {
  Page,
  Image,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import Grid from '@mui/material/Grid';
import image4 from './image4.png';
import image1 from './image1.png';
import image3 from './image3.png';
import GetAppIcon from '@mui/icons-material/GetApp';
import DownloadingIcon from '@mui/icons-material/Downloading';
const PDFViewerWithNoSSR = lazy(() => import('./PDFViewer'));

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    orientation: 'portrait',
  },
  view: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 0,
    backgroundColor: 'white',
  },
  image: {
    objectFit: 'cover',
  },
});

const MyDoc = (
  <Document>
    <Page object-fit='fill' style={styles.page} size='A4' wrap>
      <View style={styles.view}>
        <Image style={styles.image} src={image4} alt='images' />
      </View>
      <View
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 24,
          marginTop: 200,
          marginLeft: 60,
        }}
      >
        <Text>Amazon BV</Text>
        <Text>Ranjan Prajapati</Text>
      </View>
      <View style={styles.view} break>
        <Image style={styles.image} src={image1} alt='images' />
      </View>
      <View style={styles.view} break>
        <Image style={styles.image} src={image3} alt='images' />
      </View>
      <View>
        <Text
          style={{
            color: '#237BFF',
            textAlign: 'left',
            fontSize: 24,
            marginTop: 48,
            marginLeft: 60,
          }}
        >
          Inhoud
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: 'left',
            fontSize: 14,
            marginTop: 48,
            marginLeft: 60,
          }}
        >
          Subsidiekans 1: Wet Bevordering Speur- en Ontwikkelingswerk (WBSO)
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: 'left',
            fontSize: 14,
            marginTop: 16,
            marginLeft: 60,
          }}
        >
          Subsidiekans 2: Innovatiebox
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: 'left',
            fontSize: 14,
            marginTop: 16,
            marginLeft: 60,
          }}
        >
          Subsidiekans 3: Innovatiebox
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: 'left',
            fontSize: 14,
            marginTop: 16,
            marginLeft: 60,
          }}
        >
          Subsidiekans 4: Innovatiebox
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: 'left',
            fontSize: 14,
            marginTop: 16,
            marginLeft: 60,
          }}
        >
          Subsidiekans 5: Innovatiebox
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: 'left',
            fontSize: 14,
            marginTop: 16,
            marginLeft: 60,
          }}
        >
          Subsidiekans 6: Innovatiebox
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: 'left',
            fontSize: 14,
            marginTop: 16,
            marginLeft: 60,
          }}
        >
          Subsidiekans 7: Innovatiebox
        </Text>
      </View>
    </Page>
  </Document>
);
function App() {
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{ marginTop: '24px' }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: 'center',
          }}
        >
          <PDFDownloadLink document={MyDoc} fileName='Subsidiescan.pdf'>
            {({ blob, url, loading, error }) =>
              loading ? (
                <DownloadingIcon fontSize='large' />
              ) : (
                <GetAppIcon fontSize='large' />
              )
            }
          </PDFDownloadLink>
        </Grid>
        <Grid item xs={12}>
          <PDFViewerWithNoSSR value={MyDoc} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
