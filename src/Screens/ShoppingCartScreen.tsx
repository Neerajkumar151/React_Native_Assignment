import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../Components/common/AppButton";
import Card from "../Components/common/Card";
import en from "../constants/en.json";
import { getShoppingCartStyles } from "../Styles/ShoppingCartStyles";
import { useTheme } from "../theme";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const INITIAL_CART: CartItem[] = [
  { id: "1", name: "Wireless Headphones", price: 120.0, quantity: 1 },
  { id: "2", name: "Mechanical Keyboard", price: 85.5, quantity: 1 },
  { id: "3", name: "USB-C Hub", price: 45.0, quantity: 2 },
];

const ShoppingCartScreen = () => {
  const [cart, setCart] = useState<CartItem[]>(INITIAL_CART);
  const { colors, spacing, typography, radius } = useTheme();
  const styles = useMemo(() => getShoppingCartStyles(colors, spacing, typography, radius), [colors, spacing, typography, radius]);

  const handleRemove = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderItem = ({ item }: { item: CartItem }) => (
    <Card style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.itemQuantity}>{en.shoppingCart.qty} {item.quantity}</Text>
        <AppButton 
          title={en.shoppingCart.remove}
          variant="danger" 
          size="sm" 
          onPress={() => handleRemove(item.id)} 
        />
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{en.shoppingCart.title}</Text>
        
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <Text style={styles.emptyText}>{en.shoppingCart.empty}</Text>
          }
        />

        <View style={styles.footer}>
          <Text style={styles.totalText}>{en.shoppingCart.total}</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View>
        <View style={styles.checkoutContainer}>
          <AppButton 
            title={en.shoppingCart.checkout}
            onPress={() => {}} 
            disabled={cart.length === 0}
            style={{ width: '100%' }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
