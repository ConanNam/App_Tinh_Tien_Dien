import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const Price = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{padding: 10}}>
        <Text style={styles.header}>ĐƠN GIÁ SINH HOẠT</Text>
        <View style={styles.Container}>
          <View style={styles.first}>
            <Text style={{fontWeight: 'bold'}}>BẬC 1</Text>
            <Text style={{color: '#d9d9d9'}}>
              Áp dụng từ 0 đến 50 kWh đầu tiên
            </Text>
          </View>
          <View style={styles.second}>
            <Text>1678 vnđ/kWh</Text>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.first}>
            <Text style={{fontWeight: 'bold'}}>BẬC 2</Text>
            <Text style={{color: '#d9d9d9'}}>
              Áp dụng từ 51 đến 100 kWh tiếp theo
            </Text>
          </View>
          <View style={styles.second}>
            <Text>1734 vnđ/kWh</Text>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.first}>
            <Text style={{fontWeight: 'bold'}}>BẬC 3</Text>
            <Text style={{color: '#d9d9d9'}}>
              Áp dụng từ 101 đến 200 kWh tiếp theo
            </Text>
          </View>
          <View style={styles.second}>
            <Text>2014 vnđ/kWh</Text>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.first}>
            <Text style={{fontWeight: 'bold'}}>BẬC 4</Text>
            <Text style={{color: '#d9d9d9'}}>
              Áp dụng từ 201 đến 300 kWh tiếp theo
            </Text>
          </View>
          <View style={styles.second}>
            <Text>2536 vnđ/kWh</Text>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.first}>
            <Text style={{fontWeight: 'bold'}}>BẬC 5</Text>
            <Text style={{color: '#d9d9d9'}}>
              Áp dụng từ 301 đến 400 kWh tiếp theo
            </Text>
          </View>
          <View style={styles.second}>
            <Text>2834 vnđ/kWh</Text>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.first}>
            <Text style={{fontWeight: 'bold'}}>BẬC 6</Text>
            <Text style={{color: '#d9d9d9'}}>Áp dụng từ 401 kWh trở lên</Text>
          </View>
          <View style={styles.second}>
            <Text>2927 vnđ/kWh</Text>
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={styles.header}>ĐƠN GIÁ KINH DOANH</Text>
        <View style={styles.Container}>
          <View style={styles.first}>
            <Text style={{fontWeight: 'bold'}}>KINH DOANH DỊCH VỤ</Text>
            <Text style={{color: '#d9d9d9'}}>Đồng giá cho mỗi kWh</Text>
          </View>
          <View style={styles.second}>
            <Text>2666 vnđ/kWh</Text>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.first}>
            <Text style={{fontWeight: 'bold'}}>SẢN XUẤT</Text>
            <Text style={{color: '#d9d9d9'}}>Đồng giá cho mỗi kWh</Text>
          </View>
          <View style={styles.second}>
            <Text>1685 vnđ/kWh</Text>
          </View>
        </View>
        <View style={styles.Container}>
          <View style={styles.first}>
            <Text style={{fontWeight: 'bold'}}>CƠ QUAN NHÀ NƯỚC</Text>
            <Text style={{color: '#d9d9d9'}}>Đồng giá cho mỗi kWh</Text>
          </View>
          <View style={styles.second}>
            <Text>1902 vnđ/kWh</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Price;

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 20,
    color: '#2E07F8',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  Container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderColor: '#cccccc',
    height: 150,
    marginBottom: 20,
    elevation: 5,
  },
  first: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 0.5,
  },
  second: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
