import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';



const height = Dimensions.get('window').height;

const Detail: React.FC<{ route: { params: { title: string, imageBig: any } }, navigation: any }> = ({ route, navigation }) => {
  const { title, imageBig } = route.params;

  // Debugging to check the title passed
  console.log("Title passed from route: ", title);

  const details: Record<string, string> = {
    'First Aid': 
    `The purpose of this program is to educate vital life support skills and increase public knowledge of first aid. Engaging classes will teach participants CPR and wound care, enabling them to respond with confidence in an emergency and help create a safer neighborhood.\n
    Content:\n
    • Wounds and bleeding\n
    • Burns and fractures\n
    • Emergency scene management\n
    • Cardio-Pulmonary Resuscitation (CPR)\n
    • Respiratory distress e.g., Choking, blocked airway`,

    'Child Minding': 
    `Our program offers fundamental instruction in child and infant care, including safety procedures, feeding techniques, and diapering. 
    Participants will acquire the skills and self-assurance required to provide young children with appropriate support. 
    Our goal is to enable parents to raise and care for infants and young children.\n\n
    Content:\n
    • Birth to six-month-old baby needs\n
    • Seven-month to one-year-old needs\n
    • Toddler needs\n
    • Educational toys`,


    'Cooking': 
    `Through the use of healthful products and culinary methods, participants in this program learn how to produce wholesome family meals. 
    Our goal is to encourage healthier eating practices and advance general wellbeing. 
    Our mission is to empower people to prepare healthy meals.\n
    Content:\n
    • Nutritional requirements for a healthy body\n
    • Types of protein, carbohydrates, and vegetables\n
    • Planning meals\n
    • Preparation and cooking of meals`,

    'Garden maintenance': 
    `This course teaches the fundamentals of planting, trimming, and watering a successful home garden. 
    Participants will acquire useful methods for efficiently caring for plants. 
    Our mission is to enable people to design and care for stunning home gardens.\n\n
    Content:\n
    • Water restrictions and the watering requirements of indigenous and exotic plants\n
    • Pruning and propagation of plants\n
    • Planting techniques for different plant types.`,
    
    'Life Skills': 
    `Our curriculum gives participants the tools they need to succeed in daily life. 
    In order to promote independence, participants learn how to handle chores like cooking and budgeting. 
    Our goal is to increase self-assurance in handling everyday obstacles.\n
    Content:\n
    • Opening a bank account\n
    • Basic labour law (know your rights)\n
    • Basic reading and writing literacy\n
    • Basic numeric literacy.`,
     
    'Sewing': 
    `To guarantee a flawless fit and increased comfort, we provide expert modifications and custom tailoring services. 
    From minor tweaks to comprehensive redesigns, our talented tailors collaborate directly with customers to provide individualized solutions. 
    Focusing on fine craftsmanship, we assist customers in creating the look they want in each piece of clothing.\n
    Content:\n
    • Types of stitches\n
    • Threading a sewing machine\n
    • Sewing buttons, zips, hems and seams\n
    • Alterations\n
    • Designing and sewing new garments`,

    'Landscaping': 
    `To improve both brand-new and existing gardens, we offer landscaping services. 
    Our group creates and executes customized solutions that enhance outdoor areas.\n
    Content:\n
    • Indigenous and exotic plants and trees\n
    • Fixed structures (fountains, statues, benches, tables, built-in braai)\n
    • Balancing of plants and trees in a garden\n
    • Aesthetics of plant shapes and colours\n
    • Garden layout.`,
 };

  const pricing: Record<string, { price: string, duration: string }> = {
    'First Aid': { price: 'R1500', duration: '6 Months' },
    'Child Minding': { price: 'R750', duration: '6 Weeks' },
    'Cooking': { price: 'R750', duration: '6 Weeks' },
    'Garden maintenance': { price: 'R750', duration: '6 Weeks' },
    'Life Skills': { price: 'R1500', duration: '6 Months' },
    'Sewing': { price: 'R1500', duration: '6 Months' },
    'Landscaping': { price: 'R900', duration: '6 Weeks' },
  };

  const backgroundImages: Record<string, any> = {
    'First Aid': require('../assets/FirstAidMain.png'),
    'Child Minding': require('../assets/childmindingMain.png'),
    'Cooking': require('../assets/cookingMain.png'),
    'Garden maintenance': require('../assets/gardenMain.png'), // Ensure this image exists
    'Life Skills': require('../assets/lifeSkillsMain.png'),
    'Sewing': require('../assets/sewingMain.png'),
    'Landscaping': require('../assets/landScapingMain.png'),
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImages[title]} // This will fail if the key doesn't match
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle} // Apply image styles
      >
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-left" size={32} color="#000000" />
        </TouchableOpacity>
        <View style={styles.titlesWrapper}>
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
      </ImageBackground>

      <View style={styles.descriptionWrapper}>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{details[title]}</Text>
        </View>

        <View style={styles.priceTimeWrapper}>
          <Text style={styles.priceText}>Price: {pricing[title]?.price}</Text>
          <Text style={styles.timeText}>Duration: {pricing[title]?.duration}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    height: height * 0.5,
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: 587, // Example style for images
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 40,
  },
  titlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: -20,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: 'grey',
  },
  descriptionTextWrapper: {
    marginTop: 30,
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',
  },
  descriptionText: {
    marginTop: 20,
    fontWeight: 'normal',
    fontSize: 16,
    color: '#000000',
    alignItems: 'center',
  },
  priceTimeWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between', // Ensure equal space
    marginRight: 20,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F0F0F0',  // Price styled in green
    backgroundColor: '#001F3F',  // Light green background for the price
    padding: 10,
    borderRadius: 10,
  },
  timeText: {
    fontSize: 18,
    color: '#001F3F',  // Duration styled in amber color
    backgroundColor: '#F0F0F0',  // Light amber background for duration
    padding: 10,
    borderRadius: 10,
  },
});

export default Detail;
