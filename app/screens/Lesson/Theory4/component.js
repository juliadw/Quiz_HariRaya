/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */

import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, Text } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');
const height = width * 0.8;

class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View style={styles.scrollContainer}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator>
            {images.map((image, i) => (
              <Image style={styles.image} source={image.source} key={i} />
            ))}
          </ScrollView>
        </View>
      );
    }
    console.log('Please provide images');
    return null;
  }
}

export default class App extends Component {
  render() {
    const images = [
      {
        source: {
          uri: 'https://i.ibb.co/5c8CDmh/Rectangle-9.png '
        }
      },
      {
        source: {
          uri: 'https://i.ibb.co/NFRvcZ9/cerita1.png'
        }
      },
      {
        source: {
          uri: 'https://i.ibb.co/gSgcd77/cerita2.png'
        }
      },
      {
        source: {
          uri: 'https://i.ibb.co/ryVS8kt/cerita3.png'
        }
      }
    ];
    return (
      <View style={styles.container}>
        <ScrollView>
          <Carousel images={images} />
          <View style={styles.content}>
            <Text style={styles.titleTeory}> Makna Ibadah Qurban Hari Raya Idul Adha</Text>
            <Text style={styles.SubTeory}>A. Definisi Qurban </Text>
            <Text style={styles.teory}>
              Apakah makna Qurban dan kapan disyariatkan? Dalam bahasa Arab, Qurban dikenal dengan nama
              al-Udh-hiyyah,maknanya menurut bahasa adalah hewan yang dikurbankan, atau hewan yang disembelih
              pada hari Idhul Adha. {'\n'}Sedangkan menurut Ahli Fiqh, al-Udh-hiyyah didefenisikan sebagai
              berikut: "Hewan yang disembelih untuk mendekatkan diri kepada Allah SWT, sejak hari Idul Adha
              hingga ke hari-hari Tasyrîq (11, 12 dan 13 Dzulhijjah)". {'\n'}
            </Text>

            <Text style={styles.SubTeory}>B. Kapan Ibadah Qurban dan disyariatkan? </Text>
            <Text style={styles.teory}>
              Dalam ajaran Islam, ibadah Qurban disyari’atkan pada tahun kedua Hijriah. Dilihat dari aspek
              sejarah, ibadah Qurban telah ada sejak zaman Nabi Adam AS, sebagaimana yang tercantum dalam Qs.
              al-Mâ’idah [5]: 27
              {'\n'}
            </Text>
            <Text style={styles.arabian}>
              وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ إِذْ قَرَّبَا قُرْبَانًا فَتُقُبِّلَ مِنْ
              أَحَدِهِمَا وَلَمْ يُتَقَبَّلْ مِنَ الْآخَرِ قَالَ لَأَقْتُلَنَّكَ ۖ قَالَ إِنَّمَا يَتَقَبَّلُ
              اللَّهُ مِنَ الْمُتَّقِينَ
            </Text>
            <Text style={styles.teory}> Artinya:</Text>
            <Text style={styles.arti}>
              “Ceritakanlah kepada mereka kisah kedua putera Adam (Habil dan Qabil) menurut yang sebenarnya,
              ketika keduanya mempersembahkan korban, maka diterima dari salah seorang dari mereka berdua
              (Habil) dan tidak diterima dari yang lain (Qabil). Ia berkata (Qabil): "Aku pasti membunuhmu!".
              Berkata Habil: "Sesungguhnya Allah hanya menerima (korban) dari orang-orang yang bertakwa".{' '}
              {'\n'}
            </Text>
            <Text style={styles.teory}>
              Kemudian ibadah Qurban juga dilaksanakan oleh Khalîlullâh Ibrahim AS, sebagaimana firman Allah
              SWT:
            </Text>
            <Text style={styles.arabian}>
              فَلَمَّا بَلَغَ مَعَهُ ٱلسَّعْىَ قَالَ يَٰبُنَىَّ إِنِّىٓ أَرَىٰ فِى ٱلْمَنَامِ أَنِّىٓ
              أَذْبَحُكَ فَٱنظُرْ مَاذَا تَرَىٰ ۚ قَالَ يَٰٓأَبَتِ ٱفْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِىٓ إِن
              شَآءَ ٱللَّهُ مِنَ ٱلصَّٰبِرِينَ
            </Text>
            <Text style={styles.arti}>
              {' '}
              {'\n'}
              “Maka tatkala anak itu sampai (pada umur sanggup) berusaha bersama-sama Ibrahim, Ibrahim
              berkata: “Hai anakku sesungguhnya aku melihat dalam mimpi bahwa aku menyembelihmu. Maka
              fikirkanlah apa pendapatmu!”. Ia menjawab: “Hai bapakku, kerjakanlah apa yang diperintahkan
              kepadamu; insya Allah kamu akan mendapatiku termasuk orang-orang yang sabar”. Tatkala keduanya
              telah berserah diri dan Ibrahim membaringkan anaknya atas pelipis(nya), (nyatalah kesabaran
              keduanya).
              {'\n'}
            </Text>
            <Text style={styles.teory}>
              Dan Kami panggillah dia: “Hai Ibrahim. Sesungguhnya kamu telah membenarkan mimpi itu.
              Sesungguhnya demikianlah Kami memberi balasan kepada orang-orang yang berbuat baik. Sesungguhnya
              ini benar-benar suatu ujian yang nyata. Dan Kami tebus anak itu dengan seekor sembelihan yang
              besar”. (Qs. ash-Shâffât [37]: 102-107). {'\n'}
            </Text>

            <Text style={styles.SubTeory}>C. Dasar Hukum Disyariatkannya Qurban</Text>
            <Text style={styles.teory}>
              Ibadah Qurban disyari’atkan berdasarkan al-Qur’an, Hadits dan Ijmâ’ {'\n'}
            </Text>

            <Text style={styles.SubTeory}>D. Dalil Ibadah Qurban</Text>
            <Text style={styles.bullets}>Qs.Al-Kautsar[108]: 2 </Text>
            <Text style={styles.arabian}>فَصَلِّ لِرَبِّكَ وَانْحَرْ</Text>
            <Text style={styles.arti}>
              {' '}
              “Maka dirikanlah shalat karena Tuhanmu; dan berkorbanlah”.
              {'\n'}
            </Text>
            <Text style={styles.bullets}>(Qs. Al Hajj [22]: 36 </Text>
            <Text style={styles.arabian}>
              وَالْبُدْنَ جَعَلْنَاهَا لَكُمْ مِنْ شَعَائِرِ اللَّهِ لَكُمْ فِيهَا خَيْرٌ ۖ فَاذْكُرُوا اسْمَ
              اللَّهِ عَلَيْهَا صَوَافَّ ۖ فَإِذَا وَجَبَتْ جُنُوبُهَا فَكُلُوا مِنْهَا وَأَطْعِمُوا
              الْقَانِعَ وَالْمُعْتَرَّ ۚ كَذَٰلِكَ سَخَّرْنَاهَا لَكُمْ لَعَلَّكُمْ تَشْكُرُونَ
            </Text>
            <Text style={styles.arti}>
              {' '}
              {'\n'}
              "Dan telah Kami jadikan untuk kamu unta-unta itu sebahagian dari syi'ar Allah, kamu memperoleh
              kebaikan yang banyak padanya, maka sebutlah olehmu nama Allah ketika kamu menyembelihnya dalam
              keadaan berdiri (dan telah terikat). Kemudian apabila telah roboh (mati), maka makanlah
              sebahagiannya dan beri makanlah orang yang rela dengan apa yang ada padanya (yang tidak
              meminta-minta) dan orang yang meminta. Demikianlah Kami telah menundukkan untua-unta itu kepada
              kamu, mudah-mudahan kamu bersyukur".
              {'\n'}
            </Text>
            <Text style={styles.bullets}>Qs.Ash-Shâffât [37]: 107</Text>
            <Text style={styles.arabian}>وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ</Text>
            <Text style={styles.arti}>
              {' '}
              “Dan Kami tebus anak itu dengan seekor sembelihan yang besar.”
              {'\n'}
            </Text>
            <View style={styles.bottom} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
